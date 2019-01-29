<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Requests\PaymentsRequest;
use App\Exceptions\PaymentException;
use Exception;
use Sentinel;
use Lang;
use Carbon\Carbon;
use Session;

/* authorize.net not used for now
use net\authorize\api\contract\v1 as AnetAPI;
use net\authorize\api\controller as AnetController;
*/
use Unirest\Request as UniRequest;

use App\Helpers\Template;
use App\Cart;

class Payments extends Model {

    use SoftDeletes;

    protected $dates = ['deleted_at'];
    protected $table = 'payments';
    protected $guarded = ['id'];
    protected $transaction_type = 'authCaptureTransaction';
    
    private $expi_url = 'https://internationalaccessmedia.com/gr/gateway.php';
    private $error_codes = array(1 => 'approved', 2 => 'declined', 3 => 'error');
    public function author()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
	
	public function cart()
    {
        return $this->hasMany('App\Payments', 'cart_id');
    }
    
    public function items()
    {
        return $this->hasMany('App\PaymentItems', 'payment_id');
    }
        
    public function setUpGateway()
    {
        //define("AUTHORIZENET_LOG_FILE", "phplog");
        $envirmoent = env('EXPI_ENVIROMENT');
        $merchant = new AnetAPI\MerchantAuthenticationType();
        $merchant->setName(env('EXPI_LOGIN_'.$envirmoent));
        $merchant->setTransactionKey(env('EXPI_PASS_'.$envirmoent));        
        
        return $merchant;
    }
    
    public function setCreditCard(PaymentsRequest $request)
    {
        $credit_card = new AnetAPI\CreditCardType();
        $credit_card->setCardNumber($request->get('cc_number'));
        $credit_card->setExpirationDate($request->get('cc_date'));
        
        return $credit_card;
    }
    
    public function makePayment(PaymentsRequest $cc, $total, $user_id, $cart_items = array(), $recurring = false)
    {
        $user = Sentinel::findById($user_id);
        if($user) {
            
            /* authorize.net
            $gateway = $this->setUpGateway();
            $payment = new AnetAPI\PaymentType();
            $payment->setCreditCard($credit_card);

            $transaction = new AnetAPI\TransactionRequestType();
            $transaction->setTransactionType($this->transaction_type); 
            $transaction->setAmount($total);
            $transaction->setPayment($payment);

            $payment_request = new AnetAPI\CreateTransactionRequest();
            $payment_request->setMerchantAuthentication($gateway);
            $payment_request->setTransactionRequest($transaction);

            $envirmoent = (env('EXPI_ENVIROMENT') == 'LIVE') ? \net\authorize\api\constants\ANetEnvironment::PRODUCTION : \net\authorize\api\constants\ANetEnvironment::SANDBOX;
            //var_dump($envirmoent);die();
            //$envirmoent = 'https://secure.expitrans.com/gw/transact/anet.dll';
            $controller = new AnetController\CreateTransactionController($payment_request);
            $response = $controller->executeWithApiResponse($envirmoent);

            $transaction_id = '123'; //get from response
            $paid = 0; //get from response*/

            $headers = array();
            /*$success_status = false;
            $status_request = UniRequest::post($this->expi_url, $headers, array('type' => 'get_succes_key'));
            if($status_request->code == 200 && $status_request->raw_body) {
                $jsonResponse = json_decode($status_request->raw_body);
                if($jsonResponse->success) {
                    $success_status = $jsonResponse->status;
                }
            }
            
            if(!$status_request) {
                throw new Exception(Lang::get('payments/message.error.could_not_get_response_from_payment_gateway'));
            }*/
            
            $payment = new Payments();
            $payment->user_id = $user->id;
            $payment->amount = $total;
            $payment->save();
            
            $desc = '';
            $discount = 0;
            if($cart_items) {
                foreach($cart_items as $item) {
                    if($item['qty'] && $item['qty'] > 1 ) $desc .= $item['qty'] . ' x ';
                    $desc .= $item['item_id'] . ' ';
                    
                    $discount += $item['discount'];
                    PaymentItems::insertTransactionItem($payment, $item);
                }
            }

            if($discount) {
                $payment->discount = $discount;
                $payment->save();
            }
            
            //expigate
            $cc_date = str_replace('/', '', $cc->get('cc_date'));
            $payment_data = array(
                'orderid' => $payment->id,
                'orderdescription' => $desc,
                'tax' => 0,
                'shipping' => 0,
                'ipaddress' => \Request::ip(),
                'ccnumber' => $cc->get('cc_number'),
                'ccexp' => $cc_date,
                'cvv' => $cc->get('cc_cvc'),
                'amount' => $total,
                'firstname' => $user->first_name,
                'lastname' => $user->last_name,
                'city' => $user->city,
                'zip' => $user->postal,
                'country' => $user->country,
                'email' => $user->email,
                'autorization_key' => env('EXPI_LIB_API_KEY'),
                'type' => env('EXPI_LIB_API_AUTHORIZATION_TYPE', 'sale'),
            );
            
            $expi = UniRequest::post($this->expi_url, $headers, $payment_data);
            if($expi->code == 200 && $expi->raw_body) {
                $jsonResponse = json_decode($expi->raw_body);
                if($jsonResponse->success) {
                    //all good
                    $payment->transaction_id = $jsonResponse->transactionid;
                    $payment->paid = 1;
                    if(Session::has('coupon_code')) {
                        $code = Session::get('coupon_code');
                        $payment->coupon = $code;
                    }
                    
                    $payment->discount = Cart::getTotalDiscount(false);
                    $payment->save();
                    
                    //mark all items as paid
                    $payment_items = PaymentItems::where('payment_id', '=', $payment->id)->get();
                    $items_total = 0;
                    if($payment_items) {
                        foreach($payment_items as $item) {
                            foreach($cart_items as $cart) {
                                if(isset($cart['item_id']) == $item->item_id) {
                                    $item_total = 0;
                                    $qty = (int)$cart['qty'];
                                    if(!$qty) $qty = 1;
                                    $item_total += $cart['price'] * $qty;
                                    $items_total += $item_total - $cart['discount'];
                                    
                                    $item->paid = $item_total;
                                    $item->save();

                                    $object = Template::loadItemByType($item->type, $item->item_id);
                                    $object->paid = 1;
                                    $object->last_updated = Carbon::now();
                                    $object->save();
                                }
                            }
                        }
                    }

                    if($items_total == $total) {
                        Cart::clearCart();
                    } else { // looks like some hack
                        foreach($payment_items as $item) {
                            $object = Template::loadItemByType($item->type, $item->item_id);
                            $object->paid = 0;
                            
                            $object->save();
                        }
                        
                        throw new Exception(Lang::get('payments/message.error.hack'));
                    }
                    
                } else {
                    throw new PaymentException($jsonResponse);
                }
            } else throw new Exception(Lang::get('payments/message.error.could_not_get_response_from_payment_gateway'));

            return true;
            
        } else {
            throw new Exception(Lang::get('general.user_not_exist'));
        }
    }
    
    //temporary
    public static function successPayment($payment_id)
    {
        try {
            $discount = 0;
            $payment = Payments::where('id', '=', $payment_id)->firstOrFail();
            $payment->paid = 1;
            if(Session::has('coupon_code')) {
                $code = Session::get('coupon_code');
                $coupon = Coupons::getCouponByCode($code);
                $coupon->increment('times_used');
                $payment->coupon = $code;
            }
            
            $cart_items = PaymentItems::where('payment_id', '=', $payment->id)->get();
            if($cart_items) {
                foreach($cart_items as $item) {
                    $object = Template::loadItemByType($item->type, $item->item_id);
                    $discount += $item->discount;
                    
                    $object->paid = 1;
                    $object->last_updated = Carbon::now();
                    $object->save();
                }
            }
            $payment->discount = $discount;
            $payment->save();
            
            Cart::clearCart();
            
        } catch (ModelNotFoundException $e) {
            return false;
        }
        
        return true;
    }
}

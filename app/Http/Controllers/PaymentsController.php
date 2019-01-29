<?php

namespace App\Http\Controllers;

use App\Payments;
use App\PaymentItems;
use App\Cart;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Requests\PaymentsRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Response;
use Sentinel;
use Redirect;
use Carbon\Carbon;
use Datatables;
use Form;
use Validator;
use Session;

use PaymentException;
use Exception;
use App\Helpers\Template;

class PaymentsController extends WeedController
{

    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $payments = Payments::all();

        return View('admin.payments.index', compact('payments'));
    }
    
    public function userList()
    {
        $user = Sentinel::getUser();
        $transactions = Payments::where('user_id', $user->id)->get();
        
        return View('frontend.payments.user', compact('transactions'));
    }
    
    public function review()
    {
        $items = Cart::getCart();
        if($items) {
            return View('frontend.payments.review', compact('items'));
        } else {
            return redirect('pendingpayment');
        }
    }
    
    public function pending()
    {
        $items = Template::getUserNotPaidItems();
            
        return View('frontend.payments.pending', compact('items'));
    }

    public function getModalDelete(Payments $payments)
    {
        $model = 'payments';
        $confirm_route = $error = null;
        try {
            $confirm_route = route('delete/payments', ['id' => $payments->id]);
            return View('admin/layouts/modal_confirmation', compact('error', 'model', 'confirm_route'));
        } catch (GroupNotFoundException $e) {

            $error = trans('payments/message.error.delete', compact('id'));
            return View('admin/layouts/modal_confirmation', compact('error', 'model', 'confirm_route'));
        }
    }

    public function destroy(Payments $payments)
    {
        if ($payments->delete()) {
            return redirect('admin/payments')->with('success', trans('payments/message.success.delete'));
        } else {
            return redirect('admin/payments')->withInput()->with('error', trans('payments/message.error.delete'));
        }
    }
    
    public function reviewRemoveItemConfirm($item)
    {
        $model = 'payments';
        $confirm_route = $error = null;

        try {
            $confirm_route = route('review/item/delete', ['id' => $item]);
            return View('layouts.modal_confirmation', compact('error', 'model', 'confirm_route'));
        } catch (GroupNotFoundException $e) {

            $error = trans('payments/message.error.cart_item');
            return View('layouts.modal_confirmation', compact('error', 'model', 'confirm_route'));
        }
    }
    
    public function reviewRemoveItem($item)
    {
        Cart::removeItemFromCart($item);
        
        return redirect('review')->with('success', trans('front/general.review_item_removed'));
    }
    
    public function reviewAddItem($item, $type)
    {
        $item = Template::loadItemByType($type, $item);
        if($item) Cart::insertToCart($type, $item);

        return redirect('review')->with('success', trans('front/general.review_item_added'));
    }
    
    //without payment gateway
    public function successPayment($payment_id)
    {
        $payment = Payments::successPayment($payment_id);
        if(!$payment) {
            return Redirect::to('/');
        }
    }
    
    //without payment gateway
    public function failedPayment()
    {
        //dont do anything for testing redirect with faild
        
        return redirect('my-account')->withInput()->with('error', trans('front/general.payment_canceled'));
        
    }
    
    public function paymentForm(Request $request)
    {
        $user = Sentinel::getUser();
        $total = Cart::renderTotal(false);
        /*if(!$total) {
            return redirect('review');
        }*/
        
        $rules = array(
            'marketing' => 'required',
        );

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return redirect('review')->with('error', trans('payments/message.error.marketing'));
        }
        
        $total = Cart::renderTotal(true);
        $is_developer = Template::isDeveloper(); //temporary, until payment processor is ready
        if($is_developer) {
            return View('frontend.payments.process', compact('total'));
        } else {
            
            $payment = new Payments();
            $payment->user_id = $user->id;
            $payment->amount = Cart::renderTotal(false);
            $payment->save();
            
            $items = Cart::getCart();
            if($items) {
                foreach($items as $item) {
                    PaymentItems::insertTransactionItem($payment, $item);
                }
            }
            
            $this->successPayment($payment->id);

            return redirect('my-account')->with('success', trans('payments/message.success.payment_accepted'));
        }
    }
    
    public function proccessPayment(PaymentsRequest $request)
    {
        $total = Cart::renderTotal(false);
        $items = Cart::getCart();
        $user = Sentinel::getUser();
        $recurring = $request->get('recurring');

        if(!$items) {
            $reponse = array('success' => false, 'msg' => trans('payments/message.error.no_items_in_cart'));
        } else {
            $gateway = new Payments();
            //$cc = $gateway->setCreditCard($request);
            $reponse = array();

            try {
                $result = $gateway->makePayment($request, $total, $user->id, $items, $recurring);

                Session::set('success', trans('payments/message.success.payment_accepted'));
                $url = route('my-account');
                $reponse = array('success' => true, 'redirect' => $url);
            } catch(PaymentException $e) {
                $reponse = array('success' => false, 'msg' => $e->getMessage());
            } catch(Exception $e) {
                $reponse = array('success' => false, 'msg' => $e->getMessage());
            }
        }
                
        return response()->json($reponse);
    }
    
    public function dataList()
    {
        if(\Request::ajax()) {
            $payments = Payments::all();

            return Datatables::of($payments)
                ->edit_column('author', function($payment){
                    return Form::Author($payment->user_id);
                })
                ->edit_column('amount', function($payment){
                    return Template::convertPrice($payment->amount);
                })
                ->edit_column('discount', function($payment){
                    return Template::convertPrice($payment->discount);
                })
                ->edit_column('paid', function($payment){
                    return Form::Published($payment->paid);
                })
                ->edit_column('created_at', function($payment){
                    return $payment->created_at->diffForHumans();
                })
                ->add_column('actions', function($payment) {
                    $actions = '<a href="'. route('confirm-delete/payments', $payment->id) .'" data-toggle="modal" data-target="#delete_confirm">
                        <i class="livicon" data-name="remove-alt" data-size="18" data-loop="true" data-c="#f56954" data-hc="#f56954" title="'.trans('payments/table.delete-payments').'"></i>
                    </a>';

                    return $actions;
                })
                ->make(true);
        }
    }
    
}

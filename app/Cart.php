<?php

namespace App;

use App\Plans;
use App\PaymentItems;
use App\Helpers\Template;
use Carbon\Carbon;
use Session;
use Illuminate\Database\Eloquent\Model;
use DateTime;

use App\Coupons;

class Cart extends Model
{

	public static function getCart()
    {
        $items = Session::get('cart', array());
        
        return $items;
    }
	
	public static function clearCart()
    {
        Session::set('cart', array());
        Session::forget('coupon_code');
    }
	
    public static function addToCart($item)
    {
        $items = Session::get('cart', array());
        foreach($items as $key => $cart_item) {
            if($cart_item['item_id'] == $item['item_id'] && $cart_item['type'] == $item['type']) {
                //already in cart
                $object = Template::loadItemByType($item['type'], $item['item_id']);
                $qty = Cart::getAddToCartQty($item['type'], $object);
                
                if($qty != $cart_item['qty']) {
                    $items[$key]['qty'] = $qty;

                    Session::set('cart', $items);
                }
                
                return true;
            }
        }
        $items[] = $item;
        Session::set('cart', $items);
        
        return true;
    }
    
	public static function insertToCart($type, $item)
    {
        $object = Template::loadItemByType($type, $item->id);
        $active = $item->activeByUser();
        if($active) {
            $plan = Plans::getItemPaymentPlan($type, $item);
            if($plan) {
                $plan_id = $plan->id;
            } else $plan_id = 0;

            $price = Plans::getItemPrice($type, $item);
            $qty = Cart::getAddToCartQty($type, $item);

            //check if was not already paid
            $paid = PaymentItems::validatePaid($type, $item->id);

            $discount = 0;
            if(Session::has('coupon_code')) {
                $code = Session::get('coupon_code');
                $coupon = Coupons::getCouponByCode($code);
                $item_price = $price * $qty;
                $discount = Coupons::getDiscountByCoupon($coupon, $item_price);
            }

            $total = $price * $qty - $paid;
            if($total > 0) {
                $item->paid = 0; //turn of ad until its paid
                $item->save();
            }

            $cart_item = array(
                'type' => $type,
                'title' => $item->title,
                'item_id' => $item->id,
                'plan_id' => $plan_id,
                'qty' => $qty,
                'price' => $price,
                'paid' => $paid,
                'discount' => $discount,
            );

            if($total > 0) {
                Cart::addToCart($cart_item);
            } else {
                $item->paid = 1;
                $item->last_updated = Carbon::now();
                $item->save();
            }
        } else $cart_item = array();
        
        return $cart_item;
    }
	
	public static function getAddToCartQty($type, $item)
    {
        $qty = 1;
        if($type == 'ads') {
            $start_date = new DateTime($item->published_from);
            $end_date = new DateTime($item->published_to);
            $diff = $start_date->diff($end_date)->m + ($start_date->diff($end_date)->y * 12);
            
            if($diff) $qty = $diff;
        } elseif($type == 'classifieds') {
            $qty = $item->countMulticity();
        }

        return $qty;
    }
	
	public static function removeItemFromCart($item_id)
    {
        $items = Session::get('cart', array());
        foreach($items as $key => $cart_item) {
            if($cart_item['item_id'] == $item_id) {
                unset($items[$key]);
            }
        }
        
        Session::set('cart', $items);

        return true;
    }
	
	public static function renderTotal($show_currency = true)
    {
        $items = Session::get('cart', array());
        $total = 0;
        $paid = 0;
        foreach($items as $cart_item) {
            $qty = (int)$cart_item['qty'];
            if(!$qty) $qty = 1;
            $total += $cart_item['price'] * $qty;
            if(isset($cart_item['paid']) && $cart_item['paid']) $total -= $cart_item['paid'];
            if(isset($cart_item['discount']) && $cart_item['discount']) $total -= $cart_item['discount'];
        }
        
        if($show_currency) $total_price = Template::convertPrice($total);
        else $total_price = $total;

        return $total_price;
    }
    
    public static function applyCoupon(Coupons $coupon)
    {
        $total = $coupon->max_amount;
        $code = false;
        $items = Cart::getCart();
        foreach($items as $key => $item) {
            if($total > 0) {
                $item_price = $item['price'] * $item['qty'];
                $discount = Coupons::getDiscountByCoupon($coupon, $item_price);

                $total -= $discount;
                if($total < 0) {
                    $discount = $item_price - abs($total);
                }
                if($discount) {
                    $items[$key]['discount'] = $discount;
                    Session::set('coupon_code', $coupon->code);
                    $code = true;
                }
            }
        }
        
        Session::set('cart', $items);
        return $code;
    }
    
    public static function getTotalDiscount($show_currency = true)
    {
        $items = Session::get('cart', array());
        $discount = 0;
        foreach($items as $cart_item) {
            if(isset($cart_item['discount']) && $cart_item['discount']) $discount += $cart_item['discount'];
        }
        
        if($show_currency) $discount = Template::convertPrice($discount);
        
        return $discount;
    }
}

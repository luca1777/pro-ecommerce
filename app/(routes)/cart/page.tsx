"use client"
import React from 'react'
import { increment, decrement} from "@/app/_redux/features/cart-slice";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/_redux/store';
import { useAppSelector } from '@/app/_redux/store';

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartAmount = useAppSelector((state) => state.cartReducer.value.cartAmount);
    return (
    <div className='flex gap-6'>
      <p>Products in cart: {cartAmount}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Cart;
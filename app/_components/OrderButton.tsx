"use client";
import React from 'react'
import { createOrder } from '../utils';

interface OrderButtonProps {
    productId: number;
}

const OrderButton = ({ productId }: OrderButtonProps) => {
    const handleOrder = async () => {
        await createOrder(productId)
    }
  return (
    <button onClick={handleOrder} className='border p-1'>Create Order</button>
  )
}

export default OrderButton
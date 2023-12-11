"use client"
import React from 'react';
import { removeFromCart } from '../utils/cartUtils';
import { useCartQuantity } from '../utils/useCartQuantity';
import { LuMinus } from 'react-icons/lu';

const MinusCartButton = ({ product }) => {
  const { setCartQuantity } = useCartQuantity();

  const handleAddToCart = () => {
    removeFromCart(product);
    setCartQuantity(prevQuantity => prevQuantity + 1); // Update cart quantity
  };

  return (
    <button
    type="submit"
    onClick={handleAddToCart}
    className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
  >
    <LuMinus className="h-4 w-4" />
  </button>
  );
};

export default MinusCartButton;
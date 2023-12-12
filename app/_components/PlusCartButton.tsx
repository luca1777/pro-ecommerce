"use client"
import React from 'react';
import { addToCart } from '../utils/cartUtils';
import { useCartQuantity } from '../utils/useCartQuantity';
import { LuPlus } from 'react-icons/lu';

const PlusCartButton = ({ product }) => {
  const { setCartQuantity } = useCartQuantity();

  const handleAddToCart = () => {
    addToCart(product);
    setCartQuantity(prevQuantity => prevQuantity + 1); // Update cart quantity
  };

  return (
    <button onClick={handleAddToCart} className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80">
      <LuPlus className="h-4 w-4" />
    </button>
  );
};

export default PlusCartButton;

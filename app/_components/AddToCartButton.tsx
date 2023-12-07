"use client"
import React from 'react';
import { addToCart } from '../utils/cartUtils';
import { useCartQuantity } from '../utils/useCartQuantity';

const AddToCartButton = ({ product }) => {
  const { setCartQuantity } = useCartQuantity();

  const handleAddToCart = () => {
    addToCart(product);
    setCartQuantity(prevQuantity => prevQuantity + 1); // Update cart quantity
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex w-full justify-center items-center text-white p-4 rounded-full bg-blue-600 tracking-wide hover:opacity-90"
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
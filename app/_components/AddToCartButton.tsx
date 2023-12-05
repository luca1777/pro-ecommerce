"use client"
import React from 'react';
import { addToCart } from '../utils/cartUtils'; 

const AddToCartButton = ({ product }) => {
  const handleAddToCart = () => {
    addToCart(product);
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
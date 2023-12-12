"use client";
import React from "react";
import { removeItem } from "../utils/cartUtils";
import { useCartQuantity } from "../utils/useCartQuantity";
import { IoCloseOutline } from "react-icons/io5";

const RemoveItemBtn = ({ product }) => {
  const { setCartQuantity } = useCartQuantity();

  const handleAddToCart = () => {
    removeItem(product);
    setCartQuantity((prevQuantity) => prevQuantity + 1); // Update cart quantity
  };

  return (
    <button onClick={handleAddToCart} className="ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200">
      <IoCloseOutline className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white" />
    </button>
  );
};

export default RemoveItemBtn;

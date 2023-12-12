"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import { getTotalCartPrice } from "../utils/cartUtils";
import PlusCartButton from "./PlusCartButton";
import MinusCartButton from "./MinusCartButton";
import CartImage from "@/app/assets/shopping-cart-20392.png"

interface Product {
  id: number;
  name: string;
  price: string;
  images: {
    src: string;
  }[];
  quantity: number;
}

const Cart = ({ isModalCartOpen, closeModal }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, settotalPrice] = useState(0);

  useEffect(() => {
    const updateCartItems = () => {
      const storedCart = localStorage.getItem("cart");
      const cart = storedCart ? JSON.parse(storedCart) : [];
      setCartItems(cart);
      settotalPrice(getTotalCartPrice());
    };

    window.addEventListener("cartUpdated", updateCartItems);

    updateCartItems();

    return () => {
      window.removeEventListener("cartUpdated", updateCartItems);
    };
  }, []);

  const modalPosition = !isModalCartOpen ? "translate-x-0" : "translate-x-full";

  return (
    <div>
      <div className="relative z-50 overflow-hidden">
        <div className="fixed inset-0 bg-black/30 opacity-100 backdrop-blur-[.5px]"></div>
        <div className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-1 border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl md:w-[390px] transition-transform duration-500 ease-in-out ${modalPosition}">
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">My Cart</p>
            <button onClick={closeModal}>
              <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors">
                <IoCloseOutline className="h-6 w-6 transition-all ease-in-out hover:scale-110" />
              </div>
            </button>
          </div>
          {cartItems.length === 0 ? (
            <div className="mt-20 flex flex-col items-center justify-center overflow-hidden py-10">
              <Image height={50} src={CartImage} alt="Cart Img" />
              <p className="text-2xl mt-6 font-bold">Your Cart is Empty</p>
            </div>
          ) : (
            <div className="flex h-full flex-col justify-between overflow-hidden p-1">
              <ul className="flex-grow overflow-auto py-4">
                {cartItems.map((item) => (
                  <li
                    className="flex w-full flex-col border-b border-neutral-300"
                    key={item.id}
                  >
                    <div className="relative flex w-full flex-row justify-between px-1 py-4">
                      <div className="absolute z-40 -mt-2 ml-[55px]">
                        <button className="ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200">
                          <IoCloseOutline className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white" />
                        </button>
                      </div>
                      <Link className="z-30 flex flex-row space-x-4" href="/">
                        <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300">
                          <Image
                            width="64"
                            height="64"
                            alt="Product img"
                            className="h-full w-full object-cover"
                            src={item.images[0].src}
                          />
                        </div>
                        <div className="flex flex-1 flex-col text-base">
                          <span className="font-medium">{item.name}</span>
                        </div>
                      </Link>
                      <div className="flex h-16 flex-col justify-between">
                        <p className="flex justify-end space-y-2 text-right text-sm font-medium">
                          {item.price}.00
                          <span className="ml-1 inline font-medium">RON</span>
                        </p>
                        <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200">
                          <MinusCartButton product={item} />
                          <p className="w-6 text-center">
                            <span className="w-full text-sm">
                              {item.quantity}
                            </span>
                          </p>
                          <PlusCartButton product={item} />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="py-4 text-sm text-neutral-500">
                <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1">
                  <p>Shipping</p>
                  <p className="text-right">Calculated at checkout</p>
                </div>
                <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1">
                  <p>Total</p>
                  <p className="text-right text-base text-black">
                    {totalPrice.toFixed(2)}
                    <span className="ml-1 inline">RON</span>
                  </p>
                </div>
              </div>
              <button className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

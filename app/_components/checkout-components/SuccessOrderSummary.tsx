"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const SuccessOrderSummary = ({ dataOrder }) => {
  const [showOrder, setShowOrder] = useState(false);
  
  let subTotal = dataOrder.line_items.reduce((acc, item) => acc + parseFloat(item.subtotal), 0);


  const handlerShowOrder = () => {
    setShowOrder(!showOrder);
  };

  return (
    <div>
      <div className="lg:hidden border-b border-t border-gray-300 h-16 mx-[-20px] bg-gray-100">
        <div className="px-6 max-w-xl h-full flex mx-auto justify-between items-center">
          <button onClick={handlerShowOrder}>
            <div className="flex items-center gap-2">
              <BsCart2 className="w-6 h-6 text-[#1773B0]" />
              <p className="font-semibold text-[#1773B0]">Show order summary</p>
              {showOrder ? (
                <IoIosArrowUp color="#1773B0" />
              ) : (
                <IoIosArrowDown color="#1773B0" />
              )}
            </div>
          </button>
          <div>
            <p className="font-semibold">
              {dataOrder.total.replace(".", ",")} lei
            </p>
          </div>
        </div>
      </div>
      <div>
        {showOrder ? (
          <div className="lg:hidden bg-gray-100 mx-[-20px] border-b border-gray-300">
              <div className="mx-auto max-w-xl mb-6 px-6 pt-4">
                <h2 className="text-2xl font-semibold">Order Summary</h2>
              </div>
              <div className="mx-auto max-w-xl px-6 pb-4">
                <ul>
                  {dataOrder.line_items.map((item, index) => (
                    <li key={item.id + "-" + index} className="">
                      <div className="flex w-full flex-row justify-between pt-2 pb-6 border-b-2 border-gray-300">
                        <div className="absolute z-40 -mt-2 ml-[53px]">
                          <div className="flex items-center justify-center h-[22px] w-[22px] rounded-full bg-neutral-500">
                            <p className="text-sm text-white">
                              {item.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="z-30 flex flex-row space-x-4">
                          <div className="relative h-[68px] w-[68px] cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300">
                            <Image
                              width="64"
                              height="64"
                              alt="Product img"
                              className="h-full w-full object-cover"
                              src={item.image.src}
                            />
                          </div>
                          <div className="flex flex-1 flex-col text-base">
                            <span className="font-medium">{item.name}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <p className="text-sm font-semibold">
                            {item.price},00
                            <span className="ml-1 inline">RON</span>
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between mt-4">
                  <p>Subtotal</p>
                  <p className="font-semibold">
                  {subTotal.toFixed(2).replace(".", ",")}
                    <span className="ml-1">RON</span>
                  </p>
                </div>
                <div className="flex justify-between mt-3 pb-4 border-b border-gray-300">
                  <p>Transport</p>
                  <p className="">
                  {subTotal >= 300
                      ? "Gratuit"
                      : "19,99 RON"}
                  </p>
                </div>
                <div className="flex justify-between mt-4 text-lg font-bold">
                  <p>Total</p>
                  <p className="font-semibold">
                    {dataOrder.total.replace(".", ",")}
                    <span className="ml-1">RON</span>
                  </p>
                </div>
              </div>
            </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SuccessOrderSummary;

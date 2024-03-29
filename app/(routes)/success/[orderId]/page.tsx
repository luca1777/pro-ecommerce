import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/app/assets/logo.png";
import { PiCheckCircleThin } from "react-icons/pi";
import { getOrder } from "@/app/utils";
import Curier from "@/app/assets/curier.png";
import SuccessOrderSummary from "@/app/_components/checkout-components/SuccessOrderSummary";

interface LineItem {
  id: number;
  name: string;
  quantity: number;
  price: string;
  subtotal: string;
  image: {
    src: string;
  };
}

interface Billing {
  first_name: string;
  last_name: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email: string;
  phone: string;
}

interface DataOrder {
  total: string;
  line_items: LineItem[];
  billing: Billing;
}

const Success = async ({ params }) => {
  const orderId = params.orderId;
  const dataOrder: DataOrder = await getOrder(orderId);

  let subTotal = dataOrder.line_items.reduce((acc, item) => acc + parseFloat(item.subtotal), 0);

  return (
    <div className="relative border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="p-5 lg:w-3/5 lg:border-r lgborder-l border-gray-300 bg-white">
            <header className="w-full h-[90px] lg:border-b border-gray-300 flex items-center justify-center bg-white">
              <Link href="/">
                <Image height={80} width={180} src={Logo} alt="logo" />
              </Link>
            </header>
            <SuccessOrderSummary dataOrder={dataOrder} />
            <div className="pt-4 px-4 mx-auto max-w-xl">
              <div className="flex flex-row gap-2">
                <div>
                  <PiCheckCircleThin size="65px" color="#1773B0" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-gray-600">Order #{orderId}</p>
                  <h1 className="font-semibold text-lg">
                    Thank you, {dataOrder.billing.first_name}, your order will
                    arrive soon!
                  </h1>
                </div>
              </div>
              <div className="">
                <Image
                  width={600}
                  height={600}
                  src={Curier}
                  alt="curier"
                ></Image>
              </div>
              <div className="border rounded-md border-gray-300 overflow-hidden">
                <p className="px-4 pt-4 text-2xl font-semibold">
                  Order details
                </p>
                <div className="p-4 flex w-full">
                  <div className="w-1/2 pr-4">
                    <p className="font-semibold pb-1 break-words">
                      Contact information
                    </p>
                    <p className="pb-4 break-words">
                      {dataOrder.billing.email}
                    </p>
                    <p className="font-semibold pb-1 break-words">
                      Shipping address
                    </p>
                    <p className="break-words">
                      {dataOrder.billing.first_name}{" "}
                      {dataOrder.billing.last_name}
                    </p>
                    <p className="break-words">{dataOrder.billing.address_1}</p>
                    <p className="break-words">{dataOrder.billing.address_2}</p>
                    <p className="break-words">
                      {dataOrder.billing.postcode} {dataOrder.billing.city}{" "}
                      {dataOrder.billing.state}
                    </p>
                    <p className="break-words">{dataOrder.billing.country}</p>
                    <p className="pb-4 break-words">
                      {dataOrder.billing.phone}
                    </p>
                    <p className="font-semibold pb-1 break-words">
                      Metoda de expediere
                    </p>
                    <p className="break-words">Sameday Courier</p>
                  </div>
                  <div className="w-1/2 break-words pl-4">
                    <p className="font-semibold pb-1 break-words">
                      Payment Method
                    </p>
                    <p className="pb-4 break-words">
                      Cash on delivery
                      <span className="font-semibold break-words">
                        {" "}
                        - {dataOrder.total.replace(".", ",")} RON
                      </span>
                    </p>
                    <p className="font-semibold pb-1 break-words">
                      Billing Adress
                    </p>
                    <p className="break-words">
                      {dataOrder.billing.first_name}{" "}
                      {dataOrder.billing.last_name}
                    </p>
                    <p className="break-words">{dataOrder.billing.address_1}</p>
                    <p className="break-words">{dataOrder.billing.address_2}</p>
                    <p className="break-words">
                      {dataOrder.billing.postcode} {dataOrder.billing.city}{" "}
                      {dataOrder.billing.state}
                    </p>
                    <p className="break-words">{dataOrder.billing.country}</p>
                    <p className="pb-4 break-words">
                      {dataOrder.billing.phone}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between py-10 items-center">
                  <div>
                    <p>
                      Do you need help?{" "}
                      <span className="hover:underline text-[#1773B0] font-semibold">
                        <Link href="mailto:pro-ecommerce@pro-ecommerce.com">
                          Contact us
                        </Link>
                      </span>
                    </p>
                  </div>
                  <div>
                    <button className="border font-semibold rounded-md p-4 bg-blue-500 hover:bg-blue-700 text-white">
                      <Link href="/">Continue shopping</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-2/5 border-r p-5 bg-white lg:bg-gray-200 lg:bg-opacity-50 border-gray-300">
            <div className="w-full">
              <div className="mx-auto max-w-xl mb-6 px-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PaymentLabel from "@/app/_components/checkout-components/PaymentLabel";
import Image from "next/image";
import Link from "next/link";
import RemoveItemBtn from "@/app/_components/RemoveItemBtn";

interface CheckoutProduct {
  id: number;
  name: string;
  price: string;
  size: string;
  images: {
    src: string;
  }[];
  quantity: number;
}

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  paymentMethod: "cash",
  message: "",
  termsOfService: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email.").required("Required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Required"),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required"),
  county: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  postalCode: Yup.string()
    .matches(/^\d{6}$/, "Postal code must be exactly 6 numbers.")
    .required("Postal code is required"),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("Required"),
});

const App = () => {
  const [cartItems, setCartItems] = useState<CheckoutProduct[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];
    setCartItems(cart);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto bg-white">
      <div className="formlist col-span-2 md:col-span-1 p-5 w-full">
        <Formik
          initialValues={INITIAL_FORM_STATE}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <div className="mx-auto max-w-xl">
              <div className="">
                <h2 className="text-2xl font-semibold">Contact</h2>
              </div>

              <div className="my-4 mb-6 max-w-xl">
                <label htmlFor="email" className="block">
                  E-mail
                </label>
                <Field
                  name="email"
                  placeholder="Please enter your e-mail"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-3 px-2"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="">
                <h2 className="text-2xl font-semibold">Delivery</h2>
              </div>

              <div className="my-4 max-w-xl">
                <label htmlFor="country" className="">
                  Country
                </label>
                <Field
                  as="select"
                  name="country"
                  className="mt-1 w-full rounded-md border border-gray-300 py-3 px-2"
                >
                  <option value="">Please select your country</option>
                  <option value="Romania">Romania</option>
                </Field>
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div className="mb-4 flex w-full flex-col md:flex-row gap-4 max-w-xl">
                <div className="w-full">
                  <label htmlFor="firstName" className="">
                    First Name
                  </label>
                  <Field
                    name="firstName"
                    placeholder="Please enter your first name"
                    type="text"
                    className="mt-1 w-full rounded-md border border-gray-300 py-3 px-2"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="lasName" className="">
                    Last Name
                  </label>
                  <Field
                    name="lastName"
                    placeholder="Please enter your last name"
                    type="text"
                    className="mt-1 w-full rounded-md border border-gray-300 py-3 px-2"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>

              <div className="mb-4 max-w-xl">
                <label htmlFor="addressLine1" className="block">
                  Adress
                </label>
                <Field
                  name="addressLine1"
                  placeholder="Please enter your adress"
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-2"
                />
                <ErrorMessage
                  name="addressLine1"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div className="mb-4 max-w-xl">
                <label htmlFor="addressLine2" className="block">
                  Apartment, suite, etc. (optional)
                </label>
                <Field
                  name="addressLine2"
                  placeholder="Please enter your optional details"
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-2"
                />
                <ErrorMessage
                  name="addressLine2"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div className="mb-4 flex w-full flex-col md:flex-row gap-4 max-w-xl">
                <div className="w-full">
                  <label htmlFor="postalCode" className="block">
                    Postal Code
                  </label>
                  <Field
                    name="postalCode"
                    placeholder="Please enter your postal code"
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-2"
                  />
                  <ErrorMessage
                    name="postalCode"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="city" className="block">
                    City
                  </label>
                  <Field
                    name="city"
                    placeholder="Please enter your city"
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-2"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="county" className="block">
                    County
                  </label>
                  <Field
                    name="county"
                    placeholder="Please enter your county"
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-2"
                  />
                  <ErrorMessage
                    name="county"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>

              <div className="mb-4 max-w-xl">
                <label htmlFor="phone" className="block">
                  Phone
                </label>
                <Field
                  name="phone"
                  placeholder="Please enter your phone"
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-2"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div className="my-8 max-w-xl">
                <h2 className="text-lg font-semibold mb-2">Courier</h2>
                <div>
                  <p className="flex border border-gray-400 rounded-md p-3.5 cursor-pointer justify-between bg-blue-100 w-full">
                    Sameday Curier
                    <span className="font-semibold">19.99 RON</span>
                  </p>
                </div>
              </div>

              {/* Payment form select */}

              <PaymentLabel />

              <div className="orderlist max-w-xl my-4">
                <div className="w-full">
                  <div className="mx-auto max-w-xl mb-6">
                    <h2 className="text-2xl font-semibold">Order Summary</h2>
                  </div>
                  <div className="mx-auto max-w-xl">
                    <ul>
                      {cartItems.map((item) => (
                        <li key={item.id} className="">
                          <div className="flex w-full flex-row justify-between py-2">
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
                                  src={item.images[0].src}
                                />
                              </div>
                              <div className="flex flex-1 flex-col text-base">
                                <span className="font-medium">{item.name}</span>
                                <span className="text-gray-400 font-normal">
                                  {item.size}
                                </span>
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
                    <div className="flex mx-auto max-w-xl mt-4 gap-4">
                      <input
                        type="text"
                        placeholder="Enter coupon code"
                        className="w-5/6 border border-gray-300 rounded-md p-3"
                      />
                      <button className="w-1/6 bg-gray-100 font-semibold border border-gray-300 text-gray-500 rounded-md">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-xl mt-4">
                <label className="inline-flex items-center mt-3">
                  <Field
                    type="checkbox"
                    name="termsOfService"
                    className="form-checkbox h-5 w-5 text-gray-600"
                  />
                  <span className="ml-2 text-gray-700">
                    I agree to the Terms of Service
                  </span>
                </label>
                <ErrorMessage
                  name="termsOfService"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div className="max-w-xl my-6">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Complete the order
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default App;

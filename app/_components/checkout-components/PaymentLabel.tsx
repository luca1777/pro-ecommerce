import React from 'react'
import { ErrorMessage, Field, useFormikContext } from 'formik';
import Image from 'next/image';
import PaymentMessage from './PaymentMessage';
import MasterCard from "@/public/mastercard.png";
import Visa from "@/public/visa.png";

interface FormValues {
    paymentMethod: string;
  }

const PaymentLabel = () => {
    const { values } = useFormikContext<FormValues>();

  return (
    <div className="mb-4 max-w-xl">
    <h2 className="text-2xl font-semibold mb-2">Payment</h2>
    <p className="text-sm text-gray-500 mb-4">
      All transactions are secure and encrypted.
    </p>
    <div className="flex flex-col">
      <label
        htmlFor="cash-payment"
        className={`flex items-center border border-gray-400 rounded-md p-3.5 rounded-b-none cursor-pointer ${values.paymentMethod === 'cash' ? 'bg-blue-100' : ''}`}
      >
        <Field
          type="radio"
          name="paymentMethod"
          id="cash-payment"
          value="cash"
          className="form-radio h-5 w-5 text-blue-600"
        />
        <span className="ml-2">Cash</span>
      </label>
      <label
        htmlFor="credit-card-payment"
        className={`flex items-center justify-between border border-gray-400 rounded-md p-3 rounded-t-none border-t-0 cursor-pointer ${values.paymentMethod === 'creditCard' ? 'bg-blue-100' : ''}`}
      >
        <div className="flex items-center">
          <Field
            type="radio"
            name="paymentMethod"
            id="credit-card-payment"
            value="creditCard"
            className="h-5 w-5 text-blue-600"
          />
          <span className="ml-2">Credit Card</span>
        </div>
        <div className="flex mr-4 gap-4">
          <Image src={Visa} alt="visa" />
          <Image src={MasterCard} alt="mastercard" />
        </div>
      </label>
      <PaymentMessage />
    </div>
    <ErrorMessage
      name="paymentMethod"
      component="div"
      className="text-red-600"
    />
  </div>
  )
}

export default PaymentLabel
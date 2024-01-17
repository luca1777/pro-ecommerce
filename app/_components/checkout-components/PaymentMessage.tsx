import { useFormikContext } from 'formik';
import React from 'react';

const PaymentMessage = () => {
    const { values } = useFormikContext();
  
    if ((values as { paymentMethod: string }).paymentMethod === 'cash') {
      return (
        <div className="p-3">
          Payment will be made in cash to the courier.
        </div>
      );
    }
    return null;
};

export default PaymentMessage
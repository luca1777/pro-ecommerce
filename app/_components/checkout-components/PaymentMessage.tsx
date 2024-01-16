import { useFormikContext } from 'formik';
import React from 'react';

const PaymentMessage = () => {
    const { values } = useFormikContext();
  
    if ((values as { paymentMethod: string }).paymentMethod === 'cash') {
      return (
        <div className="text-sm p-3">
          Plata se va face cash la curier.
        </div>
      );
    }
    return null;
};

export default PaymentMessage
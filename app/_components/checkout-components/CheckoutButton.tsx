import { loadStripe, Stripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePublicKey = `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}`
const asyncStripe = loadStripe(stripePublicKey);

const CheckoutButton = ({ totalPrice, cartItems, isFormValid }) => {

  const handler = async (e) => {
    if (!isFormValid) {
      e.preventDefault();
      return;
    }

    try {
      const stripe: Stripe | null = await asyncStripe;
      if (!stripe) {
        throw new Error('Stripe library was not properly initialized');
      }

      const response = await axios.post('/api/checkout', {
        totalPrice,
        cartItems,
      });
      
      const { sessionId } = await response.data;

      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error(error);
        // navigate.push('/error');
      }
    } catch (err) {
      console.error(err);
    //   navigate.push('/error');
    }
  };

  return (
    <button
      type='submit'
      onClick={handler}
      className='w-full bg-blue-500 hover:bg-blue-700 text-white text-xl font-semibold py-3.5 px-4 rounded'
    >
      Complete the order
    </button>
  );
};

export default CheckoutButton;

const loadStripe = async () => {
    if (!window.Stripe) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/';
      document.head.appendChild(script);
      await new Promise((resolve) => {
        script.onload = resolve;
      });
    }
    const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (typeof stripeKey !== 'string') {
      throw new Error('Stripe key is not set in environment variables');
    }
  
    if (typeof window.Stripe === 'function') {
      return window.Stripe(stripeKey);
    } else {
      throw new Error('Stripe could not be loaded');
    }
  };
  
  export default loadStripe;
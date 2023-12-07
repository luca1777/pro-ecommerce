import { useState, useEffect } from 'react';

export const useCartQuantity = () => {
  const getCartQuantity = () => {
    const storedCart = localStorage.getItem('cart');
    const cart = storedCart ? JSON.parse(storedCart) : [];
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const [cartQuantity, setCartQuantity] = useState(getCartQuantity());

  useEffect(() => {
    const handleStorageChange = () => {
      setCartQuantity(getCartQuantity());
    };

    window.addEventListener('storage', handleStorageChange);

    
    setCartQuantity(getCartQuantity());

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return cartQuantity;
};


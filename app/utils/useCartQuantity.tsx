"use client"
import { useState, useEffect } from 'react';

export const useCartQuantity = () => {
    const isBrowser = typeof window !== 'undefined';

  const getCartQuantity = () => {
    if (!isBrowser) return 0;

    const storedCart = localStorage.getItem('cart');
    const cart = storedCart ? JSON.parse(storedCart) : [];
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const [cartQuantity, setCartQuantity] = useState(getCartQuantity());

  useEffect(() => {
    if (!isBrowser) return;

    const handleStorageChange = () => {
      setCartQuantity(getCartQuantity());
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, );

  return { cartQuantity, setCartQuantity };
};


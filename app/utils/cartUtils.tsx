"use client"
interface Product {
  id: number;
  size: string; 
}

interface CartItem extends Product {
  quantity: number;
}

export const addToCart = (product: Product) => {
  const storedCart = localStorage.getItem('cart');
  const cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];
  
    const existingProduct = cart.find((item) => item.id === product.id && item.size === product.size);
  
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
};

export const removeQuantity = (product: Product) => {
  const storedCart = localStorage.getItem('cart');
  const cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

  const existingProductIndex = cart.findIndex((item) => item.id === product.id  && item.size === product.size);
  
  if (existingProductIndex >= 0) {
    cart[existingProductIndex].quantity -= 1;
  
    if (cart[existingProductIndex].quantity === 0) {
      cart.splice(existingProductIndex, 1);
      localStorage.removeItem(`selectedSize-${product.id}`);
    }
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('cartUpdated'));
}

export const removeItem = (product: Product) => {
  const storedCart = localStorage.getItem('cart');
  const cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

  const existingProductIndex = cart.findIndex((item) => item.id === product.id && item.size === product.size);

  if (existingProductIndex >= 0 ) {
    cart.splice(existingProductIndex, 1);
    localStorage.removeItem(`selectedSize-${product.id}`);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('cartUpdated'));
}


export const getTotalCartQuantity = () => {
    const storedCart = localStorage.getItem('cart');
    const cartItems = storedCart ? JSON.parse(storedCart) : [];
    return cartItems.reduce((total, item) => total + item.quantity, 0);
};

export const getSubtotalCartPrice = () => {
  const storedCart = localStorage.getItem("cart");
  const cartItems = storedCart ? JSON.parse(storedCart) : [];
  return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const getTotalCartPrice = () => {
  const storedCart = localStorage.getItem("cart");
  const cartItems = storedCart ? JSON.parse(storedCart) : [];
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const shippingCost = 19.99;
  const totalWithShipping = subtotal >= 300 ? subtotal : subtotal + shippingCost;

  return totalWithShipping;
};

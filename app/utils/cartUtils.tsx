"use client"
interface Product {
    id: number;
}

interface CartItem extends Product {
    quantity: number;
}

export const addToCart = (product: Product) => {
    const storedCart = localStorage.getItem('cart');
    const cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];
  
    const existingProduct = cart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
};

export const removeFromCart = (product: Product) => {
  const storedCart = localStorage.getItem('cart');
  const cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

  const existingProductIndex = cart.findIndex((item) => item.id === product.id);
  
  if (existingProductIndex >= 0) {
    cart[existingProductIndex].quantity -= 1;
  
    if (cart[existingProductIndex].quantity === 0) {
      cart.splice(existingProductIndex, 1);
    }
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('cartUpdated'));
}


export const getTotalCartQuantity = () => {
    const storedCart = localStorage.getItem('cart');
    const cartItems = storedCart ? JSON.parse(storedCart) : [];
    return cartItems.reduce((total, item) => total + item.quantity, 0);
};

export const getTotalCartPrice = () => {
  const storedCart = localStorage.getItem("cart");
  const cartItems = storedCart ? JSON.parse(storedCart) : [];
  return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
};

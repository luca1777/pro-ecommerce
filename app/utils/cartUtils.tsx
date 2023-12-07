
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
};


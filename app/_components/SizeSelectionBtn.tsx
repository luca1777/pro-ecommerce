"use client";
import React, { useEffect, useState } from 'react'

const SizeSelectionBtn = ({ dataSizes, productId }) => {
    const [selectedSizeUi, setSelectedSizeUi] = useState<string | null>(null);

    useEffect(() => {
        // Function to update the selected size UI based on local storage
        const updateSelectedSize = () => {
            const storedSize = localStorage.getItem(`selectedSize-${productId}`);
            setSelectedSizeUi(storedSize);
        };

        updateSelectedSize(); // Initial update

        const handleCartChange = () => {
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            // Check if the current product with the selected size is in the cart
            if (selectedSizeUi) {
                const isSizeInCart = cart.some(item => item.id === productId && item.size === selectedSizeUi);
                if (!isSizeInCart) {
                    setSelectedSizeUi(null); // Clear selected size if it's no longer in the cart
                }
            }
        };

        window.addEventListener('storage', updateSelectedSize);
        window.addEventListener('cartUpdated', handleCartChange); // Listen for cart updates

        return () => {
            window.removeEventListener('storage', updateSelectedSize);
            window.removeEventListener('cartUpdated', handleCartChange);
        };
    }, [productId, selectedSizeUi]);

    const handleSizeSelection = (size) => {
        setSelectedSizeUi(size);
        // Store the selected size in local storage
        localStorage.setItem(`selectedSize-${productId}`, size);
    };

  return (
    <ul className="flex flex-wrap gap-3">
    {dataSizes?.map((size, index) => (
    <li key={index}>
    <button onClick={() => handleSizeSelection(size)} className={`flex justify-center items-center min-w-[48px] rounded-full border px-4 py-1 text-sm bg-neutral-100 transition duration-300 ease-in-out hover:scale-110 ring-2  font-semibold ${selectedSizeUi === size ? "ring-blue-600" : "ring-transparent hover:ring-blue-600"}`}>
      {size}
    </button>  
    </li>
    ))}
  </ul>
  )
}

export default SizeSelectionBtn
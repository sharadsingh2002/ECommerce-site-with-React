import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
    const [addToCartCount, setAddToCartCount] = useState(() => {
        const storedCart = localStorage.getItem('addToCartCount');
        return storedCart ? JSON.parse(storedCart) : [];
    });


    const [cartCount, setCartCount] = useState(() => {
        const storedCart = localStorage.getItem('addToCartCount');
        return storedCart ? JSON.parse(storedCart).length : 0;
    });

  
    useEffect(() => {
        localStorage.setItem('addToCartCount', JSON.stringify(addToCartCount));
    }, [addToCartCount]);

    const incrementCartCount = (item) => {
        setAddToCartCount((prevCount) => [...prevCount, item]);
        setCartCount((prevCount) => prevCount + 1);
    };

    return (
        <CartContext.Provider value={{ addToCartCount, cartCount, incrementCartCount, setAddToCartCount }}>
            {children}
        </CartContext.Provider>
    );
};

import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const getItemQuantity = (id) => {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    const addToCart = (id, quantity) => {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity }]
            } else {
                return currItems.map(item => {
                    if(item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id) => {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    return(
    <CartContext.Provider value={{ getItemQuantity, addToCart, removeFromCart, cartItems, cartQuantity }}>
        {children}
    </CartContext.Provider>
    )
}
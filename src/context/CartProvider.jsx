import { useState } from 'react';
import { CartContext } from './CartContext'

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const getItemQuantity = (id) => {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    const addToCart = (product, quantity) => {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === product.id) == null) {
                return [...currItems, { ...product, quantity }]
            } else {
                return currItems.map(item => {
                    if(item.id === product.id) {
                        return { ...item, quantity: item.quantity + quantity }
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
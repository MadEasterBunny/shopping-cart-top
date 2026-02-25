import { useState } from 'react';
import { CartContext } from './CartContext'

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const getItemQuantity = (id) => {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    const updateCartItem = (id, amount, productData = null) => {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null) {
                return [...currItems, productData ? { ...productData, quantity: amount } : {id, quantity: amount}]
            } else if(currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if(item.id === id) {
                        return { ...item, quantity: item.quantity + amount }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const addToCart = (product, quantity) => {
        updateCartItem(product.id, quantity, product)
    }

    const increaseCartQuantity = (id) => {
        updateCartItem(id, 1)
    }

    const decreaseCartQuantity = (id) => {
        updateCartItem(id, -1)
    }

    const removeFromCart = (id) => {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    const cartTotal = cartItems.reduce((total, item) => item.price * item.quantity + total, 0).toFixed(2);

    return(
    <CartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, addToCart, removeFromCart, cartItems, cartQuantity, cartTotal }}>
        {children}
    </CartContext.Provider>
    )
}
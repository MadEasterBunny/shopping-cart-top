import { CartContext } from './CartContext'
import { useLocalStorage } from '../hooks/useLocalStorage';

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useLocalStorage('cart_data', []);

    const getItemQuantity = (id) => {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    const updateCartItem = (id, amount, productData = null) => {
        setCartItems(currItems => {
            const existingItem = currItems.find(item => item.id === id)

            if(existingItem == null) {
                return amount > 0 ? [...currItems, productData ? { ...productData, quantity: amount } : {id, quantity: amount}] : currItems
            }
            
            if((existingItem.quantity + amount) <= 0) {
                return currItems.filter(item => item.id !== id)
            }

            return currItems.map(item => {
                if(item.id === id) {
                    return { ...item, quantity: item.quantity + amount }
                } else {
                    return item
                }
            })
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
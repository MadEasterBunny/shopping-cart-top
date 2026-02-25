import { useCart } from "../../context/CartContext"
import styles from "./CartItem.module.css"

export const CartItem = () => {
    const { cartItems, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useCart();

    return (
        <>
            {cartItems.map(item => 
                <div key={item.id} className={styles.container}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <div>
                        <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={() => increaseCartQuantity(item.id)}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            )}
        </>
    )
}
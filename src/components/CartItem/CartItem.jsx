import { useCart } from "../../context/CartContext"
import styles from "./CartItem.module.css"

export const CartItem = () => {
    const { cartItems, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useCart();

    return (
        <div className={styles.container}>
            {cartItems.map(item => {
                const itemTotal = (item.price * item.quantity).toFixed(2)
                
                return(
                    <div key={item.id} className={styles.item}>
                        <div className={styles.productInfo}>
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                        </div>
                        <div className={styles.quantityControls}>
                            <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
                            <p>{item.quantity}</p>
                            <button onClick={() => increaseCartQuantity(item.id)}>+</button>
                        </div>
                        <p className={styles.itemTotal}>{itemTotal}</p>
                        <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                )
            }
        )}
        </div>
    )
}
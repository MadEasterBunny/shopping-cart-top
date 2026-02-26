import { useCart } from "../../context/CartContext"
import { CartItem } from "../../components/CartItem/CartItem";
import styles from "./Cart.module.css"

function Cart() {
    const { cartQuantity, cartTotal } = useCart();

    return(
        <>
            <h1 className={styles.title}>Cart</h1>
            {cartQuantity === 0 && <h2>No items in cart</h2>}
            
            <CartItem />

            {cartQuantity !== 0 && <p className={styles.totalContainer}>Total: {cartTotal}</p>}
        </>
    )
}

export default Cart
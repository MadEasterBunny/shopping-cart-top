import { useCart } from "../../context/CartContext"
import { CartItem } from "../../components/CartItem/CartItem";

function Cart() {
    const { cartQuantity, cartTotal } = useCart();

    return(
        <>
            <h1>Cart Page</h1>
            {cartQuantity === 0 && <h2>No items in cart</h2>}
            
            <CartItem />

            {cartQuantity !== 0 && <p>Total: {cartTotal}</p>}
        </>
    )
}

export default Cart
import { useCart } from "../../context/CartContext"

function Cart() {
    const { cartItems, cartQuantity, removeFromCart } = useCart();

    return(
        <>
            <h1>Cart Page</h1>
            {cartQuantity === 0 && <h2>No items in cart</h2>}
            
            {cartItems.map(item => 
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.quantity}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            )}
        </>
    )
}

export default Cart
import { useCart } from "../../context/CartContext"

function Cart() {
    const { cartItems, cartQuantity, cartTotal, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useCart();

    return(
        <>
            <h1>Cart Page</h1>
            {cartQuantity === 0 && <h2>No items in cart</h2>}
            
            {cartItems.map(item => 
                <div key={item.id}>
                    <div>
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                    <div>
                        <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={() => increaseCartQuantity(item.id)}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            )}

            <p>{cartTotal}</p>
        </>
    )
}

export default Cart
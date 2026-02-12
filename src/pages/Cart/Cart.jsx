import { Link } from "react-router"

function Cart() {
    return(
        <>
            <h1>Cart Page</h1>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
        </>
    )
}

export default Cart
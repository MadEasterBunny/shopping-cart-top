import { Link } from "react-router"

function Shop() {
    return(
        <>
            <h1>Shop Page</h1>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link>
        </>
    )
}

export default Shop
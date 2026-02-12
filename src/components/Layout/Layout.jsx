import { Outlet, NavLink } from "react-router"

function Layout() {
    return(
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/shop'>Shop</NavLink>
                <NavLink to='/cart'>Cart</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout
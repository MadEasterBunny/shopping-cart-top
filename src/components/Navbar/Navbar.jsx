import { useState } from "react"
import { NavLink } from "react-router"
import styles from './Navbar.module.css'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return(
        <>
            <nav className={styles.navbar}>
                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/' onClick={closeMenu}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/shop' onClick={closeMenu}>Shop</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/cart' onClick={closeMenu}>Cart</NavLink>
                </ul>
                <button className={styles.hamburger} onClick={toggleMenu}>
                    {isMenuOpen ? 'X' : '☰'}
                </button>
            </nav>
        </>
    )
}

export default Navbar
import { Outlet } from "react-router"
import Navbar from "../Navbar/Navbar"
import styles from './Layout.module.css'

function Layout() {
    return(
        <>
            <Navbar />
            <div className={styles.container}>
                <Outlet />
            </div>
        </>
    )
}

export default Layout
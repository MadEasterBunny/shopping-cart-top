import { Link } from "react-router"
import image from '../../assets/img/shop.jpg'
import styles from './Home.module.css'

function Home() {
    return(
        <>
            <div className={styles.container}>
                <div>
                    <h1>Shop For Fake Stuff!</h1>
                    <p>A one stop shop for all your fake needs.</p>
                    <Link to='/shop'>Shop</Link>
                </div>
                <div>
                    <figure>
                        <img src={image} />
                        <figcaption>Image by <a href="https://pixabay.com/users/roszie-6000120/" target="_blank">RosZie</a> from <a href="https://pixabay.com/" target="_blank">Pixabay</a></figcaption>
                    </figure>
                </div>
            </div>
        </>
    )
}

export default Home
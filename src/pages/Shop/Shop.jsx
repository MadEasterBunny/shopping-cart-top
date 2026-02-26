import { useProducts } from "../../context/ProductContext";
import PacmanLoader from "react-spinners/PacmanLoader"
import Card from "../../components/Card/Card";
import styles from './Shop.module.css'

function Shop() {
    const { products, loading, error } = useProducts();

    return(
        <>
        {loading && (
            <div className={styles.loaderContainer}>
                <PacmanLoader color="#ffe737" size={25} speedMultiplier={2} loading={loading} />
            </div>
        )}
        {error && <div>Error loading content</div>}
        {!loading && !error && (
            <div>
                <h1>Shop Page</h1>
                <div className={styles.productList}>
                    {products.map(product => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>
        )}
        </>
    )
}

export default Shop
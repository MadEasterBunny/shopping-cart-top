import { useEffect, useState } from "react"
import { Link } from "react-router"
import Card from "../../components/Card/Card";
import styles from './Shop.module.css'

function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                if(!res.ok) {
                    throw new Error(`Http error! Status: ${res.status}`);
                }
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [])

    console.log(products);
    console.log(error);

    return(
        <>
        {loading && <div>Loading...</div>}
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
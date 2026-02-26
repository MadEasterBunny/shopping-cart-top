import { useState, useEffect } from "react";
import { ProductContext } from "./ProductContext";

export function ProductProvider({children}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [hasFetched, setHasFetched] = useState(false);

    useEffect(() => {

        if(hasFetched) return;

        const fetchProducts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                if(!res.ok) {
                    throw new Error(`Http error! Status: ${res.status}`);
                }
                const data = await res.json();
                setProducts(data);
                setHasFetched(true);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [hasFetched]);

    return(
        <ProductContext.Provider value={{ products, loading, error }}>
            {children}
        </ProductContext.Provider>
    )
}
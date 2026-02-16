import { useState } from 'react';
import styles from './Card.module.css'
import { truncateText } from '../../utilities/textHelper';
import { useCart } from "../../context/CartContext";

function Card({ product }) {
    const { image, title, description, price } = product;
    const [count, setCount] = useState(1);
    const { addToCart } = useCart();

    const increaseCount = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decreaseCount = () => {
        if(count === 1) return;
        setCount(prevCount => prevCount - 1);
    }

    const addToCartHandler = (product, count) => {
        addToCart(product, count);
        setCount(1);
    }
    
    return(
        <div className={styles.item}>
            <img src={image} alt={description} />
            <h3>{truncateText(title)}</h3>
            <p>Price: ${price}</p>
            <div className={styles.itemsCounter}>
                <button onClick={decreaseCount}>-</button>
                <p>{count}</p>
                <button onClick={increaseCount}>+</button>
            </div>
            <button onClick={() => addToCartHandler(product, count)}>Add to Cart</button>
        </div>
    )
}

export default Card
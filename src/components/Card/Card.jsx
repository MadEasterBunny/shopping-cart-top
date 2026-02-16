import { useState } from 'react';
import styles from './Card.module.css'
import { truncateText } from '../../utilities/textHelper';
import { useCart } from "../../context/CartContext";

function Card({ product }) {
    const { id, image, title, description, price } = product;
    const [count, setCount] = useState(0);
    const { addToCart } = useCart();

    const increaseCount = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decreaseCount = () => {
        if(count === 0) return;
        setCount(prevCount => prevCount - 1);
    }

    const addToCartHandler = (id, count) => {
        addToCart(id, count);
        setCount(0);
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
            <button onClick={() => addToCartHandler(id, count)}>Add to Cart</button>
        </div>
    )
}

export default Card
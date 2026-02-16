import { useState } from 'react';
import styles from './Card.module.css'

function Card({ product }) {
    const { image, title, description, price } = product;
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decreaseCount = () => {
        if(count === 0) return;
        setCount(prevCount => prevCount - 1);
    }
    
    return(
        <div className={styles.container}>
            <img src={image} alt={description} />
            <h3>{title}</h3>
            <p>Price: {price}</p>
            <div className={styles.itemsCounter}>
                <button onClick={decreaseCount}>-</button>
                <p>{count}</p>
                <button onClick={increaseCount}>+</button>
            </div>
            <button>Add to Cart</button>
        </div>
    )
}

export default Card
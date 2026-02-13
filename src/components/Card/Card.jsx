import styles from './Card.module.css'

function Card({ product }) {
    const { image, title, description, price } = product;
    
    return(
        <div className={styles.container}>
            <img src={image} alt={description} />
            <h3>{title}</h3>
            <p>Price: {price}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default Card
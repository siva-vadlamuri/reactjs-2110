import styles from './product.module.css';

function Product({name,desc,price}) {
    return (
        <div className="product__main border border-danger p-3">
            
            <h2 className="product__name">{name}</h2>
            <p className={styles.error}>An Error Occured</p>
            <p className="product__description">{desc}</p>
            <p className="product__price">{price}</p>

        </div>
    )
}

export default Product

import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'
const Products = ({ product }) => {
    console.log(product)
    return (
        <div className='products'>
            <img src={product.img} alt=""></img>
            <div className='products-info'>
                <p className='products-name'>{product?.naqme}</p>
                <p>Price: ${product.price}</p>
                <p><small>Seller: {product.seller}</small></p>
                <p><small>Ratings: {product.ratings} stars</small></p>
                <Link to={`/purchase/${product._id}`}>Buy Now</Link>
            </div>

        </div>
    );
};

export default Products;
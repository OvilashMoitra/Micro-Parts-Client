import React from 'react';
import './Products.css'
const Products = ({ product }) => {
    console.log(product)
    return (
        <div className='product'>
            <img src={product.img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{product?.naqme}</p>
                <p>Price: ${product.price}</p>
                <p><small>Seller: {product.seller}</small></p>
                <p><small>Ratings: {product.ratings} stars</small></p>
            </div>

        </div>
    );
};

export default Products;
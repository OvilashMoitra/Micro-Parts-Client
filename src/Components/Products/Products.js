import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'
const Products = ({ product }) => {
    console.log(product)
    return (
        <div className='products'>
            <img src={product.img} alt=""></img>
            <div className='products-info'>
                <p className='products-name font-bold'>{product?.name}</p>
                <p>Price: ${product.price}</p>
                <p><small>{product.description.length === 100 ? product?.description : product?.description?.slice(0, 100) + '...'}</small></p>
                <p><small>Ratings: {product.ratings} stars</small></p>
                <Link className='btn btn-success btn-sm' to={`/purchase/${product._id}`}>Buy Now</Link>
            </div>

        </div>
    );
};

export default Products;
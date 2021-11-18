import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="products">
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="products-name">
                <h4>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className ="main-button" onClick ={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to Cart</button>
            </div>

        </div>
    );
};

export default Product;
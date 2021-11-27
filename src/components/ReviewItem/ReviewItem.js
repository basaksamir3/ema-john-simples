import React from 'react';

const ReviewItem = (props) => {
    const{name,quantity,key,price} = props.product;
    // console.log(props)
    const reviewItemStyle ={
        borderBottom : '1px solid lightgray',
        marginBottom : '5px',
        paddingBottom : '5px',
        marginLeft:'30px'
        }
    return (
        <div style={reviewItemStyle} className = 'review-item'>
            <h2 className="product-name"> {name}</h2>
            <p>Quantity: {quantity}</p>
            <small>$ {price}</small>
            <br/><br/>
            <button className="main-button" 
            onClick={() =>props.removeProduct(key)}>
                remove
                </button>
            
        </div>
    );
};

export default ReviewItem;
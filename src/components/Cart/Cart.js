import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce((total,product) => total + product.price, 0)

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i]
        total = total + product.price * product.quantity;
    }
    let shipping = 0;
    if(total > 15){
        shipping = 4.99;
    }
    else if(total > 35){
        shipping = 0;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    const tax = total/10;

    const formatNumber = num=>{
        const prcisions = num.toFixed(2);
        return Number(prcisions)
    }
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Item Order: {cart.length}</p>
            <p>Product Price: ${formatNumber(total)}</p>
            <p><small>shippingCost: ${shipping}</small></p>
            <p><small>tax + VAT: ${formatNumber(tax)}</small></p>
            <p>Total Price: ${formatNumber(total + shipping + tax)}</p>
           <br/>
           {
               props.children
           }
            
        </div>
    );
};

export default Cart;
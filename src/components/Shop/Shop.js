import React, { useState } from 'react';
import'./Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const[products,setProduct]=useState(first10);

    const[cart,setCart]=useState([]);

    const handleAddProduct = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        // console.log(newCart);
        setCart(newCart);
    }
    
    return (
        <div className ="shop-container">
           <div className="product-container">
                {
                    products.map(pd =><Product 
                        handleAddProduct = {handleAddProduct}
                        product={pd}></Product>)
                }
           
           </div>
           <div className="card-container">
               {/* <h1>Order Summary</h1>
               <h5>Item order{cart.length}</h5> */}
               <Cart cart={cart}></Cart>
           </div>
            
        </div>
    );
};

export default Shop;
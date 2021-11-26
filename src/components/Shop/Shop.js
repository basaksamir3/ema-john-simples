import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        // console.log(newCart);
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDb(product.key, count);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product
                    key ={pd.key}
                    showAddToCart={true}
                        handleAddProduct={handleAddProduct}
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
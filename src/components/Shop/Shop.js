import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);

    const [cart, setCart] = useState([]);
    useEffect(()=>{
        const saveCart = getStoredCart();
        const productKeys = Object.keys(saveCart)
        const previousCart = productKeys.map(existingKey =>{
            const product = fakeData.find(pd => pd.key === existingKey);
            // console.log(existingKey, saveCart[existingKey]);
            product.quantity = saveCart[existingKey];
            return product;
        })
        setCart(previousCart)
    },[])

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct) {
           count = sameProduct.quantity + 1;
            sameProduct.quantity  = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others,sameProduct];
        }
        else{
            product.quantity = 1;
            newCart =[...cart,product]
        }
        setCart(newCart);
        // const sameProduct = newCart.filter(pd => pd.key === product.key);
        // const count = sameProduct.length;
        addToDb(product.key, count);
    }

    return (
        <div className="twin-container">
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
                <Cart cart={cart}>
                <Link to="/review"><button className ="main-button">Review order</button></Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;
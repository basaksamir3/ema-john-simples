import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { removeFromDb,getStoredCart, clearTheCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([])
    const [orderPlace, setOrderPlace] = useState(false);

    const handlePlaceOrder = (order) => {
        setCart([]);
        setOrderPlace(true);
        clearTheCart();
        console.log('order placed')
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDb(productKey)
    }
    useEffect(() => {
        //cart   
        const saveCart = getStoredCart();
        const productKeys = Object.keys(saveCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);
    let thankYou; 
    if(orderPlace){ 
        thankYou= <img src={happyImage} alt="" />
    }
    return (
        <div className = "twin-container">
            <div className = "product-container">
            {
                cart.map(pd => <ReviewItem
                    product={pd}
                    key={pd.key}
                    removeProduct={removeProduct} >
                </ReviewItem>)
            }
           {
               thankYou
           }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className="main-button" onClick={handlePlaceOrder}>Place Order</button>
                </Cart>

            </div>
        </div>
    );
};

export default Review;
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getStoredCart } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import Shop from '../Shop/Shop';

const Review = () => {
    const [cart, setCart] = useState([])
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
    }, [])
    return (
        <div >
            <h4> Cart Items:{cart.length} </h4>
            {
                cart.map(pd => <ReviewItem product={pd} key={pd.key} ></ReviewItem>)
            }
        </div>
    );
};

export default Review;
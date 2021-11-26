import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const{productkey}= useParams();
    const product = fakeData.find(pd => pd.key === productkey);
    return (
        <div>
            <h1> Your product Details </h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;
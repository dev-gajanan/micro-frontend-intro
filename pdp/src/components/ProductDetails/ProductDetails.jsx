import React, { useEffect, useState } from 'react'
import { getProductById, currency } from "home/products";


import "../../index.scss";
import "./productDetails.scss";

export default function ProductDetails() {
    const id = 1;
    const [product, setProduct] = useState(null);
    useEffect(() => {
        if(id) {
            getProductById(id).then(setProduct);
        } else {
            setProduct(null);
        }
    }, [id]);

    if(!product) return null;
  return (
    <div className='row product-detail-container clear'>
        <div className='product-image'>
            <img src={product.image} alt={product.name} className="image" />
        </div>
        <div className='product-content'>
            <h6 className='product-name'>{product.name}</h6>
            <div>
                <span className='product-price'>{currency.format(product.price)}</span>
                <p className='desc'>{product.longDescription}</p>
            </div>
        </div>
    </div>
  );
}

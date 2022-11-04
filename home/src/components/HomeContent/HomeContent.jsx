import React, { useEffect, useState } from "react";

import { currency, getProducts } from "../../services/products";

import "../../index.scss";
import "./homeContent.scss"

export default function HomeContent() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts)
    }, []);

    return (
      <>
        <h2 className="page-title">Product Lists</h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-4" key={product.id}>
              <div className="product-container">
                <div className="image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="content-container">
                  <p className="product-name">{product.name}</p>
                  <div className="price-section">
                    <span className="product-price">
                      {currency.format(product.price)}
                    </span>
                    <span className=""></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );

    
}
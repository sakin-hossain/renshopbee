import React, { useEffect, useState } from 'react';
import "./Featured.css";

const Featured = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data[1].featured))
    },[]);

    return (
        <div>
            <div className='feature_title'>
                <h2>FEATURED PRODUCTS</h2>
                <i>Newest trends from top brands</i>
            </div>
            <div className='products'>
                    {
                        products.map(product => 
                        <div className='products_details' key={product.id}>
                            <img src={product.img} width="100%" height="70%" alt="" />
                            <h5>{product.name}</h5>
                            <span>${product.price}</span>
                        </div> )
                    }
            </div>
        </div>
    );
};

export default Featured;
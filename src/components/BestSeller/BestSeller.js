import React, { useEffect, useState } from 'react';
import "./BestSeller.css";

const BestSeller = () => {
    const [sellers, setSellers] = useState([]);
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setSellers(data[0].bestSeller))
    },[]);

    return (
        <div className='best_seller_container'>
            <div className='seller_info'>
                <h3>BEST SELLERS</h3>
                <i>The best production from us</i> <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate eveniet amet porro error.</p>
            </div>
            <div className='seller_packages'>
                    {
                        sellers.map(seller => 
                        <div className='seller_package' key={seller.id}>
                            <ul>
                                <li><i class="fas fa-shopping-cart"></i></li>
                                <li><i class="fas fa-heart"></i></li>
                                <li><i class="fas fa-exchange-alt"></i></li>
                            </ul>
                            <img src={seller.img} width="100%" height="70%" alt="" />
                            <h5>{seller.name}</h5>
                            <span>${seller.price}</span>
                        </div> )
                    }
            </div>
        </div>
    );
};

export default BestSeller;
import React, { useState } from 'react';
import Discount from '../../Discount/Discount';
import Banner from '../Banner/Banner';
import BestSeller from '../BestSeller/BestSeller';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Offers from '../Offers/Offers';


const Home = () => {
    const [count, setCount] = useState('');
    const handleCountChange = (products) =>{
        const updatedCount = [...count,products]
        setCount(updatedCount);
    }

    return (
        <div>
            <NavBar count = {count}/>
            <Banner/>
            <BestSeller handleCountChange={handleCountChange}/>
            <Offers/>
            <Featured handleCountChange={handleCountChange}/>
            <Discount/>
            <Footer/>
        </div>
    );
};

export default Home;
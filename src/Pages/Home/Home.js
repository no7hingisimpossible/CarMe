import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Banner/>
            <Products/>
            <BusinessSummary/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;
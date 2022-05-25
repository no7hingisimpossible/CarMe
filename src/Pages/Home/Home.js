import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Carousel2 from './Carousel2';
import Categories from './Categories';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='bg-white'>
            <Carousel2/>
            <Banner/>
            <BusinessSummary/>
            <Products/>
            <Categories/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;
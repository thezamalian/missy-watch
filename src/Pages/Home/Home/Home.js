import React from 'react';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <BannerCarousel />
            <Products />
            <Reviews />
        </div>
    );
};

export default Home;
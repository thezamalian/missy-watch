import React from 'react';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
// import LatestBlogs from '../LatestBlogs/LatestBlogs';
import Products from '../Products/Products';
// import Reviews from '../Reviews/Reviews';
// import SpecialEdition from '../SpecialEdition/SpecialEdition';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <BannerCarousel />
            <Products />

            {/* <SpecialEdition />
            <LatestBlogs /> */}

            {/* <Reviews /> */}
            <Subscribe />
        </div>
    );
};

export default Home;
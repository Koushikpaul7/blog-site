import React from 'react';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='container-fluid'>
          <marquee>
            <div className='d-flex fs-4'>
                <p className='me-5 '>Latest news</p>
                <p>Top news</p>
            </div>
          </marquee>
          <Banner></Banner>
        </div>
    );
};

export default Home;
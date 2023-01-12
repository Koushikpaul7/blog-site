import React from 'react';
import './Home.css'

import { Link } from 'react-router-dom';
const Segment = () => {
    return (
        <div className='container'>
            <div className='border-style my-3 '>
                <h3 className='title my-3 '>
                    <Link to='/categories'>
                    <span className='effect'>Segments</span></Link>
                </h3>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className='container bg-secondary mt-3 p-3'>
                <div className='row g-4 p-3 bg-dark'>
                    <div className='col-6 col-md-3 '>
                        <p className=' text-center py-1 rounded clickable'>Sports</p>
                    </div>
                    <div className='col-6 col-md-3 '>
                        <p className=' text-center py-1 rounded clickable'>Entertainment</p>
                    </div>
                    <div className='col-6 col-md-3 '>
                        <p className=' text-center py-1 rounded clickable'>International</p>
                    </div>
                    <div className='col-6 col-md-3 '>
                        <p className=' text-center py-1 rounded clickable'>Top news</p>
                    </div>
                    <div className='col-6 col-md-3 '>
                        <p className=' text-center py-1 rounded clickable'>Legal News</p>
                    </div>
                    <div className='col-6 col-md-3 '>
                        <p className=' text-center py-1 rounded clickable'>Featured news</p>
                    </div>
                    <div className='col-6 col-md-3 '>
                        <p className=' text-center py-1 rounded clickable'>Bangladesh today</p>
                    </div>
                    <div className='col-6 col-md-3 '>
                        <p className=' text-center py-1 rounded clickable'>Economics</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Segment;
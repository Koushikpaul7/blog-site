import React from 'react';
import './Segment.css'
import './Last.css'
const Segment = () => {
    return (
        <div>
            <div className='border-style my-3 '>
            <h3 className='title my-3 '>
                <span className=''>Segments</span>
                </h3>
            </div>
            <div className='container bg-secondary mt-3 p-3'>
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
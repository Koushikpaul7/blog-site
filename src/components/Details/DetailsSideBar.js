import React from 'react';
import OtherNews from '../Others/OtherNews';

const DetailsSideBar = () => {
    return (
        <div className='col-12 col-md-4'>
            <div className='col-12 col-md-4 d-flex align-items-center mb-2 mt-md-5'>
                <img src="https://tpc.googlesyndication.com/simgad/391452917098588740" alt="" />
            </div>

            <div className='row g-2 line'>
                <div className='col-12 col-md-12 overflow-hidden  mt-5'>
                    <h4 className='title my-3 border-style'>
                        <span className='me-5 '>Most Viewed</span>
                    </h4>
                    <div className='zoom'>

                        <div
                            data-aos="fade-left"
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            className='imgContainer fix-ratio'>
                            <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/tv-20230101101653.jpg" className='img-fluid' alt="" />
                        </div>
                    </div>
                    <p className='fs-6 fw-bold'>See Today's match live.</p>
                </div>

                <div className='row ps-1'>
                    <div className='col-12 col-md-6 overflow-hidden '>
                        <img
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/dfgdf-20230106125109.jpg" className='img-fluid ' alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing . </p>
                    </div>
                    <div className='col-12 col-md-6 overflow-hidden'>
                        <img
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/bpl-20230106141305.jpg" className='img-fluid' alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing . </p>
                    </div>
                    <div className='col-12 col-md-6 overflow-hidden'>
                        <img
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/mash-20230106165016.jpg" className='img-fluid' alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing . </p>
                    </div>
                    <div className='col-12 col-md-6 overflow-hidden'>
                        <img
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/toss-20230107183723.jpg" className='img-fluid' alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing . </p>
                    </div>
                </div>
                <div className='my-3'>
                    <OtherNews />
                </div>
            </div>



        </div>
    );
};

export default DetailsSideBar;
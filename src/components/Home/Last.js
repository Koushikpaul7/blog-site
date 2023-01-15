import React from 'react';

import './Home.css'
import { Link } from 'react-router-dom';
const Last = () => {
    return (
        <div className='container py-md-5 overflow-hidden'>
            <div className='row g-2'>
                <div className=' col-12 col-md-12 '>
                        <h3 className='title my-3 border-style py-3'>
              
                            <span className=''>Read more</span>
                    
                        </h3>
                    <div className='row g-2 line'>
                        <div
                            data-aos="fade-up-right"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                            className='col-6 col-md-3 zoom'>
                            <div className='imgContainer'>
                                <Link to="/categories">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/smat-20230108133823.jpg" className='img-fluid' alt="" />
                                </Link>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <p className='fw-bold effect'>Use of smartphones are increasing more then ever</p>
                            </Link>
                        </div>
                        <div
                            data-aos="fade-up-right"
                            data-aos-duration="1000"
                            data-aos-delay="500"
                            className='col-6 col-md-3 zoom'>
                            <div className='imgContainer'>
                                <Link to="/categories">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/hash-20230108133057.jpg" className='img-fluid' alt="" />
                                </Link>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <p className='fw-bold effect'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </Link>
                        </div>
                        <div
                            data-aos="fade-up-left"
                            data-aos-duration="1000"
                            data-aos-delay="600"
                            className='col-6 col-md-3 zoom'>
                            <div className='imgContainer'>
                                <Link to="/categories">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/rajshahi-20230108132721.jpg" className='img-fluid' alt="" />
                                </Link>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <p className='fw-bold effect'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </Link>
                        </div>
                        <div
                            data-aos="fade-up-left"
                            data-aos-duration="1000"
                            data-aos-delay="700"
                            className='col-6 col-md-3 zoom'>
                            <div className='imgContainer'>
                                <Link to="/categories">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/mamun-20230107001856.jpg" className='img-fluid' alt="" />
                                </Link>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <p className='fw-bold effect'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Last;
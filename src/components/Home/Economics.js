import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Economics = () => {
    return (
        <div className='container mt-4 overflow-hidden'>

            <h3 className='title my-3 border-style'>
                <Link to='/categories' className='text-decoration-none text-dark'>
                    <span className='me-5 effect'>Economics</span>
                </Link>
            </h3>
            <div className='row line'>
                {/* first part */}

                <div className='col-12 col-md-3 '>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration='1000'
                        data-aos-delay='300'
                        className='zoom mb-2'>

                        <Link to="/details">
                            <div className='imgContainer'>
                                <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/samson-h-chowdhury-20230107142137.jpg" className='img-fluid ' alt="" />
                            </div>
                        </Link>
                        <Link to='/details' className='text-decoration-none text-dark effect'>
                            <p className='effect mt-1 mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </Link>
                    </div>

                    <div className='row g-2'>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='300'
                            className='col-12 d-flex align-items-center  zoom'>
                            <Link to="/details">
                                <div className='imgContainer '>
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/warm1-20230107152001.jpg" className='img-fluid zoom' alt="" />
                                </div>
                            </Link>

                            <Link to='/details' className='text-decoration-none text-dark'>
                                <div className='ms-3 '>
                                    <p className='fs-6 effect mb-0'>Lorem Ipsum is simply dummy text of the printing  </p>
                                </div>
                            </Link>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='300'
                            className='col-12 d-flex align-items-center  zoom'>
                            <Link to="/details">
                                <div className='imgContainer '>
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/warm1-20230107152001.jpg" className='img-fluid zoom' alt="" />
                                </div>
                            </Link>

                            <Link to='/details' className='text-decoration-none text-dark'>
                                <div className='ms-3 '>
                                    <p className='fs-6 effect mb-0'>Lorem Ipsum is simply dummy text of the printing  </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* middle part */}
                <div

                    className='col-12 col-md-6 overflow-hidden'>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration='1000'
                        data-aos-delay='300' className='zoom line'>


                        <div className='imgContainer  fix-ratio pic-gap'>
                            <Link to="/details">
                                <img src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/oil-cv-20230107153121.jpg" className='img-fluid' alt="" />
                            </Link>
                        </div>
                    </div>
                    <Link to='/details' className='text-decoration-none text-dark'>
                        <h3 className='effect'>Lorem Ipsum is simply dummy text of the printing.</h3>
                    </Link>
                    <p className='text-muted'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                </div>

                {/* Last part */}
                <div className='col-12 col-md-3 overflow-hidden'>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration='1000'
                        data-aos-delay='300'
                        className='zoom mb-1'>
                        <div className='imgContainer'>
                            <Link to="/details">
                                <img src=" https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/dse-20230107115314.jpg" className='img-fluid  ' alt="" />
                            </Link>
                        </div>
                    </div>
                    <Link to='/details' className='text-decoration-none text-dark '>
                        <p className='effect mt-1 mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </Link>
                    <div className='row g-2'>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='300'
                            className='col-12 d-flex align-items-center  zoom'>
                            <Link to="/details">
                                <div className='imgContainer '>
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/warm1-20230107152001.jpg" className='img-fluid zoom' alt="" />
                                </div>
                            </Link>

                            <Link to='/details' className='text-decoration-none text-dark'>
                                <div className='ms-3 '>
                                    <p className='fs-6 effect mb-0'>Lorem Ipsum is simply dummy text of the printing  </p>
                                </div>
                            </Link>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='300'
                            className='col-12 d-flex align-items-center  zoom'>
                            <Link to="/details">
                                <div className='imgContainer '>
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/warm1-20230107152001.jpg" className='img-fluid zoom' alt="" />
                                </div>
                            </Link>

                            <Link to='/details' className='text-decoration-none text-dark'>
                                <div className='ms-3 '>
                                    <p className='fs-6 effect mb-0'>Lorem Ipsum is simply dummy text of the printing  </p>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Economics;
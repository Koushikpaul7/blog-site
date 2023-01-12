import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Economics = () => {
    return (
        <div className='container mt-4 overflow-hidden'>
            <Link to='/categories' className='text-decoration-none text-dark'>
                <h3 className='title my-3 border-style'>
                    <span className='me-5 '>Economics</span>
                </h3>
            </Link>
            <div className='row line'>
                {/* first part */}

                <div className='col-12 col-md-3 '>
                    <div
                       data-aos="zoom-in"
                       data-aos-duration='1000'
                       data-aos-delay='300'
                        className='zoom'>

                        <div className='imgContainer'>
                            <Link to="/details">
                                <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/samson-h-chowdhury-20230107142137.jpg" className='img-fluid ' alt="" />
                            </Link>
                        </div>
                    </div>
                    <Link to='/details' className='text-decoration-none text-dark effect'>
                        <p className='effect mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </Link>
                    <div className='row gap-2'>
                        <div
                             data-aos="zoom-in"
                             data-aos-duration='1000'
                             data-aos-delay='300'
                            className='col-12 d-flex my-2 zoom'>
                            <div className='imgContainer'>
                                <Link to="/details">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/warm1-20230107152001.jpg" className='img-fluid mt-1' alt="" />
                                </Link>

                            </div>
                            <div className='ms-3'>
                                <Link to='/details' className='text-decoration-none text-dark'>
                                    <p className='fs-6 effect'>Lorem Ipsum is simply dummy text of the printing  </p>
                                </Link>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='300'
                            className='col-12 d-flex zoom'>
                            <div className='imgContainer'>
                                <Link to="/details">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/warm1-20230107152001.jpg" className='img-fluid mt-1' alt="" />
                                </Link>
                            </div>
                            <div className='ms-3'>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <p className='fs-6 effect'>Lorem Ipsum is simply dummy text of the printing </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* middle part */}
                <div

                    className='col-12 col-md-6 overflow-hidden '>
                    <div
                         data-aos="zoom-in"
                         data-aos-duration='1000'
                         data-aos-delay='300' className='zoom line'>


                        <div className='imgContainer '>
                            <Link to="/details">
                                <img src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/oil-cv-20230107153121.jpg" className='img-fluid ' alt="" />
                            </Link>
                        </div>
                    </div>
                    <Link to='/details' className='text-decoration-none text-dark'>
                    <h3 className='effect'>Lorem Ipsum is simply dummy text of the printing.</h3>
                                </Link>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                </div>

                {/* Last part */}
                <div className='col-12 col-md-3 overflow-hidden'>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration='1000'
                        data-aos-delay='300'
                        className='zoom'>
                        <div className='imgContainer'>
                            <Link to="/details">
                                <img src=" https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/dse-20230107115314.jpg" className='img-fluid  ' alt="" />
                            </Link>
                        </div>
                    </div>
                    <Link to='/details' className='text-decoration-none text-dark '>
                    <p className='effect mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </Link>
                    <div className='row gap-2'>
                        <div
                             data-aos="zoom-in"
                             data-aos-duration='1000'
                             data-aos-delay='300'
                            className='col-12 d-flex my-2 zoom'>
                            <div className='imgContainer'>
                                <Link to="/details">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/warm1-20230107152001.jpg" className='img-fluid mt-1' alt="" />
                                </Link>

                            </div>
                            <div className='ms-3'>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <p className='fs-6 effect'>Lorem Ipsum is simply dummy text of the printing. </p>
                                </Link>
                            </div>
                        </div>
                        <div
                             data-aos="zoom-in"
                             data-aos-duration='1000'
                             data-aos-delay='300'
                            className='col-12 d-flex zoom'>
                            <div className='imgContainer'>
                                <Link to="/details">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/warm1-20230107152001.jpg" className='img-fluid mt-1' alt="" />
                                </Link>

                            </div>
                            <div className='ms-3'>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <p className='fs-6 effect'>Test test is simply dummy text of the printing </p>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Economics;
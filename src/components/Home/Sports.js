import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
const Sports = () => {

    return (
        <div className='container my-4'>
            <h3
                className='title my-3 border-style'>
                <Link to='/categories' className='text-decoration-none text-dark'>

                    <span className=' effect'>Sports</span>
                </Link>
            </h3>
            <div className='row g-4 line'>
                <div className='col-12 col-md-6 border-bottom '>
                    <div className=' '>
                        <div data-aos="zoom-in-right"
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            className='zoom'>

                            <div className='imgContainer overflow-hidden'>
                                <Link to="/details">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/psg-20230107115909.jpg" alt="" className='img-fluid' />
                                </Link>
                            </div>
                        </div>
                        <Link to='/details' className='text-decoration-none text-dark'>

                            <h3 className='mt-2 effect'>Psg with amazing comeback without Messi,Neymar and Mbappe</h3>
                        </Link>
                        <p className='fs-5 text-muted my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>
                <div className='col-12 col-md-6 border-bottom '>
                    <div className='row  g-4 '>
                        <div
                            className='col-12 col-md-6 border-bottom overflow-hidden'>
                            <div data-aos="zoom-in-right"
                                data-aos-duration='1000'
                                data-aos-delay='200' className='zoom'>

                                <div className='imgContainer'>
                                    <Link to="/details">
                                        <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/shakib-ashrafee-20230107111634.jpg" className='img-fluid' alt="" />
                                    </Link>
                                </div>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <p className='fs-6 effect '>BPL clash among Sakib and Mashrafee</p>
                            </Link>
                        </div>
                        <div
                            className='col-md-6 border-bottom overflow-hidden'>
                            <div data-aos="zoom-in-right"
                                data-aos-duration='1000'
                                data-aos-delay='200' className='zoom'>

                                <div className='imgContainer'>
                                    <Link to="/details">
                                        <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/ronaldo-20230107105050.jpg" className='img-fluid' alt="" />
                                    </Link>
                                </div>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <p className='fs-6 effect'>Ronaldo Finished his training for his new team Al Nassr.</p>
                            </Link>
                        </div>

                        <div
                            className='col-md-6 overflow-hidden'>
                            <div data-aos="zoom-in-right"
                                data-aos-duration='1000'
                                data-aos-delay='200' className='zoom'>

                                <div className='imgContainer'>
                                    <Link to="/details">
                                        <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/vialli-20230107100726.jpg" className='img-fluid' alt="" />
                                    </Link>
                                </div>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <p className='fs-6 effect'>Another legend passed away after Pele's death.</p>
                            </Link>
                        </div>
                        <div
                            className='col-md-6 overflow-hidden'>
                            <div data-aos="zoom-in-right"
                                data-aos-duration='1000'
                                data-aos-delay='200' className='zoom'>
                                <div className='imgContainer'>
                                    <Link to="/details">
                                        <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/tv-20230107095059.jpg" className='img-fluid' alt="" />
                                    </Link>
                                </div>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <p className='fs-6 effect'>See all the live matches from BPL on your Tv.</p>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Sports;
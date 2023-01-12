import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Politics = () => {
    return (
        <div className='container mt-2'>

            <div className='row g-5'>
                <div className='col-12 col-md-6  border-end'>
                    <Link to='/categories' className='text-decoration-none text-dark'>
                        <h3 className='title my-3 border-style'>
                            <span className='effect'>Politics</span>
                        </h3>
                    </Link>
                    <div
                        className='zoom'>
                        <div className='imgContainer'>
                            <Link to="/details">
                                <img src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/mosha-20230107133407.jpg" className='img-fluid zoom' alt="" />
                            </Link>
                        </div>
                        <Link to='/details' className='text-decoration-none text-dark'>
                            <h3 className='pb-2 border-bottom mt-2 effect'>A general meeting was placed at uttara for the development</h3>
                        </Link>
                    </div>
                    <div className='row g-3 '>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='300'
                            className='col-6 col-md-6  zoom '>
                            <div className='imgContainer '>
                                <Link to="/details">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/goashor-20230107131942.jpg" className='img-fluid zoom' alt="" />
                                </Link>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark '>
                                <h5 className='border-bottom pb-3 mt-2 effect '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                            </Link>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='400'
                            className='col-6 col-md-6  zoom'>
                            <div className='imgContainer'>

                                <Link to="/details">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/amir-20230106210552.jpg" className='img-fluid zoom' alt="" />
                                </Link>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <h5 className='border-bottom pb-3 mt-2 effect'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                            </Link>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='400'
                            className='col-6 col-md-6  zoom'>
                            <div className='imgContainer'>
                                <Link to="/details">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/kader-12-20230106210152.jpg" className='img-fluid zoom' alt="" />
                                </Link>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <h5 className='border-bottom pb-3 mt-2 effect'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                            </Link>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='400'
                            className='col-6 col-md-6  zoom'>
                            <div className='imgContainer'>

                                <Link to="/details">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/tuku-20230106195542.jpg" className='img-fluid zoom' alt="" />
                                </Link>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <h5 className='border-bottom pb-3 mt-2 effect'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-6 '>
                    <h3 className='title my-3 border-style'>
                        <span className='me-5'>Vote</span>
                    </h3>
                    <div
                        className='zoom'>
                        <div className='imgContainer'>
                            <Link to="/details">  <img src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/cc-20230101195129.jpg" className='img-fluid' alt="" /></Link>
                        </div>
                        <Link to='/details' className='text-decoration-none text-dark'>
                            <h3 className='pb-2 border-bottom mt-2 effect'>With the formula of Pallibandhu vote occasion can be done more effectively</h3>
                        </Link>
                    </div>
                    <div className='row g-3'>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='300'
                            className='col-6 col-md-6  zoom'>
                            <div className='imgContainer'>
                                <Link to="/details">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/election-commission-20230101180315.jpg" className='img-fluid zoom' alt="" />
                                </Link>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <h5 className='border-bottom pb-3 mt-2 effect'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                            </Link>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='300'
                            className='col-6 col-md-6  zoom'>
                            <div className='imgContainer'>
                                <Link to="/details">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/lakshmipur-20221221110154.jpg " className='img-fluid zoom' alt="" />
                                </Link>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <h5 className='border-bottom pb-3 mt-2 effect'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                            </Link>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='400'
                            className='col-6 col-md-6  zoom'>
                            <div className='imgContainer'>
                                <Link to="/details">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/4-e-20221213122859.jpg " className='img-fluid zoom' alt="" />
                                </Link>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <h5 className='border-bottom pb-3 mt-2 effect'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                            </Link>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='400'
                            className='col-6 col-md-6 zoom'>
                            <div className='imgContainer'>
                                <Link to="/details">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/electiom-2022-20221202135038.jpg" className='img-fluid zoom' alt="" />
                                </Link>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                            <h5 className='border-bottom pb-3 mt-2 effect'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                                </Link>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Politics;
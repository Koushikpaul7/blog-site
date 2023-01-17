import React from 'react';
import { Link } from 'react-router-dom';
import OtherNews from '../Others/OtherNews';

const SidebarCategory = () => {
    return (
       
            <div className='col-12 col-md-4 my-3'>
                    <img className='mx-md-5' src="https://tpc.googlesyndication.com/simgad/3182520416671585917" alt="" />
                    <div className='col-12 col-md-12'>
                        <div className='row '>
                            <div className='col-12 col-md-12 extra'>
                                <h3 className='title my-3 border-style'>
                                    <Link to='/details' className='text-decoration-none text-dark'>
                                        <span className='me-5 effect'>Highest Read - National</span>
                                    </Link>
                                </h3>
                                <Link to='/details'>
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/home-ministry-20230103003421.jpg" className='img-fluid' alt="" />
                                </Link>
                                <Link to='/details' className='text-decoration-none text-dark'>
                                    <p className='fs-5 mb-4'>Five DIG Prisons transferred</p>
                                </Link>
                            </div>
                        </div>
                        <div className='row  extra line'>
                            <div className='col-6 col-md-6 '>
                                <Link to='/details' className='text-decoration-none text-dark zoom'>
                                    <div className='imgContainer'>
                                        <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/lass-20230108110316.jpg" className='img-fluid' style={{ height: "100px" }} alt="" />
                                    </div>
                                    <p>Van rider killed after being hit by a truck in Rai Bazar</p>
                                </Link>

                            </div>
                            <div className='col-6 col-md-6'>

                                <Link to='/details' className='text-decoration-none text-dark zoom'>
                                    <div className='imgContainer'>
                                        <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/lass-20230108110316.jpg" className='img-fluid' style={{ height: "100px" }} alt="" />
                                    </div>
                                    <p>Van rider killed after being hit by a truck in Rai Bazar</p>
                                </Link>

                            </div>
                            <div className='col-6 col-md-6'>

                                <Link to='/details' className='text-decoration-none text-dark zoom'>
                                    <div className='imgContainer'>
                                        <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/lass-20230108110316.jpg" className='img-fluid' style={{ height: "100px" }} alt="" />
                                    </div>
                                    <p>Van rider killed after being hit by a truck in Rai Bazar</p>
                                </Link>

                            </div>
                            <div className='col-6 col-md-6'>

                                <Link to='/details' className='text-decoration-none text-dark zoom'>
                                    <div className='imgContainer'>
                                        <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/lass-20230108110316.jpg" className='img-fluid' style={{ height: "100px" }} alt="" />
                                    </div>
                                    <p>Van rider killed after being hit by a truck in Rai Bazar</p>
                                </Link>

                            </div>


                        </div>
                        <div className='my-2'>
                            <OtherNews />
                        </div>

                    </div>
                </div>
       
    );
};

export default SidebarCategory;
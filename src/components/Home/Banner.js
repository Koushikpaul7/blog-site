import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import SidebarHome from './SidebarHome';
const Banner = () => {
    return (
        <div className='container mb-3'>
            <h3
                className='title my-3 border-style'>
                <span className=' effect'>Featured</span>
            </h3>

            <div className=''>
                <div className='row g-4'>
                    <div className='col-12 col-md-8 '>


                        <div className='zoom mb-3' >
                            <div
                                data-aos="fade-down"
                                className='imgContainer'>

                                <Link to='/details'> <img
                                    src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/jaker-20230109151823.jpg" class=" rounded card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                        <div
                            className=' bg-light'>
                            <p><span class="badge bg-primary">BPL</span></p>
                            <Link to='/details' className='text-decoration-none text-dark'>

                                <h3 className='effect d-inline'>See all BPl updates here.</h3>
                            </Link>
                            <div class=" text-muted">
                                <p class="">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, </p>
                            </div>
                        </div>

                        <div class="mt-4 " >
                            <div className='zoom mb-3' >
                                <div
                                    className='imgContainer'>

                                    <Link to='/details'> <img
                                        src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/pm-20230108172255.jpg" class=" rounded card-img-top" alt="..." /></Link>
                                </div>
                            </div>
                            <div
                                className=''>
                                <p><span class="badge bg-primary mt-2">National</span></p>
                                <Link to='/details' className='text-decoration-none text-dark'>

                                    <h3 className='effect d-inline'>Get the latest national updates of the day</h3>
                                </Link>
                                <div class=" text-muted mt-2">
                                    <p class="">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, </p>
                                </div>
                            </div>
                        </div>
                        <div className='row g-4 mt-3'>
                            <div
                                data-aos="zoom-in"
                                data-aos-duration='1000'
                                data-aos-delay='200'
                                aos-init
                                aos-animate
                                className='col-12 col-md-4'>
                                <Link to='/categories' className='text-decoration-none text-dark'>
                                    <div class="card zoom ">
                                        <div className='imgContainer fix-ratio'>

                                            <img src="https://imageresizer.static9.net.au/w6Yx8ZTn79TwJFWhSWTm5qaRmdQ=/360x203/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F6913865d-372a-42a7-83b4-b3fb2a8f2c19" class="card-img-top" alt="..." />
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text fw-bold effect">Some quick example text to build on the card title </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div
                                data-aos="zoom-in"
                                data-aos-duration='1000'
                                data-aos-delay='100'
                                className='col-12 col-md-4'>
                                <Link to='/categories' className='text-decoration-none text-dark'>
                                    <div class="card zoom ">
                                        <div className='imgContainer fix-ratio'>

                                            <img src="https://imageresizer.static9.net.au/w6Yx8ZTn79TwJFWhSWTm5qaRmdQ=/360x203/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F6913865d-372a-42a7-83b4-b3fb2a8f2c19" class="card-img-top" alt="..." />
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text fw-bold effect">Some quick example text to build on the card title </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div
                                data-aos="zoom-in"
                                data-aos-duration='1000'
                                data-aos-delay='200'
                                className='col-12 col-md-4'>
                                <Link to='/categories' className='text-decoration-none text-dark'>
                                    <div class="card zoom ">
                                        <div className='imgContainer fix-ratio'>

                                            <img src="https://imageresizer.static9.net.au/w6Yx8ZTn79TwJFWhSWTm5qaRmdQ=/360x203/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F6913865d-372a-42a7-83b4-b3fb2a8f2c19" class="card-img-top" alt="..." />
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text fw-bold effect">Some quick example text to build on the card title </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </div>

                    </div>

                    {/* sidebar */}
                    <SidebarHome />
                </div>
            </div>
        </div>
    );
};

export default Banner;
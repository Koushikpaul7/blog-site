import React from 'react';
import { Link } from 'react-router-dom';

const Latest = () => {
    return (
        <div className='container'>
            <div className='row g-5 my-4'>
                <div className='col-12 col-md-6 h-full d-flex text-center align-items-center'>

                    <h1 className=''>Get all the Latest news and blogs from here.</h1>

                </div>
                <div className='col-12 col-md-6'>


                    <img src="https://thumbs.dreamstime.com/b/latest-news-isolated-icon-megaphone-bullhorn-breaking-report-vector-info-announcement-tv-radio-broadcast-web-article-161471413.jpg" className='img-fluid' alt="" />

                </div>
            </div>
            <div className='ps-0 my-4'>
                <div className='row g-3'>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        className='col-12 col-md-3 ps-1'>
                        <Link to="/categories" className='text-decoration-none'><div class="card zoom text-dark">
                            <div className='imgContainer fix-ratio'>

                                <img src="https://www.dailyjanakantha.com/media/imgAll/2023January/SM/13-2301110805-SM.jpg" class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body">
                                <p class="card-text fw-bold effect">Some quick example text to build on the card title </p>
                            </div>
                        </div></Link>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration='1000'
                        data-aos-delay='300'
                        className='col-12 col-md-3'>
                        <Link to='/details' className='text-decoration-none text-dark'>
                            <div class="card zoom">
                                <div className='imgContainer fix-ratio'>

                                    <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/09/karnataka-bandh-1601276118.jpg" class="card-img-top" alt="..." />
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
                        data-aos-delay='400'
                        className='col-12 col-md-3'>
                        <Link to='/details' className='text-decoration-none text-dark'>
                            <div class="card zoom">
                                <div className='imgContainer fix-ratio'>

                                    <img src="https://www.dailyjanakantha.com/media/imgAll/2023January/SM/13-2301110805-SM.jpg" class="card-img-top" alt="..." />
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
                        data-aos-delay='500'
                        className='col-12 col-md-3'>
                        <Link to='/details' className='text-decoration-none text-dark'>
                            <div class="card zoom">
                                <div className='imgContainer fix-ratio'>

                                    <img src="https://www.theindependentbd.com/assets/news_images/BD,ee.jpg" class="card-img-top" alt="..." />
                                </div>
                                <div class="card-body">
                                    <p class="card-text fw-bold effect">Some quick example text to build on the card title </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Latest;
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Banner = () => {
    return (
        <div className='container bg-light mb-3'>
            <h1 className='text-center  bg-danger py-2 fs-3 text-white mb-3'>Featured news</h1>

            <div className='container'>
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
                        <div className='row g-2 mt-5'>
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
                    <div className='col-12 col-md-4 '>
                        <div
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            data-aos="fade-left">
                            <div className='  text-center bg-secondary rounded'>


                                <p className='py-1 text-white fw-bold'>Others news</p>
                            </div>
                            <Link to='#' className=' text-decoration-none'>
                                <ul
                                data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration='1000'
                                data-aos-delay='200'
                                class="list-group list-group-flush mt-3">
                                <Link to='#' className=' text-decoration-none '>
                                <ul class="list-group list-group-flush ">
                                    <li class="list-group-item d-flex px-0 line zoom">
                                        <div className='imgContainer fix-ratio-others me-2'>
                                            <img className='img-fluid ' src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/qader-20230110102002.jpg" alt="" />
                                        </div>
                                        <p className='fw-normal fs-6'>Cras justo odio Dapibus facilisis</p></li>
                                        <li class="list-group-item d-flex px-0 line zoom">
                                        <div className='imgContainer fix-ratio-others me-2'>
                                            <img className='img-fluid me-2' src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/photo-cold-20230110111127.jpg" alt="" />
                                        </div>
                                        <p className='fw-normal fs-6'>Cras justo odio Dapibus facilisis</p></li>
                                    
                                    <li class="list-group-item d-flex line px-0 zoom">
                                        <div className='imgContainer fix-ratio-others me-2'>

                                            <img className='img-fluid me-2' src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/naoga--20230110110432.jpg" alt="" />
                                        </div>
                                        <p className='fw-normal fs-6'>Cras justo odio Dapibus facilisis</p>
                                    </li>
                                    <li class="list-group-item d-flex line px-0 zoom">
                                        <div className='imgContainer fix-ratio-others me-2'>

                                            <img className='img-fluid me-2' src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/panchagarh-20230110105204.jpg" alt="" />
                                        </div>
                                        <p className='fw-normal fs-6'>Cras justo odio Dapibus facilisis</p></li>

                                </ul>
                            </Link>
                            </ul>
                            </Link>
                        </div>
                        <div className='mt-5'>
                            <div
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            data-aos="fade-left"
                                class="card zoom ">
                                <div className='imgContainer'>

                                    <Link to='/details'>
                                        <img src="https://www.chinadaily.com.cn/photo/images/attachement/jpg/site1/20170918/d8cb8a5155b01b297c550d.jpg" class="card-img-top img-fluid" alt="..." /></Link>
                                </div>
                                <Link to='/details' className='text-decoration-none text-dark'>
                                    <div 
                                     
                                    class="card-body text-center">
                                        <h5 class="card-title d-flex effect">Sports</h5>
                                        <p class="card-text text-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='my-5'>
                            <div
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            data-aos="fade-left"
                                class="card zoom">
                                <div className='imgContainer'>
                                    <Link to='/details'>
                                        <img src="https://www.ncw.co.uk/wp-content/uploads/2020/06/Music-Club.jpg" class="card-img-top img-fluid" alt="..." />
                                    </Link>
                                </div>
                                <Link to='/details' className='text-decoration-none text-dark'>
                                    <div 
                                    class="card-body text-center">
                                        <h5 class="card-title text-start effect">Music</h5>
                                        <p class="card-text text-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <div className='row g-5'>
                    <div className='col-12 col-md-6 h-full d-flex text-center align-items-center'>

                        <h1 className=''>Get all the Latest news and blogs from here.</h1>

                    </div>
                    <div className='col-12 col-md-6'>


                        <img src="https://thumbs.dreamstime.com/b/latest-news-isolated-icon-megaphone-bullhorn-breaking-report-vector-info-announcement-tv-radio-broadcast-web-article-161471413.jpg" className='img-fluid' alt="" />

                    </div>
                </div>
                <div className='container ps-0 my-2'>
                    <div className='row '>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            className='col-12 col-md-3 '>
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
        </div>
    );
};

export default Banner;
import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='container-fluid bg-light'>
            <h1 className='text-center bg-danger p-2 fs-3 text-white mb-3'>Featured news</h1>

            <div className='container'>
                <div className='row g-4'>
                    <div className='col-12 col-md-8 '>

                        
                        <div className='zoom mb-3' style={{height:"200px"}}>
                        <div
                                data-aos="fade-down"
                                className='imgContainer'>

                               <Link to='/details'> <img
                                    src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/jaker-20230109151823.jpg" class=" rounded card-img-top"   alt="..." /></Link>
                            </div>
                        </div>
                            <div
                                data-aos="fade-right"
                                data-aos-duration='1000'
                                data-aos-delay='200'
                                className=' bg-light'>
                                <p><span class="badge bg-primary">Education</span></p>
                                <h3>Information regarding top universities.</h3>
                                <div class=" text-muted">
                                    <p class="">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, </p>
                                </div>
                            </div>
                        
                        <div class="mt-5 " >
                            <div className='zoom' style={{height:"200px"}}>
                                
                            <div
                                data-aos="fade-up"
                                data-aos-duration='1000'
                                data-aos-delay='200'
                                className='imgContainer'>

                               <Link to='/details'> <img src="https://examstudyexpert.com/wp-content/uploads/2021/07/Study-motivation-Reasons-why-small-1024x724.jpg" class="card-img-top rounded  mb-2"  alt="..." /></Link>
                            </div>
                            </div>
                            <div
                                className=''>
                                <p><span class="badge bg-primary mt-3">Motivation</span></p>
                                <h3>Just one small positive thought in the morning can change your whole day</h3>
                                <div class=" text-muted mt-5">
                                    <p class="">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, </p>
                                </div>
                            </div>
                        </div>
                       <div className='row g-2 mt-5'>
                       <div
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            className='col-12 col-md-4'>
                            <Link to='/categories' className='text-decoration-none text-dark'>
                            <div class="card zoom ">
                                <div className='imgContainer'>

                                    <img style={{height:"200px"}} src="https://imageresizer.static9.net.au/w6Yx8ZTn79TwJFWhSWTm5qaRmdQ=/360x203/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F6913865d-372a-42a7-83b4-b3fb2a8f2c19" class="card-img-top" alt="..." />
                                </div>
                                <div class="card-body">
                                <p class="card-text fw-bold">Some quick example text to build on the card title </p>
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
                                <div className='imgContainer'>

                                    <img style={{height:"200px"}} src="https://imageresizer.static9.net.au/w6Yx8ZTn79TwJFWhSWTm5qaRmdQ=/360x203/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F6913865d-372a-42a7-83b4-b3fb2a8f2c19" class="card-img-top" alt="..." />
                                </div>
                                <div class="card-body">
                                <p class="card-text fw-bold">Some quick example text to build on the card title </p>
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
                                <div className='imgContainer'>

                                    <img style={{height:"200px"}} src="https://imageresizer.static9.net.au/w6Yx8ZTn79TwJFWhSWTm5qaRmdQ=/360x203/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F6913865d-372a-42a7-83b4-b3fb2a8f2c19" class="card-img-top" alt="..." />
                                </div>
                                <div class="card-body">
                                <p class="card-text fw-bold">Some quick example text to build on the card title </p>
                                </div>
                            </div>
                            </Link>
                        </div>
                      
                       </div>

                    </div>
                    <div className='col-12 col-md-4'>
                        <div
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            data-aos="fade-left">
                            <div className='  text-center bg-secondary rounded'>


                                <p className='py-1 text-white fw-bold'>Others news</p>
                            </div>
                           <Link to='/details' className=' text-decoration-none'>
                           <ul class="list-group list-group-flush ">
                                <li class="list-group-item d-flex justify-content-between align-items-center"><img style={{height:"50px",width:"120px"}} className='img-fluid me-2' src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/qader-20230110102002.jpg" alt=""/> <p className='fw-normal fs-6'>Cras justo odio Dapibus facilisis</p></li>
                                <li class="list-group-item d-flex justify-content-between align-items-center"><img style={{height:"50px",width:"120px"}} className='img-fluid me-2' src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/photo-cold-20230110111127.jpg" alt=""/> <p className='fw-normal fs-6'>Cras justo odio Dapibus facilisis</p></li>
                                <li class="list-group-item d-flex justify-content-between align-items-center"><img style={{height:"50px",width:"120px"}} className='img-fluid me-2' src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/naoga--20230110110432.jpg" alt=""/> <p className='fw-normal fs-6'>Cras justo odio Dapibus facilisis</p></li>
                                <li class="list-group-item d-flex justify-content-between align-items-center"><img style={{height:"50px",width:"120px"}} className='img-fluid me-2' src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/panchagarh-20230110105204.jpg" alt=""/> <p className='fw-normal fs-6'>Cras justo odio Dapibus facilisis</p></li>
                                
                            </ul>
                           </Link>
                        </div>
                        <div className='mt-2-5'>
                            <div
                                data-aos="fade-left"
                                data-aos-duration='1000'
                                data-aos-delay='200'
                                class="card zoom">
                                <div className='imgContainer'>

                                    <img src="https://www.chinadaily.com.cn/photo/images/attachement/jpg/site1/20170918/d8cb8a5155b01b297c550d.jpg" class="card-img-top img-fluid" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title d-flex">Sports</h5>
                                    <p class="card-text text-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to='/details'> <button class="btn btn-primary ">See Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className='my-5'>
                            <div
                                data-aos="fade-left"
                                data-aos-duration='1000'
                                data-aos-delay='200'
                                class="card zoom">
                                <div className='imgContainer'>

                                    <img src="https://www.ncw.co.uk/wp-content/uploads/2020/06/Music-Club.jpg" class="card-img-top img-fluid" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title text-start">Music</h5>
                                    <p class="card-text text-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to='/details'> <button class="btn btn-primary">See Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className='w-full d-flex mx-auto my-3 img-fluid' src="https://tpc.googlesyndication.com/simgad/437610714347656612" alt=""/>
            <div className='container'>
                <div className='row g-5'>
                    <div className='col-12 col-md-6 h-full d-flex text-center align-items-center'>
                        
                            <h1 className=''>Get all the Latest news and blogs from here.</h1>
                       
                    </div>
                    <div className='col-12 col-md-6'>
                        

                            <img src="https://thumbs.dreamstime.com/b/latest-news-isolated-icon-megaphone-bullhorn-breaking-report-vector-info-announcement-tv-radio-broadcast-web-article-161471413.jpg" className='img-fluid' alt="" />
                        
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            className='col-12 col-md-3'>
                            <Link to="/categories" className='text-decoration-none'><div class="card zoom text-dark">
                                <div className='imgContainer'>

                                    <img style={{height:"200px"}} src="https://imageresizer.static9.net.au/w6Yx8ZTn79TwJFWhSWTm5qaRmdQ=/360x203/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F6913865d-372a-42a7-83b4-b3fb2a8f2c19" class="card-img-top" alt="..." />
                                </div>
                                <div class="card-body">
                                <p class="card-text fw-bold">Some quick example text to build on the card title </p>
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
                                <div className='imgContainer'>

                                    <img style={{height:"200px"}}src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/09/karnataka-bandh-1601276118.jpg" class="card-img-top" alt="..." />
                                </div>
                                <div class="card-body">
                                <p class="card-text fw-bold">Some quick example text to build on the card title </p>
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
                                <div className='imgContainer'>

                                    <img style={{height:"200px"}} src="https://dt-media.dhakatribune.com/?width=400&height=280&cropratio=4:5&quality=50&image=en/uploads/2021/11/06/education-minister-jsc-exam-4-1572692715210-1572692715211.jpeg&anchor=top" class="card-img-top" alt="..." />
                                </div>
                                <div class="card-body">
                                <p class="card-text fw-bold">Some quick example text to build on the card title </p>
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
                                <div className='imgContainer'>

                                    <img style={{height:"200px"}} src="https://www.theindependentbd.com/assets/news_images/BD,ee.jpg" class="card-img-top" alt="..." />
                                </div>
                                <div class="card-body">
                                    <p class="card-text fw-bold">Some quick example text to build on the card title </p>
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
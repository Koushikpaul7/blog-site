import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
            <h1 className='text-center bg-danger p-2 fs-3 text-white mb-3'>Featured news</h1>

            <div className='container'>
                <div className='row g-5'>
                    <div className='col-12 col-md-8'>

                        <div class="zoom">
                            <div className='imgContainer'>
                                
                            <img src="https://www.pointloma.edu/sites/default/files/styles/16_9_900w/public/images/USNews1.jpg?h=a1e1a043&itok=lTS4xciG" class="card-img-top rounded img-fluid mb-3" style={{ height: "300px" }} alt="..." />
                            </div>
                            <div className='mx-5 bg-light'>
                                <p><span class="badge bg-primary">Education</span></p>
                                <h3>Information regarding top universities.</h3>
                                <div class=" text-muted ">
                                    <p class="">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 zoom">
                            <div className='imgContainer'>
                                
                            <img src="https://examstudyexpert.com/wp-content/uploads/2021/07/Study-motivation-Reasons-why-small-1024x724.jpg" class="card-img-top rounded img-fluid mb-3" style={{ height: "300px" }} alt="..." />
                            </div>
                            <div className='mx-5 bg-light'>
                                <p><span class="badge bg-primary">Motivation</span></p>
                                <h3>Just one small positive thought in the morning can change your whole day</h3>
                                <div class=" text-muted ">
                                    <p class="">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='col-12 col-md-4'>
                        <div>
                            <div className='  text-center bg-secondary rounded'>


                                <p className='py-1 text-white fw-bold'>Others news</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Morbi leo risus</li>
                                <li class="list-group-item">Porta ac consectetur ac</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                        <div className='my-5'>
                            <div class="card zoom">
                                <div className='imgContainer'>
                                    
                                <img src="https://www.chinadaily.com.cn/photo/images/attachement/jpg/site1/20170918/d8cb8a5155b01b297c550d.jpg" class="card-img-top img-fluid" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Sports</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <Link to='/details'> <button class="btn btn-primary">Check it out</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className='my-5'>
                            <div class="card zoom">
                                <div className='imgContainer'>
                                    
                                <img src="https://www.ncw.co.uk/wp-content/uploads/2020/06/Music-Club.jpg" class="card-img-top img-fluid" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Music</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to='/details'> <button class="btn btn-primary">Check it out</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row g-5'>
                    <div className='col-12 col-md-6 h-full'>
                        <div className=' text-center'>
                            <h1 className='mt-5 pt-5'>Get all the Latest news and blogs from here.</h1>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 zoom'>
                        <div className='imgContainer'>
                            
                        <img src="https://thumbs.dreamstime.com/b/latest-news-isolated-icon-megaphone-bullhorn-breaking-report-vector-info-announcement-tv-radio-broadcast-web-article-161471413.jpg" className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
                <div className='container-fluid mt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-3'>
                        <div class="card zoom">
                            <div className='imgContainer'>
                                
                        <img src="https://imageresizer.static9.net.au/w6Yx8ZTn79TwJFWhSWTm5qaRmdQ=/360x203/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F6913865d-372a-42a7-83b4-b3fb2a8f2c19" class="card-img-top" alt="..."/>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                        </div>
                        <div className='col-12 col-md-3'>
                        <div class="card zoom">
                            <div className='imgContainer'>
                                
                        <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/09/karnataka-bandh-1601276118.jpg" class="card-img-top" alt="..."/>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                        </div>
                        <div className='col-12 col-md-3'>
                        <div class="card zoom">
                            <div className='imgContainer'>
                                
                        <img src="https://dt-media.dhakatribune.com/?width=400&height=280&cropratio=4:5&quality=50&image=en/uploads/2021/11/06/education-minister-jsc-exam-4-1572692715210-1572692715211.jpeg&anchor=top" class="card-img-top" alt="..."/>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                        </div>
                        <div className='col-12 col-md-3'>
                        <div class="card zoom">
                            <div className='imgContainer'>
                                
                        <img src="https://www.theindependentbd.com/assets/news_images/BD,ee.jpg" class="card-img-top" alt="..."/>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
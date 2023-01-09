import React from 'react';
import './Categories.css'
import './Contact.css'
import Last from './Last';
import Segment from './Segment';
const Categories = () => {
    return (
        <div className='container-fluid'>
            <h1 className='my-5 text-center text-info'>Watch all the categories of news </h1>
            <h3 className='text-center text-white bg-danger py-2'> Categories</h3>
            <div className='border-style fs-3 fw-bold my-3'>
                <p className='ms-4'>All categories</p>
            </div>
            <div className='container'>
                <div className='row  gx-4 gy-4'>
                    <div className='col-6  col-md-3 mb-2 zoom'>
                        <div
                            data-aos="flip-left"
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            class="card point card-border " >
                            <div className='imgContainer'>
                                <img src="https://thumbs.dreamstime.com/b/sports-news-broadcast-graphics-title-graphic-main-hd-seamless-looping-video-animation-see-all-other-elements-series-to-43669416.jpg" style={{ height: "150px" }} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Sports News</h5>
                                <p class="card-text">Get all the Latest sports news from here</p>
                                <p class="card-text"><small class="text-muted">Last updated 12 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="flip-left"
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        className='col-6  col-md-3 mb-2 zoom'>
                        <div class="card point card-border " >
                            <div className='imgContainer'>

                                <img src="https://www.aha.org/sites/default/files/styles/900x400/public/2020-10/aonl-cta-news-covid19-update.png?itok=x-AyXMOG" class="card-img-top" style={{ height: "150px" }} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Covid 19 News</h5>
                                <p class="card-text">Get all the Latest Covid Updates from here</p>
                                <p class="card-text"><small class="text-muted">Last updated 12 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="flip-right"
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        className='col-6  col-md-3 mb-2 zoom'>
                        <div class="card point card-border ">
                            <div className='imgContainer'>

                                <img src="https://previews.123rf.com/images/zerbor/zerbor1503/zerbor150300061/37603330-a-newspaper-with-the-headline-economic-news.jpg" class="card-img-top" style={{ height: "150px" }} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Economics News</h5>
                                <p class="card-text">Get all the Latest Economics news from here</p>
                                <p class="card-text"><small class="text-muted">Last updated 12 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="flip-right"
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        className='col-6  col-md-3 mb-2 zoom'>
                        <div class="card point card-border rounded-4 ">
                            <div className='imgContainer'>

                                <img src="https://thumbs.dreamstime.com/z/international-news-abstract-flat-background-design-illustration-isolated-143210249.jpg" class="card-img-top" style={{ height: "150px" }} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">International News</h5>
                                <p class="card-text">Get all the Latest International news from here</p>
                                <p class="card-text"><small class="text-muted">Last updated 12 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    {/* second */}
                    <div
                        data-aos="flip-up"
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        className='col-6  col-md-3 mb-2 zoom'>
                        <div class="card point card-border rounded-4 ">
                            <div className='imgContainer'>

                                <img src="https://law.asia/wp-content/uploads/2019/09/Legal-news-in-brief.jpg" class="card-img-top" style={{ height: "150px" }} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Legal News</h5>
                                <p class="card-text">Get all the Latest Law news from here</p>
                                <p class="card-text"><small class="text-muted">Last updated 12 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="flip-up"
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        className='col-6  col-md-3 mb-2 zoom'>
                        <div class="card point card-border rounded-4 ">
                            <div className='imgContainer'>

                                <img src="https://www.electronicsb2b.com/wp-content/uploads/2017/12/top-news.png" class="card-img-top" style={{ height: "150px" }} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Top News</h5>
                                <p class="card-text">Get all the Latest Top news from here</p>
                                <p class="card-text"><small class="text-muted">Last updated 12 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="flip-up"
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        className='col-6  col-md-3 mb-2 zoom'>
                        <div class="card point card-border ">
                            <div className='imgContainer'>

                                <img src="https://s.abcnews.com/images/GMA/230107_gma_icymi2_hpMain_16x9_608.jpg" class="card-img-top" style={{ height: "150px" }} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Entertainment News</h5>
                                <p class="card-text">Get all the Latest Entertainment news from here</p>
                                <p class="card-text"><small class="text-muted">Last updated 12 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="flip-up"
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        className='col-6  col-md-3 mb-2 zoom'>
                        <div class="card point card-border ">
                            <div className='imgContainer'>

                                <img src="https://media.licdn.com/dms/image/C4D03AQHrqCG3KCRLwQ/profile-displayphoto-shrink_800_800/0/1517604342447?e=2147483647&v=beta&t=3brFpTp8-ZWU7IdFP4GyWZ73awP6cgLWT-2AcxR3n8A" class="card-img-top" style={{ height: "150px" }} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Bd today's News</h5>
                                <p class="card-text">Get all the Latest Bangladesh news from here</p>
                                <p class="card-text"><small class="text-muted">Last updated 12 mins ago</small></p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Segment></Segment>
            <Last></Last>
        </div>
    );
};

export default Categories;
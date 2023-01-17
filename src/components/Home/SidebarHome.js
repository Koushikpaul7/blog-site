import React from 'react';
import { Link } from 'react-router-dom';
import OtherNews from '../Others/OtherNews';

const SidebarHome = () => {
    return (
        <div className='col-12 col-md-4 '>


            <div className=''>
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



            {/* others side */}
            <OtherNews />
        </div>
    );
};

export default SidebarHome;
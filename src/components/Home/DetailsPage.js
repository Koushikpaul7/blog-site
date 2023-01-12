import React from 'react';
import './Home.css';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';

import Last from './Last';
import { Link } from 'react-router-dom';
const DetailsPage = () => {

    const d = Date(Date.now());
    const a = d.toString()

    return (
        <div>
            <div id='detail' className='container '>
                <div className='row g-2'>
                    <div  className='col-12 col-md-8  '>
                        <div className='mT-5'>

                            <h5 className='text-info me-5'>Lorem Ipsum is simply dummy industry. </h5>
                            <h3>Lorem Ipsum is simply dummy text of the printing . </h3>
                            <p className='my-3 fw-bold d-flex align-items-center text-muted'><AiOutlineClockCircle className='fs-4 me-2' />Published: {a.slice(0, 16)}</p>
                           <div className='d-flex justify-content-between mx-2 text-muted'>
                           <div>
                           <p>Author: Mark Boucher</p>
                           </div>
                            <div>

                             Share on:
                           <Link to='#' className='text-decoration-none text-dark mx-4'> <BsFacebook className=' '/></Link>
                           <Link to='#' className='text-decoration-none text-dark'> <BsInstagram className=''/></Link>
                           <Link to='#' className='text-decoration-none text-dark mx-4'> <BsTwitter className=' '/></Link>
                            
                            </div>
                           </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 d-flex align-items-center'>
                        <img src="https://tpc.googlesyndication.com/simgad/391452917098588740" alt="" />
                    </div>

                </div>
            </div>
            <div className='container'>
                <div className='row g-2'>
                    <div className='col-12 col-md-8 overflow-hidden'>
                        <div className='imgContainer'
                        >
                            <img src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/cr-7-20230106114916.jpg" className='img-fluid w-full rounded' alt="" />
                        </div>
                        <small><i className='text-muted'>Ronaldo is Ready for making new records in Arab</i></small>
                        <p
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0"
                            className='text-muted my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <img className='img-fluid my-3' src="https://tpc.googlesyndication.com/simgad/5001318566747944281" alt="" />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

                    {/* 2nd part */}
                    <div className='col-12 col-md-4'>
                        <h3 className='title my-3 border-style'>
                            <span
                                className='me-5 '>Latest-Sports</span>
                        </h3>
                        <div className='overflow-hidden line'>

                            <ul
                                data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration='1000'
                                data-aos-delay='200'
                                class="list-group list-group-flush mt-3">
                                   <Link to='#' className='text-decoration-none text-dark'> 
                                   <ul class="list-group list-group-flush ">
                                    <li class="list-group-item d-flex justify-content-between align-items-center zoom">
                                        <div className='imgContainer fix-ratio'>
                                    <img  className='img-fluid' src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/qader-20230110102002.jpg" alt="" />
                                    </div>
                                     <p className='fw-normal fs-6 ms-3'>Cras justo odio Dapibus facilisis</p></li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center zoom">
                                            
                                            <div className='imgContainer fix-ratio'>
                                    <img className='img-fluid' src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/photo-cold-20230110111127.jpg" alt="" />
                                    </div> <p className='fw-normal fs-6 ms-3'>Cras justo odio Dapibus facilisis</p></li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center zoom">
                                        <div className='imgContainer fix-ratio'>
                                            
                                        <img className='img-fluid me-2' src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/naoga--20230110110432.jpg" alt="" />
                                        </div>
                                         <p className='fw-normal fs-6 ms-3'>Cras justo odio Dapibus facilisis</p>
                                         </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center zoom">
                                        <div className='imgContainer fix-ratio'>
                                            
                                        <img className='img-fluid me-2' src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/panchagarh-20230110105204.jpg" alt="" />
                                        </div>
                                        <p className='fw-normal fs-6 ms-3'>Cras justo odio Dapibus facilisis</p></li>

                                </ul></Link>
                            </ul>
                        </div>
                        <div className='row g-2 line'>
                            <div className='col-12 col-md-12 overflow-hidden px-3 mt-5'>
                                <h4 className='title my-3 border-style'>
                                    <span className='me-5 '>Most Viewed</span>
                                </h4>
                                <div className='zoom'>

                                    <div
                                        data-aos="fade-left"
                                        data-aos-duration='1000'
                                        data-aos-delay='200'
                                        className='imgContainer'>
                                        <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/tv-20230101101653.jpg" className='img-fluid' alt="" />
                                    </div>
                                </div>
                                <p className='fs-6 fw-bold'>See Today's match live.</p>
                            </div>
                            <div className='col-6 col-md-6 overflow-hidden'>
                                <img
                                    data-aos="zoom-in"
                                    data-aos-duration='1000'
                                    data-aos-delay='200'
                                    src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/dfgdf-20230106125109.jpg" className='img-fluid' alt="" />
                                <p>Lorem Ipsum is simply dummy text of the printing . </p>
                            </div>
                            <div className='col-6 col-md-6 overflow-hidden'>
                                <img
                                    data-aos="zoom-in"
                                    data-aos-duration='1000'
                                    data-aos-delay='200'
                                    src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/bpl-20230106141305.jpg" className='img-fluid' alt="" />
                                <p>Lorem Ipsum is simply dummy text of the printing . </p>
                            </div>
                            <div className='col-6 col-md-6 overflow-hidden'>
                                <img
                                    data-aos="zoom-in"
                                    data-aos-duration='1000'
                                    data-aos-delay='200'
                                    src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/mash-20230106165016.jpg" className='img-fluid' alt="" />
                                <p>Lorem Ipsum is simply dummy text of the printing . </p>
                            </div>
                            <div className='col-6 col-md-6 overflow-hidden'>
                                <img
                                    data-aos="zoom-in"
                                    data-aos-duration='1000'
                                    data-aos-delay='200'
                                    src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/toss-20230107183723.jpg" className='img-fluid' alt="" />
                                <p>Lorem Ipsum is simply dummy text of the printing . </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Last></Last>
        </div>

    );
};

export default DetailsPage;
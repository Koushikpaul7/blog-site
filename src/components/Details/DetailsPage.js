import React from 'react';
import '../Home/Home.css';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';

import Last from '../Home/Last';
import { Link } from 'react-router-dom';
import DetailsSideBar from './DetailsSideBar';
const DetailsPage = () => {

    const d = Date(Date.now());
    const a = d.toString()

    return (
        <div>
            <div className='container '>
                <div className='row g-4'>
                    <div className='col-12 col-md-8  '>
                        <div className='mt-5'>

                            <h5 className='text-info me-5'>Lorem Ipsum is simply dummy industry. </h5>
                            <h3>Lorem Ipsum is simply dummy text of the printing . </h3>
                            <p className='my-3 fw-bold d-flex align-items-center text-muted'><AiOutlineClockCircle className='fs-4 me-2' />Published: {a.slice(0, 16)}</p>
                            <div className='row text-muted'>
                                <div className='col-12 col-md-6'>
                                    <p className='col-sm-12'>Author: <Link to='#' className='text-decoration-none text-muted fw-bold' >Mark Boucher</Link></p>
                                </div>
                                <div className='col-12 col-md-6 mb-3'>

                                    Share on:
                                    <Link to='#' className='text-decoration-none text-dark mx-4'> <BsFacebook className=' ' /></Link>
                                    <Link to='#' className='text-decoration-none text-dark'> <BsInstagram className='' /></Link>
                                    <Link to='#' className='text-decoration-none text-dark mx-4'> <BsTwitter className=' ' /></Link>

                                </div>
                            </div>
                        </div>







                        <div className='col-12 col-md-12 overflow-hidden'>
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




                    </div>
                    {/* sidebar */}
                    <DetailsSideBar />
                </div>
            </div>
            {/* Bottom content */}
            <Last></Last>
        </div>

    );
};

export default DetailsPage;
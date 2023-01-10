import React from 'react';
import './Contact.css'
const Economics = () => {
    return (
        <div className='container mt-4 overflow-hidden'>
            <h3 className='title my-3 border-style'>
                <span className='me-5 '>Economics</span>
            </h3>
            <div className='row'>
                {/* first part */}

                <div className='col-12 col-md-3'>
                    <div
                        data-aos="zoom-in-right"
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        className='zoom'>

                        <div className='imgContainer'>
                            <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/samson-h-chowdhury-20230107142137.jpg" className='img-fluid  ' alt="" />
                        </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <div className='row gap-2'>
                        <div
                            data-aos="fade-right"
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            className='col-12 d-flex my-2 zoom'>
                            <div className='imgContainer'>
                                <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/warm1-20230107152001.jpg" className='img-fluid mt-2' alt="" />

                            </div>
                            <div className='ms-3'>

                                <p className='fs-6'>Lorem Ipsum is simply dummy text of the printing  </p>
                            </div>
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            className='col-12 d-flex zoom'>
                            <div className='imgContainer'>

                                <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/warm1-20230107152001.jpg" className='img-fluid  mt-2' alt="" />
                            </div>
                            <div className='ms-3'>

                                <p className='fs-6 '>Lorem Ipsum is simply dummy text of the printing </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* middle part */}
                <div
                   
                    className='col-12 col-md-6 overflow-hidden '>
                        <div
                         data-aos="fade-down"
                         data-aos-easing="linear"
                         data-aos-duration="1200" className='zoom '>
                            
                        
                    <div className='imgContainer '>

                        <img src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/oil-cv-20230107153121.jpg" className='img-fluid ' alt="" />
                    </div>
                    </div>
                    <h1>Lorem Ipsum is simply dummy text of the printing.</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. </p>
                </div>

                {/* Last part */}
                <div className='col-12 col-md-3 overflow-hidden'>
                    <div
                        data-aos="zoom-in-right"
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        className='zoom'>
                        <div className='imgContainer'>

                            <img src=" https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/dse-20230107115314.jpg" className='img-fluid  ' alt="" />
                        </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <div className='row gap-2'>
                        <div
                            data-aos="fade-left"
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            className='col-12 d-flex my-2 zoom'>
                            <div className='imgContainer'>
                                <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/warm1-20230107152001.jpg" className='img-fluid mt-2' alt="" />

                            </div>
                            <div className='ms-3'>

                                <p className='fs-6'>Lorem Ipsum is simply dummy text of the printing. </p>
                            </div>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            className='col-12 d-flex my-2 zoom'>
                            <div className='imgContainer'>
                                <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/warm1-20230107152001.jpg" className='img-fluid mt-2' alt="" />

                            </div>
                            <div className='ms-3'>

                                <p className='fs-6'>Lorem Ipsum is simply dummy text of the printing </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Economics;
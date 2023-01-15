import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css'
const OtherNews = () => {
    return (
        <div
            data-aos-duration='1000'
            data-aos-delay='200'
            data-aos="fade-left">
            <div className='  text-center bg-secondary rounded'>


                <p className='py-1 text-white fw-bold'>Others news</p>
            </div>
            <Link to='/details' className=' text-decoration-none'>
                <ul
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration='1000'
                    data-aos-delay='200'
                    class="list-group list-group-flush mt-3">
                    <Link to='/details' className=' text-decoration-none '>
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
    );
};

export default OtherNews;
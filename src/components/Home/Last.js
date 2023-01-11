import React from 'react';
import './Last.css'
import './Categories.css'
import { Link } from 'react-router-dom';
const Last = () => {
    return (
        <div className='container mt-5 py-5 overflow-hidden'>
            <div className='row g-2'>
                <div className=' col-12 col-md-8 '>
                    <Link to='/' className='text-decoration-none text-dark'>
                        <h3 className='title my-3 border-style'>
                            <span className='me-5'>Related</span>
                        </h3>
                    </Link>
                    <div className='row g-2'>
                        <div
                            data-aos="fade-up-right"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                            className='col-6 col-md-3 zoom'>
                            <div className='imgContainer'>
                                <Link to="/categories">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/smat-20230108133823.jpg" className='img-fluid' alt="" />
                                </Link>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <p className='fw-bold'>Use of smartphones are increasing more then ever</p>
                            </Link>
                        </div>
                        <div
                            data-aos="fade-up-right"
                            data-aos-duration="1000"
                            data-aos-delay="500"
                            className='col-6 col-md-3 zoom'>
                            <div className='imgContainer'>
                                <Link to="/categories">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/hash-20230108133057.jpg" className='img-fluid' alt="" />
                                </Link>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <p className='fw-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </Link>
                        </div>
                        <div
                            data-aos="fade-up-left"
                            data-aos-duration="1000"
                            data-aos-delay="600"
                            className='col-6 col-md-3 zoom'>
                            <div className='imgContainer'>
                                <Link to="/categories">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/rajshahi-20230108132721.jpg" className='img-fluid' alt="" />
                                </Link>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <p className='fw-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </Link>
                        </div>
                        <div
                            data-aos="fade-up-left"
                            data-aos-duration="1000"
                            data-aos-delay="700"
                            className='col-6 col-md-3 zoom'>
                            <div className='imgContainer'>
                                <Link to="/categories">
                                    <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/mamun-20230107001856.jpg" className='img-fluid' alt="" />
                                </Link>
                            </div>
                            <Link to='/details' className='text-decoration-none text-dark'>
                                <p className='fw-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-4 mt-3'>
                    <div>
                        <div className='  text-center bg-danger rounded'>


                            <p className='py-1 text-white fw-bold'>Breaking news</p>
                        </div>
                        <Link to='/' className='text-decoration-none text-dark'>
                        <ul
                            data-aos="zoom-out-left"
                            data-aos-duration="1000"
                            data-aos-delay="700"
                            class="list-group list-group-flush">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Morbi leo risus</li>
                            <li class="list-group-item">Porta ac consectetur ac</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                                </Link>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Last;
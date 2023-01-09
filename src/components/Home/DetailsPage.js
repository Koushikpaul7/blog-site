import React from 'react';
import './Contact.css';
import './Segment.css';
import { AiOutlineDoubleRight } from 'react-icons/ai';
const DetailsPage = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row g-2'>
                    <div className='col-12 col-md-8 '>
                        <div className='my-5 mx-4'>

                            <h3 className='text-info me-5'>Lorem Ipsum is simply dummy industry. </h3>
                            <h1>Lorem Ipsum is simply dummy text of the printing . </h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container'>
                <div className='row g-2'>
                    <div className='col-12 col-md-8 zoom'>
                        <div className='imgContainer'>
                            <img src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/cr-7-20230106114916.jpg" className='img-fluid w-full' alt="" />
                        </div>
                        <h5 className='text-muted my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
                    </div>

                    {/* 2nd part */}
                    <div className='col-6 col-md-4'>
                        <h3 className='title my-3 border-style'>
                            <span className='me-5 '>Latest-Sports</span>
                        </h3>
                        <ul class="list-group list-group-flush mt-3">
                       <li class="list-group-item"> < AiOutlineDoubleRight/> An item</li>
                            <li class="list-group-item"> < AiOutlineDoubleRight/> A second item</li>
                            <li class="list-group-item">< AiOutlineDoubleRight/> A third item</li>
                            <li class="list-group-item">< AiOutlineDoubleRight/> A fourth item</li>
                            <li class="list-group-item">< AiOutlineDoubleRight/> And a fifth one</li>
                        </ul>
                        <div className='row g-2'>
                            <div className='col-6 col-md-12 zoom px-3 mt-5'>
                            <h4 className='title my-3 border-style'>
                            <span className='me-5 '>Most Viewed</span>
                        </h4>
                            <div className='imgContainer'>
                                <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/tv-20230101101653.jpg" className='img-fluid' alt=""/>
                            </div>
                            <p className='fs-5 fw-bold'>See Today's match live.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default DetailsPage;
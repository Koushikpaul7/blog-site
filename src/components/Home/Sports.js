import React from 'react';

const Sports = () => {
    return (
        <div className='container-fluid'>
            <h3 className='my-3 text-primary fw-bold'>Sports</h3>
            <div className='row g-5'>
                <div className='col-12 col-md-6 border-bottom px-5'>
                    <div className='zoom'>
                        <div className='imgContainer'>

                            <img src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/psg-20230107115909.jpg" alt="" className='img-fluid' />
                        </div>
                        <h3>Psg with amazing comeback without Messi,Neymar and Mbappe</h3>
                        <p className='fs-5 text-muted my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>
                <div className='col-12 col-md-6 border-bottom px-5'>
                    <div className='row g-5'>
                        <div className='col-12 col-md-6 border-bottom zoom'>
                            <div className='imgContainer'>

                                <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/shakib-ashrafee-20230107111634.jpg" className='img-fluid' alt="" />
                            </div>

                            <p className='fs-4'>BPL clash among Sakib and Mashrafee</p>
                        </div>
                        <div className='col-md-6 border-bottom zoom'>
                            <div className='imgContainer'>

                                <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/ronaldo-20230107105050.jpg" className='img-fluid' alt="" />
                            </div>
                            <p className='fs-4'>Ronaldo Finished his training for his new team Al Nassr.</p>
                        </div>
                        <div className='col-md-6 zoom'>
                            <div className='imgContainer'>

                                <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/vialli-20230107100726.jpg" className='img-fluid' alt="" />
                            </div>
                            <p className='fs-4'>Another legend passed away after Pele's death.</p>
                        </div>
                        <div className='col-md-6 zoom'>
                            <div className='imgContainer'>

                                <img src="https://cdn.jagonews24.com/media/imgAllNew/SM/2019November/tv-20230107095059.jpg" className='img-fluid' alt="" />
                            </div>
                            <p className='fs-4'>See all the live matches from BPL on your Tv.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Sports;
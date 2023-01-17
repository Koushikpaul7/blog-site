import React from 'react';
import '../Home/Home.css'
import Category from './Category';
import { AiTwotoneHome } from 'react-icons/ai';
const Categories = () => {
    return (
        <div className=''>
            <div className='container '>

                <div className='border-style fs-6 fw-bold my-3'>
                    <p className='ms-4 d-flex align-items-center'><AiTwotoneHome className='me-2' /> National</p>
                </div>
            </div>
            <Category></Category>

            {/* <Segment></Segment>
            <Last></Last> */}
        </div>
    );
};

export default Categories;
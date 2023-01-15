import React from 'react';
import './Home.css'
const Contact = () => {
    return (
        <div className='container my-5'>
          <h3 className='title my-3 border-style'>
                    <span className='me-5 effect'>Contact Us</span>
                </h3>
            <div className=''>
            <div className='row g-5'>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration='1000'
                    data-aos-delay='200'
                    className='col-12 col-md-6 zoom'>
                    <div className='imgContainer'>
                        <img src="https://media.istockphoto.com/id/1365543480/video/contact-us-concept.jpg?s=640x640&k=20&c=G16GzQ4uJKlITww2ArmKNB9UKb1-IT2eyJrUxkUmAIY=" alt="" className='img-fluid rounded h-full ' />

                    </div>
                </div>
                <div className='col-12 col-md-6 overflow-hidden'>
                    <form
                     data-aos="fade-down"
                     data-aos-easing="linear"
                     data-aos-duration="1000"
                    >
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Name</label>
                            <input type="text" name='name' class="form-control" id="exampleInputPassword1"required />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Message</label>
                            <textarea type="text" name='message' class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className='text-center'>
                            <button type="submit" class="btn btn-primary w-50">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
            </div>
          
        </div>
    );
};

export default Contact;
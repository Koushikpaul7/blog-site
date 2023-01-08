import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className='container-fluid mt-5'>
            <h3 className='text-center mt-5 mb-4 bg-danger py-2 text-white'>Contact us</h3>
            <div className='row g-5'>
            <div className='col-12 col-md-6 zoom'>
                  <div className='imgContainer'>
                  <img src="https://media.istockphoto.com/id/1365543480/video/contact-us-concept.jpg?s=640x640&k=20&c=G16GzQ4uJKlITww2ArmKNB9UKb1-IT2eyJrUxkUmAIY=" alt="" className='img-fluid rounded h-full zoom'/>
                    
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Message</label>
                            <textarea type="text" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default Contact;
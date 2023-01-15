import React from 'react';
import '../Home/Home.css';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { ImWhatsapp } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
const Footer = () => {
  const date = new Date();
    const year = date.getFullYear();
    
  return (
    <footer class=" background text-center text-lg-start ">
      <div className='container d-md-flex d-none d-md-block justify-content-between  background align-items-center py-2'>
        <div className='pb-2'>
          <img src="https://www.onblastblog.com/wp-content/uploads/2017/08/blogger-logo.jpg" style={{ width: "90px", height: "30px" }} alt="" />
        </div>
        <div className='mb-sm-2'>
          <img className='me-3' src="https://cdn.jagonews24.com/media/common/Android-app-jagonews.png" style={{ width: "150px" }} alt="" />
          <img src="https://cdn.jagonews24.com/media/common/Android-app-jagonews.png" style={{ width: "150px" }} alt="" />
        </div>
      </div>

      <section class="background">
        <div class="container text-center text-md-start">

          <div class="row py-2">

            <div class="col-md-3 col-lg-4 col-xl-3 ">

              <h6 class="text-uppercase fw-bold mb-4">
                BLOGS
              </h6>
              <p className=''>
              BLOGS is one of the popular Blog site. It has begun with commitment of fearless, investigative, informative and independent journalism. 
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 ">

              <h6 class="text-uppercase fw-bold mb-4">
                Products
              </h6>
             
              <p>
                <a href="#!" class="text-reset text-decoration-none">React</a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">Laravel</a>
              </p>
            </div>



            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-md-4 ">

              <h6 class="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
             
              <p>
                <a href="#!" class="text-reset text-decoration-none">Settings</a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">Help</a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0  ">

              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <div className='row'>
              <address>
               Dhaka, Mirpur, Bangladesh
              </address>
              <a className='text-decoration-none text-dark my-3' href="mailto: BLOGS@example.com" >
                BLOGS@example.com
              </a>
              
              <a className='text-decoration-none text-dark' href="tel:+ 01 234 567 88"> + 01 234 567 88</a>
              <a className='text-decoration-none text-dark'href="tel:+ 01 234 567 89"> + 01 234 567 89</a>
              </div>
             
            </div>

          </div>

        </div>
      </section>
      <section className=' container d-flex justify-content-center justify-content-lg-between   background pb-4'>
        <div className=' d-none d-lg-block border-bottom '>
          <h6>Get connected with us on social networks:</h6>
        </div>
        <div className='me-md-4 mx-sm-auto mt-2 mt-md-0 pe-md-4'>
          <BsFacebook className='me-5 fs-3' />
          <AiFillInstagram className='me-5 fs-3' />
          <ImWhatsapp className='me-5 fs-3' />
          <BsTwitter className=' me-2 fs-3' />
        </div>
      </section>

      <div class="text-center p-3 fw-bold" style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}>
        <p>

        &copy; {year} Copyright:
        <span class="text-dark">BLOGS</span>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
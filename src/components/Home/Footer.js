import React from 'react';
import './Footer.css';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { ImWhatsapp } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
const Footer = () => {
  const date = new Date();
    const year = date.getFullYear();
    const currDate =year;
  return (
    <footer class=" background text-center text-lg-start ">
      <div className='container d-md-flex d-none d-md-block justify-content-between px-5 background align-items-center py-2'>
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

            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

              <h6 class="text-uppercase fw-bold mb-4">
                BLOGS
              </h6>
              <p className=''>
              BLOGS is one of the popular Blog site. It has begun with commitment of fearless, investigative, informative and independent journalism. This online site has started to provide real time news updates with maximum use of modern technology.-a
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2  mb-4">

              <h6 class="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" class="text-reset text-decoration-none">Angular</a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">React</a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">Vue</a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">Laravel</a>
              </p>
            </div>



            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ">

              <h6 class="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" class="text-reset text-decoration-none">Pricing</a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">Settings</a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">Orders</a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">Help</a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">

              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i class="fas fa-home me-3"></i> Dhaka, Mirpur, Bangladesh</p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                BLOGS@example.com
              </p>
              <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>

          </div>

        </div>
      </section>
      <section className=' container d-flex justify-content-center justify-content-lg-between   background pb-4'>
        <div className=' d-none d-lg-block border-bottom ms-4'>
          <h6>Get connected with us on social networks:</h6>
        </div>
        <div>
          <BsFacebook className='me-5 fs-3' />
          <AiFillInstagram className='me-5 fs-3' />
          <ImWhatsapp className='me-5 fs-3' />
          <BsTwitter className='me-5 fs-3' />
        </div>
      </section>

      <div class="text-center p-3 fw-bold" style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}>
        © {year} Copyright:
        <span class="text-dark">BLOGS</span>
      </div>

    </footer>
  );
};

export default Footer;
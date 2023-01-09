import React from 'react';
import './Footer.css'
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer class="bg-light text-center text-lg-start mt-5 ">
      <div className='d-md-flex d-none d-md-block justify-content-between px-5 background align-items-center py-2'>
       <div className='pb-2'>
       <img src="https://www.onblastblog.com/wp-content/uploads/2017/08/blogger-logo.jpg" style={{width:"120px"}} alt=""/>
       </div>
      <div className='mb-sm-2'>
      <img className='me-3' src="https://cdn.jagonews24.com/media/common/Android-app-jagonews.png" style={{width:"150px"}} alt=""/>
      <img src="https://cdn.jagonews24.com/media/common/Android-app-jagonews.png" style={{width:"150px"}} alt=""/>
      </div>
      </div>

      <div class="text-center p-3 fw-bold" style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}>
        © {year} Copyright:
        <span class="text-dark">BLOGS</span>
      </div>

    </footer>
  );
};

export default Footer;
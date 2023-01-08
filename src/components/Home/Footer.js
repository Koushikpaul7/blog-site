import React from 'react';

const Footer = () => {
  const today =new Date();
    const year= today.getFullYear();
    return (
        <footer class="bg-light text-center text-lg-start mt-5">
      
        <div class="text-center p-3 fw-bold" style={{backgroundColor:" rgba(0, 0, 0, 0.2)"}}>
          © {year} Copyright:
          <span class="text-dark">BLOGS</span>
        </div>
       
      </footer>
    );
};

export default Footer;
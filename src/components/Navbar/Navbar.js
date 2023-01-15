import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='sticky-top'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid ">
          <Link to='/' class="navbar-brand" href="#"><img style={{ width: "90px" }} src='https://www.onblastblog.com/wp-content/uploads/2017/08/blogger-logo.jpg' className='img-fluid' alt='...'></img></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse align" id="navbarNavAltMarkup">
            <div class="navbar-nav text-center">
              <Link to='/' class="nav-link active fw-bold "  aria-current="page"><p className='' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</p></Link>
              <Link to='/categories' class="nav-link active fw-bold" href="#"><p data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Category</p></Link>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Politics from './Politics';
import Sports from './Sports';
import './Home.css'
import Economics from './Economics';
const Home = () => {
  return (
    <div>

      <Banner></Banner>
      <Sports></Sports>
      <Politics></Politics>
      <Economics></Economics>
      <Contact></Contact>
    </div>
  );
};

export default Home;
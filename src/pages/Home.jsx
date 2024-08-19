import React from 'react';
import '../styles/home.scss';
import nuskool from '../assets/nuskool.jpg';

function Home() {
  return (
    <div className="home">
      <p>The best place for your new school drip</p>
      <img className="hero" src={nuskool} alt="hero" />
    </div>
  );
}

export default Home;
import React from 'react';
import '../styles/home.scss';
import nuskool from '../assets/nuskool.jpg';

function Home() {
  return (
    <div className="home">
      <h4>The best place for your new school drip</h4>
      <img className="hero" src={nuskool} alt="hero" />
    </div>
  );
}

export default Home;
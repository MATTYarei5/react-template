import React from 'react';
import '../styles/home.scss';
import nuskool from '../assets/nuskool.jpg';

function Home() {
  return (
    <div className="home">
      <h4>The best place for your new school drip</h4>
      <div className="hero" style={{ backgroundImage: `url(${nuskool})` }}>
        
      </div>
    </div>
  );
}

export default Home;
import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from "../assets/bikefront.jpg"
import '../styles/Home.css';

function Home() {
  return ( 
  <div className='home' style={{ backgroundImage:`url(${BannerImage})` }}>
    <div className='headerContainer'>
      <h1>Bikers' Spot</h1>
      <p>The Bike is your's</p>
      <Link to="/Bike">
      <button>ORDER NOW</button>
      </Link>
      </div> 
  </div>
  );
}

export default Home
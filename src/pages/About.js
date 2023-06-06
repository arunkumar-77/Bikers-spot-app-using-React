import React from 'react'
import Allbikes from '../assets/harley.jpg'
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop'style={{ backgroundImage:`url(${Allbikes})` }}
         ></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>
                Our vision is to be the best bikes retailer in South India offering complete satisfaction to our Customer and to contribute to a greener world.
                All the products and service offered will carry the best value for the money paid. We will work hard to ensure quality products and services is offered to the customers.
                Two-wheeled steerable machine that is pedaled by the rider's feet. On a standard Bikes the wheels are mounted in-line in a metal frame, with the front wheel held in a rotatable fork. 
                The rider sits on a saddle and steers by leaning and turning handlebars that are attached to the fork.
</p>
        </div>
    </div>
  )
}

export default About
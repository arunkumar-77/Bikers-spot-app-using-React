import React from 'react'
import { BikeList } from '../helpers/BikeList';
import Bikers from '../components/Bikers';
import '../styles/Menu.css';
import BannerImage from "../assets/backg.jpg"
function Menu() {
  return (
    <div className="menu" style={{ backgroundImage:`url(${BannerImage})` }}>
      <h1 className='menuTitle'>Our Bike</h1>
      <div className='bikeList'>
        {BikeList.map ((bikeItem, key) => {
          return (
          <Bikers 
          key={key}
          image={bikeItem.image} 
          name={bikeItem.name} 
          price={bikeItem.price} 
          />
        );
      })}

      </div>
    </div>
  );
}

export default Menu
import React from 'react'

function Bikers({image,name,price}) {
  return (
    <div className='bikeItem'>
      <div style={{ backgroundImage:`url(${image})` }}></div>
      <h1>{name}</h1>
      <p>${price}</p>
    </div>
  )
}

export default Bikers

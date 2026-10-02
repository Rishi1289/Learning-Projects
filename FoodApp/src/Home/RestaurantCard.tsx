import React from 'react'

const RestaurantCard = (Props) => {
  return (
    <div className="RestCard">
      <div
        className="Img"
        style={{ backgroundImage: `url(${Props.Image})` }}
      ></div>
      <div>
        <h2>{Props.name}</h2>
        <p>{Props.tag}</p>
      </div>
    </div>
  )
}

export default RestaurantCard
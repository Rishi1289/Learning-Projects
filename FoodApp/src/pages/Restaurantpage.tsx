import React from 'react'

const Restaurantpage = (props) => {
  return (
    <div>
    
      <h1>{props.name}</h1>
      <p>{props.tag}</p>
    </div>
  )
}

export default Restaurantpage

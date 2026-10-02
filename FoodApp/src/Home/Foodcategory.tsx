import React from 'react'
import FoodCard from './FoodCard';

const Foodcategory = () => {



  return (
   <div className="Foodcat">
       <h1>What are you Hungry For !!</h1>
      <div className="foodcard">
       <FoodCard item= 'Pizza'/>
       <FoodCard item= 'Pasta'/>
       <FoodCard item= 'Burger'/>
       <FoodCard item= 'South- Indian'/>
       <FoodCard item= 'North-Indian'/>
       <FoodCard item= 'Italian'/>   
     </div>
   </div>
  )
}

export default Foodcategory

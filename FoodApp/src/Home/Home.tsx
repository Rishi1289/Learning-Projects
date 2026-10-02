import React from 'react'
import PromotionalBanner from './PromotionalBanner';
import Foodcategory from './Foodcategory';
import PopularRestr from './PopularRestr';

const Home = () => {
  return (
    <div className="homepage">
        <div className="promotionalbanner">
           <PromotionalBanner/>
        </div>
        <div className="foodcategory">
          <Foodcategory/>


        </div>
        <div className="popularretaurant">
          <PopularRestr/>

        </div>
        <div className="popularfood">

        </div>
      
    </div>
  )
}

export default Home

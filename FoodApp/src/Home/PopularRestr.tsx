
import RestaurantCard from './RestaurantCard';
import {restaurants} from "../Data/Fooditems";

const PopularRestr = () => {
  return (
      <div className='Restaurants'>
        
        <div className="RestaurantCard">
          {restaurants.map(function(restaurant){
            
            return <RestaurantCard name ={restaurant.name} Image={restaurant.Image} id={restaurant.id}/> ;

          })}
          
          
        </div>
      
    </div>
  )
}

export default PopularRestr


import RestaurantCard from './RestaurantCard';
import {restaurants} from "../Data/Fooditems"

const PopularRestr = () => {
  return (
    <div className='Restaurants'>
        <h2>Already have a favourite Restaurant?</h2>
        <div className="RestaurantCard">
          {restaurants.slice(0,6).map(function(elem){
            return <RestaurantCard name ={elem.name} Image={elem.Image}/> ;

          })}
          
          
        </div>
      
    </div>
  )
}

export default PopularRestr

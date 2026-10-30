import FoodCard from './FoodCard';
import {restaurants} from "../Data/Fooditems";


const Foodcategory = () => {
  return (
   <div className="Foodcat">
       <h1>What are you Hungry For !!</h1>
      <div className="foodcard">
        {restaurants.map((restaurant) => 
        restaurant.categories.map((dish)=>
          
        (<FoodCard name={dish.name} id={restaurant.id}/>)
            
          
        )
        )}
     </div>
   </div>
  )
}

export default Foodcategory

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
          <h2>Already have a favourite Restaurant?</h2>
          <PopularRestr/>

        </div>
      
    </div>
  )
}

export default Home

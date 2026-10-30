import RestaurantCard from "./RestaurantCard";
import {restaurants} from "../Data/Fooditems";
const PopularRestr = () => <div className="Restaurants"><div className="RestaurantCard">{restaurants.map(r => <RestaurantCard key={r.id} id={r.id} name={r.name} Image={"Image" in r ? r.Image : undefined} tag={r.cuisines.join(" · ")}/>)}</div></div>;
export default PopularRestr;
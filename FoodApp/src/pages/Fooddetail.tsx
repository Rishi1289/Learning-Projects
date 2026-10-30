import { useParams, Link } from "react-router-dom";
import { restaurants } from "../Data/Fooditems";
type Food = {id:number;name:string;image:string};
type Variant = {type:string;price:number};
type Props = {addToCart:(food:Food,variant:Variant)=>void};
const FoodDetails = ({addToCart}:Props) => {
 const {id}=useParams();
 const restaurant=restaurants.find(r=>r.id===Number(id));
 if(!restaurant) return <div className="not-found"><h2>Menu not found</h2><Link to="/Restaurants">Browse restaurants</Link></div>;
 return <div className="food-details"><span className="eyebrow">FRESHLY MADE FOR YOU</span><h1 className="category-title">{restaurant.categories.map(c=>c.name).join(" & ")}</h1><Link to="/Cart">View your cart →</Link><div className="dishGrid">{restaurant.categories.flatMap(category=>category.dishes.map(food=><article key={food.id} className="dish-card"><img src={food.image} alt={food.name} className="dish-image" loading="lazy"/><h2 className="dish-name">{food.name}</h2><p className="dish-desc">{food.description}</p>{food.variants.map(variant=><div key={variant.type} className="variant-row"><span>{variant.type}</span><strong>₹{variant.price}</strong><button type="button" className="add-btn" onClick={()=>addToCart(food,variant)}>+ Add</button></div>)}</article>))}</div></div>;
};
export default FoodDetails;
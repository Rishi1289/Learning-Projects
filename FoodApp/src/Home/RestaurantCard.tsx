import { Link } from "react-router-dom";
type Props = {id:number;name:string;Image?:string;tag?:string};
const RestaurantCard = ({id,name,Image,tag}:Props) => <Link to={`/RestaurantDetailspage/${id}`} className="RestCard"><img src={Image || "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&auto=format&fit=crop"} alt={name} loading="lazy"/><div className="restaurant-card-content"><span className="eyebrow">RESTAURANT</span><h3>{name}</h3><p>{tag || "Freshly prepared favorites"}</p><span className="explore-link">View menu →</span></div></Link>;
export default RestaurantCard;
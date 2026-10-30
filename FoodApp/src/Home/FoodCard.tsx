import { Link } from "react-router-dom";
type Props = {id:number;name:string;Image?:string};
const FoodCard = ({id,name,Image}:Props) => <Link to={`/Fooddetail/${id}`} className="FoodCa"><img src={Image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop"} alt={name} loading="lazy"/><h3>{name}</h3><span>Explore menu →</span></Link>;
export default FoodCard;
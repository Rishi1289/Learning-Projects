import { Link } from "react-router-dom";


const FoodCard = (Props) => {
  return (
    <Link
      to={`/Fooddetail/${Props.id}`}
      className="FoodCa"
    >
    <div >
 
     <h2> {Props.name}</h2>
     <img src={Props.Image} alt={Props.name} />

    </div>
    </Link>
  )
}

export default FoodCard

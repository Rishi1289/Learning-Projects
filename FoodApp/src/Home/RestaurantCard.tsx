import { Link } from "react-router-dom";


const RestaurantCard = (Props) => {
  return (
     <Link
      to={`/RestaurantDetailspage/${Props.id}`}
      className="RestCard"
    >
    <div>
      <div
        className="Img"
      ></div>
      <div>
        <h2>{Props.name}</h2>
        <p>{Props.tag}</p>
      </div>
    </div>
    </Link>
  )
}

export default RestaurantCard
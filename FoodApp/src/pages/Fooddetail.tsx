
import { useParams, Link } from "react-router-dom";
import { restaurants } from "../Data/Fooditems";

// TypeScript types
type Food = {
  id: number;
  name: string;
  image: string;
};

type Variant = {
  type: string;
  price: number;
};

type FooddetailProps = {
  addToCart: (food: Food, variant: Variant) => void;
};

const FoodDetails = ({ addToCart }: FooddetailProps) => {
  const { id } = useParams();

  // Find restaurant using Layer 1 ID
  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === Number(id)
  );

  if (!restaurant) {
    return <h2 className="not-found">Restaurant not found</h2>;
  }

  return (
    <div className="food-details">
      <h1 className="category-title">
        {restaurant.categories[0].name}
      </h1>

      <Link to="/Cart">View Cart</Link>

      {restaurant.categories[0].dishes.map((food) => (
        <div key={food.id} className="dish-card">
          <h2 className="dish-name">{food.name}</h2>

          <img
            src={food.image}
            alt={food.name}
            className="dish-image"
          />

          <p className="dish-desc">{food.description}</p>

          {food.variants.map((variant) => (
            <div key={variant.type} className="variant-row">
              <span className="variant-type">
                {variant.type}
              </span>

              <span className="variant-price">
                ₹{variant.price}
              </span>

              <button
                className="add-btn"
                onClick={() => addToCart(food, variant)}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FoodDetails;

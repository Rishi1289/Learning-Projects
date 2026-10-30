import { useParams } from "react-router-dom";
import { restaurants } from "../Data/Fooditems";


function RestaurantDetailspage() {
  const { id } = useParams();

  const restaurant = restaurants.find((r) => r.id === Number(id));

  if (!restaurant) {
    return (
      <div className="notFound">
        <h1>Restaurant not found</h1>
        <p>No restaurant with id: {id}</p>
      </div>
    );
  }

  return (
    <div className="restaurantPage">
      <div className="restaurantPageInner">

        {/* ---------- Hero ---------- */}
        <div className="restaurantHero">
          <img src={restaurant.Image} alt={restaurant.name} />

          <div className="restaurantHeroInfo">
            <h1 className="restaurantName">{restaurant.name}</h1>

            <div className="restaurantMeta">
              {restaurant.cuisines.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>

            <p className="restaurantSpecialty">
              <strong>Specialty:</strong> {restaurant.specialty}
            </p>
          </div>
        </div>

        {/* ---------- Menu ---------- */}
        <h2 className="menuHeading">Menu</h2>

        {restaurant.categories.map((category) => (
          <div key={category.name} className="categoryBlock">
            <h3 className="categoryTitle">{category.name}</h3>

            <div className="dishGrid">
              {category.dishes.map((dish) => (
                <div key={dish.id} className="dishCard">
                  <h4 className="dishName">{dish.name}</h4>
                  <p className="dishDescription">{dish.description}</p>

                  <ul className="variantList">
                    {dish.variants.map((variant) => (
                      <li key={variant.type} className="variantRow">
                        <span className="variantType">{variant.type}</span>
                        <span className="variantPrice">₹{variant.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default RestaurantDetailspage;
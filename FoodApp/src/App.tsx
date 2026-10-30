
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Home from "./Home/Home";
import Layout from "./pages/Layout";
import RestaurantDetailspage from "./pages/RestaurantDetailspage";
import Restaurants from "./pages/Restaurants";
import Fooddetail from "./pages/Fooddetail";

// TypeScript type for cart items
export type CartItem = {
  id: number;
  name: string;
  image: string;
  type: string;
  price: number;
};

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add selected food to cart
  function addToCart(
    food: {
      id: number;
      name: string;
      image: string;
    },
    variant: {
      type: string;
      price: number;
    }
  ) {
    const item: CartItem = {
      id: food.id,
      name: food.name,
      image: food.image,
      type: variant.type,
      price: variant.price,
    };

    setCart((prevCart) => [...prevCart, item]);
  }

  // Remove one item from cart
  function removeFromCart(indexToRemove: number) {
    setCart((prevCart) =>
      prevCart.filter(
        (_, index) => index !== indexToRemove
      )
    );
  }

  // Clear entire cart
  function clearCart() {
    setCart([]);
  }

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

          {/* Pages with Header and Footer */}
          <Route
            path="/"
            element={<Layout cartCount={cart.length} />}
          >
            <Route path="/Home" element={<Home />} />

            <Route
              path="/Restaurants"
              element={<Restaurants />}
            />

            <Route
              path="/Cart"
              element={
                <Cart
                  cart={cart}
                  clearCart={clearCart}
                  removeFromCart={removeFromCart}
                />
              }
            />

            <Route
              path="/RestaurantDetailspage/:id"
              element={<RestaurantDetailspage />}
            />

            <Route
              path="/Fooddetail/:id"
              element={
                <Fooddetail addToCart={addToCart} />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

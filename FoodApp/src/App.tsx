import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Home from "./Home/Home";
import Layout from "./pages/Layout";
import RestaurantDetailspage from "./pages/RestaurantDetailspage";
import Restaurants from "./pages/Restaurants";
import Fooddetail from "./pages/Fooddetail";

export type CartItem = { id: number; name: string; image: string; type: string; price: number; quantity: number };
function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("foodit-cart") || "[]");
      return Array.isArray(stored) ? stored.map(item => ({ ...item, quantity: item.quantity || 1 })) : [];
    } catch { return []; }
  });
  useEffect(() => { localStorage.setItem("foodit-cart", JSON.stringify(cart)); }, [cart]);
  function addToCart(food: {id:number;name:string;image:string}, variant: {type:string;price:number}) {
    setCart(prev => {
      const found = prev.find(item => item.id === food.id && item.type === variant.type);
      return found ? prev.map(item => item.id === food.id && item.type === variant.type ? {...item, quantity: item.quantity + 1} : item) : [...prev, {...food, type: variant.type, price: variant.price, quantity: 1}];
    });
  }
  function removeFromCart(index: number) { setCart(prev => prev.filter((_, i) => i !== index)); }
  function changeQuantity(index: number, delta: number) { setCart(prev => prev.map((item, i) => i === index ? {...item, quantity: Math.max(0, item.quantity + delta)} : item).filter(item => item.quantity > 0)); }
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return <Routes>
    <Route path="/Login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/" element={<Layout cartCount={cartCount} />}>
      <Route index element={<Home />} />
      <Route path="Home" element={<Navigate to="/" replace />} />
      <Route path="Restaurants" element={<Restaurants />} />
      <Route path="Cart" element={<Cart cart={cart} clearCart={() => setCart([])} removeFromCart={removeFromCart} changeQuantity={changeQuantity} />} />
      <Route path="RestaurantDetailspage/:id" element={<RestaurantDetailspage />} />
      <Route path="Fooddetail/:id" element={<Fooddetail addToCart={addToCart} />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>;
}
export default App;
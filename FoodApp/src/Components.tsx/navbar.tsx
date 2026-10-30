
import { Link } from "react-router-dom";
import Search from "./Search";
import "./navbar.css";


type NavbarProps = {
  cartCount: number;
};

const Navbar = ({ cartCount }: NavbarProps) => {
  return (
    <div className="Navbar">
      <Search />

      <div className="Nav">
        <Link to="/home">Home</Link>
        <Link to="/Restaurants">Restaurant</Link>

        <Link to="/Cart" className="cart-link">
          Cart

          {cartCount > 0 && (
            <span className="cart-badge">
              {cartCount}
            </span>
          )}
        </Link>

        <div className="loginnav">
          <Link to="/Login">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


import type { CartItem } from "../App";
import "./Cart.css";

type CartProps = {
  cart: CartItem[];
  clearCart: () => void;
  removeFromCart: (index: number) => void;
};

const Cart = ({
  cart,
  clearCart,
  removeFromCart,
}: CartProps) => {

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-container">

        <div className="cart-header">
          <h1 className="cart-title">My Cart</h1>
          <span className="cart-count">
            {cart.length} Items
          </span>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <h2>Your cart is empty</h2>
            <p>Add some delicious food to get started.</p>
          </div>
        ) : (
          <>
            <div className="cart-table-wrapper">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Food</th>
                    <th>Variant</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index} className="cart-item">
                      <td className="cart-food">
                        <div className="cart-food-info">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="cart-food-image"
                          />
                          <span className="cart-food-name">
                            {item.name}
                          </span>
                        </div>
                      </td>

                      <td>
                        <span className="cart-variant">
                          {item.type}
                        </span>
                      </td>

                      <td className="cart-price">
                        ₹{item.price}
                      </td>

                      <td>
                        <button
                          type="button"
                          className="cart-remove-btn"
                          onClick={() => removeFromCart(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="cart-summary">
              <div className="cart-total">
                <span>Total Amount</span>
                <strong>₹{total}</strong>
              </div>

              <button
                type="button"
                className="cart-clear-btn"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Cart.css";

export default function Cart() {
  const { cart, setCart, products, user } = useContext(AppContext);
  const [orderValue, setOrderValue] = useState(0);
  const Navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setOrderValue(
      products.reduce((sum, value) => {
        return sum + value.price * (cart[value._id] || 0);
      }, 0)
    );
  }, [cart, products]);

  const increment = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrement = (id) => {
    if (cart[id] > 1) {
      setCart((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    } else {
      const newCart = { ...cart };
      delete newCart[id];
      setCart(newCart);
    }
  };

  const placeOrder = async () => {
    const url = `${API}/orders/new`;
    await axios.post(url, { email: user.email, orderValue });
    setCart({});
    Navigate("/orders");
  };

  const loginToOrder = () => {
    Navigate("/login");
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">My Cart</h2>
      {Object.keys(cart).length > 0 ? (
        <div className="cart-items">
          {products
            .filter((value) => cart[value._id])
            .map((value) => (
              <div key={value._id} className="cart-item">
                <img
                  src={value.imageUrl}
                  alt={value.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{value.name}</h3>
                  <p className="cart-item-price">Unit Price: ${value.price.toFixed(2)}</p>
                  <p className="cart-item-total">Total: ${(value.price * cart[value._id]).toFixed(2)}</p>
                  <div className="cart-item-controls">
                    <button
                      onClick={() => decrement(value._id)}
                      className="cart-control-button"
                    >
                      -
                    </button>
                    <span className="cart-quantity">{cart[value._id]}</span>
                    <button
                      onClick={() => increment(value._id)}
                      className="cart-control-button"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          <hr className="cart-divider" />
          <h3 className="cart-total">Order Total: ${orderValue.toFixed(2)}</h3>
          {user.name ? (
            <button onClick={placeOrder} className="cart-order-button">
              Place Order
            </button>
          ) : (
            <button onClick={loginToOrder} className="cart-login-button">
              Login to Order
            </button>
          )}
        </div>
      ) : (
        <p className="cart-empty">Your cart is empty.</p>
      )}
    </div>
  );
}

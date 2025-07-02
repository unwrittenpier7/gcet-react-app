import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
import "./Product.css";

export default function Product() {
  const { user, products, setProducts, cart, setCart } = useContext(AppContext);
  const API = import.meta.env.VITE_API_URL;

  const fetchProducts = async () => {
    const res = await axios.get(`${API}/products/all`);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <div className="product-container">
      <h3 className="product-title">Welcome {user.name || "Guest"}!</h3>
      <div className="product-grid">
        {products && products.length > 0 ? (
          products.map((value) => (
            <div key={value._id} className="product-card">
              <img
                src={`https://picsum.photos/300/200?random=${value.pid}`}
                alt={value.name}
                className="product-image"
              />
              <div className="product-details">
                <h3 className="product-name">{value.name}</h3>
                <h4 className="product-price">${value.price.toFixed(2)}</h4>
                <button
                  onClick={() => addToCart(value.pid)}
                  className="product-button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="product-empty">No products available.</p>
        )}
      </div>
    </div>
  );
}
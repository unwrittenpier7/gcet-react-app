import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
import "./Product.css";

export default function Product() {
  const { user, products, setProducts, cart, setCart } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`${API}/products/all`);
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const isInCart = (id) => cart[id] > 0;

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-container">
      <h3 className="product-title">Welcome {user.name || "Guest"}!</h3>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="product-search"
      />

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((value) => (
            <div key={value._id} className="product-card">
              <img
                src={value.imageUrl}
                alt={value.name}
                className="product-image"
                onClick={() => setSelectedProduct(value)}
                style={{ cursor: "pointer" }}
              />
              <div className="product-details">
                <h3 className="product-name">{value.name}</h3>
                <p className="product-description">{value.description}</p>
                <h4 className="product-price">${value.price.toFixed(2)}</h4>
                <button
                  onClick={() => addToCart(value._id)}
                  className="product-button"
                  disabled={isInCart(value._id)}
                >
                  {isInCart(value._id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="product-empty">No matching products found.</p>
        )}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={() => setSelectedProduct(null)}>×</span>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
            />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p><strong>Price:</strong> ${selectedProduct.price.toFixed(2)}</p>
            <button
              onClick={() => {
                addToCart(selectedProduct._id);
                setSelectedProduct(null);
              }}
              className="product-button"
              disabled={isInCart(selectedProduct._id)}
            >
              {isInCart(selectedProduct._id) ? "Already in Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

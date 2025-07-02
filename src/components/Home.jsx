import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <section className="home-hero">
        <h2 className="home-hero-title">Welcome to My Online Shop</h2>
        <p className="home-hero-text">
          Discover a wide range of products at unbeatable prices. Shop now and enjoy a seamless shopping experience!
        </p>
        <Link to="/products" className="home-hero-button">
          Shop Now
        </Link>
      </section>
      <section className="home-featured">
        <h3 className="home-featured-title">Featured Products</h3>
        <div className="home-featured-grid">
          <div className="home-product-card">
            <img
              src="https://picsum.photos/300/200?random=1"
              alt="Featured Product 1"
              className="home-product-image"
            />
            <div className="home-product-details">
              <h4 className="home-product-name">Sample Product 1</h4>
              <p className="home-product-price">$29.99</p>
            </div>
          </div>
          <div className="home-product-card">
            <img
              src="https://picsum.photos/300/200?random=2"
              alt="Featured Product 2"
              className="home-product-image"
            />
            <div className="home-product-details">
              <h4 className="home-product-name">Sample Product 2</h4>
              <p className="home-product-price">$49.99</p>
            </div>
          </div>
          <div className="home-product-card">
            <img
              src="https://picsum.photos/300/200?random=3"
              alt="Featured Product 3"
              className="home-product-image"
            />
            <div className="home-product-details">
              <h4 className="home-product-name">Sample Product 3</h4>
              <p className="home-product-price">$19.99</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
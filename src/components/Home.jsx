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
          {/* Laptop */}
          <div className="home-product-card">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
              alt="Laptop"
              className="home-product-image"
            />
            <div className="home-product-details">
              <h4 className="home-product-name">Laptop</h4>
              <p className="home-product-price">$1000</p>
              <p className="home-product-description">High-performance laptop with Intel i7 processor.</p>
            </div>
          </div>

          {/* Keyboard 
          /*{<div className="home-product-card">
            <img
              src="https://images.unsplash.com/photo-1555633519-514a83d2d510"
              alt="Keyboard"
              className="home-product-image"
            />
            <div className="home-product-details">
              <h4 className="home-product-name">Keyboard</h4>
              <p className="home-product-price">$75</p>
              <p className="home-product-description">Mechanical keyboard with RGB lighting.</p>
            </div>
          </div>} */}

          {/* Tablet */}
          <div className="home-product-card">
            <img
              src="https://images.unsplash.com/photo-1587829741301-dc798b83add3"
              alt="Tablet"
              className="home-product-image"
            />
            <div className="home-product-details">
              <h4 className="home-product-name">Tablet</h4>
              <p className="home-product-price">$400</p>
              <p className="home-product-description">Portable tablet perfect for reading and media consumption.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

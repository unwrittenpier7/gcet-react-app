import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const { user } = useContext(AppContext);
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">My Online Shop</h1>
        <nav className="header-nav">
          <Link to="/" className="header-link">Home</Link>
          <Link to="/products" className="header-link">Products</Link>
          <Link to="/cart" className="header-link">Cart</Link>
          <Link to="/orders" className="header-link">Orders</Link>
          <Link to="/about" className="header-link">About Us</Link>
          {user.token ? (
            <Link to="/logout" className="header-link">Logout</Link>
          ) : (
            <Link to="/login" className="header-link">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
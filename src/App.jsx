import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Product from "./components/Product";
import Cart from "./components/Cart";
import Order from "./components/Order";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Footer from "./components/Footer";

export const AppContext = React.createContext();

export default function App() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});

  // Restore cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Restore user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <Router>
      <AppContext.Provider
        value={{ cart, setCart, products, setProducts, user, setUser }}
      >
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Header />
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Order />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AppContext.Provider>
    </Router>
  );
}

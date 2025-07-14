import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Product from "./Product";
import Cart from "./Cart";
import Order from "./Order";
import Login from "./Login";
import Logout from "./Logout";
import Home from "./Home";
import About from "./About";
import Register from "./Register"; // ✅ Added Register route
import Footer from "./Footer";

export const AppContext = React.createContext();

export default function App() {
  // Global states
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});

  // ✅ Load cart from localStorage on startup
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // ✅ Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Load user from localStorage on startup
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // ✅ Save user to localStorage when it changes
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
              <Route path="/register" element={<Register />} /> {/* ✅ Register route */}
            </Routes>
          </main>
          <Footer />
        </div>
      </AppContext.Provider>
    </Router>
  );
}

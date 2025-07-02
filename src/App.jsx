import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Product from "./Product";
import Cart from "./Cart";
import Order from "./Order";
import Login from "./Login";
import Logout from "./Logout";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";

export const AppContext = React.createContext();

export default function App() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});

  return (
    <Router>
      <AppContext.Provider value={{ cart, setCart, products, setProducts, user, setUser }}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
            </Routes>
          </main>
          <Footer />
        </div>
      </AppContext.Provider>
    </Router>
  );
}
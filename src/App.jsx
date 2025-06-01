import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Product from "./assets/components/product.jsx";
import Cart from "./assets/components/cart.jsx";
import login from "./assets/components/login.jsx";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <header>
          <h1>Ecommerce Shop</h1>
          <Link to="/">Home</Link>-
          <Link to="/cart">Cart</Link>
          <hr />
        </header>

        <main>
          <Routes>
            <Route index element={<Product />} />
            <Route path="/" element={<Product/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
        </main>

        <footer>
          <hr />
          &copy; 2005. All rights Reserved.
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App
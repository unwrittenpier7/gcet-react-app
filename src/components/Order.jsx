import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
import "./Order.css";

export default function Order() {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AppContext);
  const API = import.meta.env.VITE_API_URL;

  const fetchOrders = async () => {
    const res = await axios.get(`${API}/orders/${user.email}`);
    setOrders(res.data);
  };

  useEffect(() => {
    if (user.email) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div className="order-container">
      <h2 className="order-title">My Orders</h2>
      {orders.length > 0 ? (
        <div className="order-list">
          {orders.map((value) => (
            <div key={value._id} className="order-item">
              <p className="order-id">Order ID: {value._id}</p>
              <p class31="order-email">Email: {value.email}</p>
              <p className="order-total">Total: ${value.orderValue.toFixed(2)}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="order-empty">No orders found.</p>
      )}
    </div>
  );
}
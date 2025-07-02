import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const { user, setUser } = useContext(AppContext);
  const [msg, setMsg] = useState("");
  const Navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async () => {
    try {
      const url = `${API}/users/login`;
      const found = await axios.post(url, user);

      if (found.data.email) {
        setUser(found.data);
        Navigate("/");
      } else {
        setMsg("Invalid User or Password");
      }
    } catch (error) {
      setMsg("Login failed. Please try again.");
      console.error(error);
    }
  };

  const goToRegister = () => {
    Navigate("/register");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="login-title">Login</h3>
        {msg && <div className="login-message">{msg}</div>}
        <div className="login-form">
          <input
            type="text"
            placeholder="Email address"
            className="login-input"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            onChange={(e) => setUser({ ...user, pass: e.target.value })}
          />
          <button onClick={handleSubmit} className="login-submit-button">
            Submit
          </button>
          <button onClick={goToRegister} className="login-register-button">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
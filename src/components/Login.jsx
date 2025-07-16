import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const { setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");
  const Navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async () => {
    try {
      const url = `${API}/users/login`;
      const res = await axios.post(url, { email, pass }); // or password: pass
      if (res.data.email) {
        setUser(res.data);
        Navigate("/");
      } else {
        setMsg("Invalid Email or Password");
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
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

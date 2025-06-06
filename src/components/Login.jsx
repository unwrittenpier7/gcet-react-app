import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const { users, user, setUser } = useContext(AppContext);
  const [msg, setMsg] = useState();
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
      <h3>Login</h3>
      {msg && <div className="message">{msg}</div>}
      <p>
        <input
          type="text"
          placeholder="Email address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <p>
        <button onClick={goToRegister}>Create Account</button>
      </p>
    </div>
  );
}

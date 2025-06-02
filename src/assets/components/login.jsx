import React, { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const { users, user, setUser } = useContext(AppContext);
  const [msg, setMsg] = useState();
  const Navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async () => {
    const url = `${API}/login`;
    try {
      const found = await axios.post(url, user);
      if (found.data.token) {
        setUser(found.data);
        localStorage.setItem("user", JSON.stringify(found.data));
        Navigate("/");
      } else {
        setMsg("Invalid User or Password");
      }
    } catch (error) {
      setMsg("Login failed. Check your API or credentials.");
    }
  };

  const goToRegister = () => {
    Navigate("/register");
  };

  return (
    <div style={{ margin: "30px" }}>
      <h3>Login</h3>
      {msg}
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

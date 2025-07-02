import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

export default function Logout() {
  const { setUser } = useContext(AppContext);
  const Navigate = useNavigate();

  useEffect(() => {
    setUser({});
    Navigate("/login");
  }, [setUser, Navigate]);

  return (
    <div className="logout-container">
      <p className="logout-text">Logging out...</p>
    </div>
  );
}
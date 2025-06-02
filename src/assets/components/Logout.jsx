import React, { useEffect, useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

export default function Logout() {
  const { setUser } = useContext(AppContext);
  const Navigate = useNavigate();

  useEffect(() => {
    setUser({});
    localStorage.removeItem("user");
    Navigate("/login");
  }, [setUser, Navigate]);

  return <div className="logout-container">Logging out...</div>;
}

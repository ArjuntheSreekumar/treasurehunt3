import React, { useState, useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./LoginPopup.css";

export const LoginPopup = ({ setShowLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated } = useContext(StoreContext); // Get auth state updater

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) {
      alert("Please enter your name and password.");
      return;
    }

    console.log("Logging in with:", { name, password });
    setIsAuthenticated(true); // Mark user as authenticated
    setShowLogin(false); // Close popup on successful login
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>Login</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <div className="login-popup-inputs">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

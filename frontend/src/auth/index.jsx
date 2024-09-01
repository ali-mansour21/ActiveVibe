import React, { useState } from "react";
import Login from "./components/Login"; // Adjust the path according to your structure
import Register from "./components/Register"; // Adjust the path according to your structure
import "./styles/index.css"; // Optional: Create CSS for additional styling

const Index = () => {
  const [currentView, setCurrentView] = useState("login"); // 'login' or 'register'

  // Handler to switch views
  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="index-container">
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${currentView === "login" ? "active" : ""}`}
          onClick={() => handleViewChange("login")}
        >
          Login
        </button>
        <button
          className={`toggle-button ${
            currentView === "register" ? "active" : ""
          }`}
          onClick={() => handleViewChange("register")}
        >
          Register
        </button>
      </div>

      <div className="view-container">
        {currentView === "login" && <Login />}
        {currentView === "register" && <Register />}
      </div>
    </div>
  );
};

export default Index;

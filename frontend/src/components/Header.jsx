/* eslint-disable react/prop-types */
import "../pages/Home/styles/header.css";
import logo from "../assets/logo/ticket.svg";
import { useLocation, useNavigate } from "react-router-dom";
const Header = ({ isAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img srcSet={logo} alt="" />
          <h1>Eventify</h1>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <button
                className={location.pathname === "/" ? "active" : ""}
                onClick={() => navigate("/")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={location.pathname === "/events" ? "active" : ""}
                onClick={() => navigate("/events")}
              >
                Events
              </button>
            </li>
            <li>
              <button
                className={location.pathname === "/about" ? "active" : ""}
                onClick={() => navigate("/about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={location.pathname === "/contact" ? "active" : ""}
                onClick={() => navigate("/contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        <div className="actions">
          {isAuthenticated ? (
            <>
              <button
                onClick={() => {
                  navigate("/profile");
                }}
                className=" btn"
              >
                Profile
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate("/auth");
                }}
                className="btn"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

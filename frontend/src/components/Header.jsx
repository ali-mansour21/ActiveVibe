/* eslint-disable react/prop-types */
import "../pages/styles/header.css";
import logo from "../assets/logo/ticket.svg";
const Header = ({ isAuthenticated }) => {
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="actions">
          {isAuthenticated ? (
            <>
              <button className="btn">Profile</button>
            </>
          ) : (
            <>
              <button className="btn">Login</button>
              <button className="btn">Sign Up</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

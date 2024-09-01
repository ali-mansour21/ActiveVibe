import { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/logo/ticket.svg";
import "../styles/login.css";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img srcSet={logo} alt="Eventify Logo" className="logo" />
        <h2>Discover tailored events.</h2>
        <p>Sign in for personalized recommendations today!</p>
      </div>
      <div className="login-right">
        <h2>Login</h2>
        <div className="social-buttons">
          <button className="social-login google">
            <FaGoogle className="social-icon" /> Login with Google
          </button>
          <button className="social-login facebook">
            <FaFacebookF className="social-icon" /> Login with Facebook
          </button>
        </div>
        <div className="divider">
          <span>OR</span>
        </div>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-mail Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your e-mail"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

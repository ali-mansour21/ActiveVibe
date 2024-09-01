import React, { useState } from "react";
import "../styles/register.css";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/logo/ticket.svg";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    date_of_birth: "",
    gender: "male",
    phone_number: "",
    emergency_number: "",
    nationality: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Navigate to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Navigate to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle final form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Registration Data:", formData);
    // Add your backend submission logic here
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <img srcSet={logo} alt="Eventify Logo" className="logo" />
        <h2>Discover tailored events.</h2>
        <p>Sign up for personalized recommendations today!</p>
      </div>
      <div className="register-right">
        <button className="close-button">&times;</button>
        <h2>{step === 1 ? "Create Account" : "Additional Information"}</h2>
        {step === 1 && (
          <div className="social-buttons">
            <button className="social-login google">
              <FaGoogle className="social-icon" /> Sign up with Google
            </button>
            <button className="social-login facebook">
              <FaFacebookF className="social-icon" /> Sign up with Facebook
            </button>
          </div>
        )}
        <div className="divider">
          <span>OR</span>
        </div>
        <form className="register-form" onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="button" className="next-button" onClick={nextStep}>
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="form-group">
                <label htmlFor="date_of_birth">Date of Birth</label>
                <input
                  type="date"
                  id="date_of_birth"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="phone_number">Phone Number</label>
                <input
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  placeholder="Enter phone number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="emergency_number">Emergency Number</label>
                <input
                  type="text"
                  id="emergency_number"
                  name="emergency_number"
                  placeholder="Enter emergency contact number"
                  value={formData.emergency_number}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="nationality">Nationality</label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  placeholder="Enter nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="button-group">
                <button
                  type="button"
                  className="prev-button"
                  onClick={prevStep}
                >
                  Back
                </button>
                <button type="submit" className="submit-button">
                  Create Account
                </button>
              </div>
            </>
          )}
        </form>
        {step === 1 && (
          <p className="sign-in-text">
            Already have an account?{" "}
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Log In
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;

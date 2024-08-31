// src/components/ProfileScreen.jsx
import { useState, useRef } from "react";
import "../styles/profile.css";
import Header from "./Header";

const ProfileScreen = () => {
  // State for form data
  const [formData, setFormData] = useState({
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    password: "password123",
    website: "",
    company: "",
    phone_number: "123-456-7890",
    address: "",
    city: "",
    country: "",
    pincode: "",
    member_photo: "", // Default photo path or empty
  });

  // Ref for the file input to trigger file selection
  const fileInputRef = useRef(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Trigger file input when the profile photo is clicked
  const handlePhotoClick = () => {
    fileInputRef.current.click(); // Triggering the input click
  };

  // Handle profile photo file change and convert to base64
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setFormData({
          ...formData,
          member_photo: base64String,
        });
        console.log("Base64 String:", base64String); // Log the base64 string to console
      };
      reader.readAsDataURL(file); // Convert file to base64 string
    }
  };

  return (
    <>
      <Header isAuthenticated={true} />
      <div className="profile-screen">
        <div className="profile-sidebar">
          <h3>Account Settings</h3>
          <ul>
            <li className="active">Account Info</li>
            <li>Change Email</li>
            <li>Password</li>
          </ul>
        </div>
        <div className="profile-content">
          <h2>Account Information</h2>
          <form>
            <div className="profile-photo-section">
              <img
                src={formData.member_photo || "/path-to-default-avatar.png"}
                alt="Profile"
                className="profile-photo"
                onClick={handlePhotoClick}
                style={{ cursor: "pointer" }}
              />
              <input
                type="file"
                ref={fileInputRef}
                name="member_photo"
                onChange={handlePhotoChange}
                accept="image/*"
                style={{ display: "none" }}
              />
              <p>Click the photo to change</p>
            </div>

            <h3>Profile Information</h3>
            <div className="form-group">
              <label htmlFor="first_name">First Name:</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Enter first name"
                value={formData.first_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name:</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Enter last name"
                value={formData.last_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website:</label>
              <input
                type="text"
                id="website"
                name="website"
                placeholder="Enter website"
                value={formData.website}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter company name"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>

            <h3>Contact Details</h3>
            <p className="contact-details-note">
              These details are private and only used to contact you for
              ticketing or prizes.
            </p>
            <div className="form-group">
              <label htmlFor="phone_number">Phone Number:</label>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                placeholder="Enter phone number"
                value={formData.phone_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City/Town:</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Enter country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode:</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                placeholder="Enter pincode"
                value={formData.pincode}
                onChange={handleInputChange}
              />
            </div>

            <div className="button-group">
              <button type="submit" className="save-profile-button">
                Save My Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;

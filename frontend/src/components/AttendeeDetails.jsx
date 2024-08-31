/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/attendee-details.css";
const AttendeeDetails = ({ attendee, onProceed, onBack, onAttendeeChange }) => {
  const [details, setDetails] = useState(attendee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleProceed = () => {
    onAttendeeChange(details);
    onProceed();
  };

  return (
    <div className="attendee-details">
      <h2>Ticket Booking / Attendee Details</h2>
      <div className="details-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={details.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={details.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={details.phone}
          onChange={handleChange}
        />
      </div>
      <div className="attendee-buttons">
        <button className="attendee-back-button" onClick={onBack}>
          Back
        </button>
        <button className="attendee-proceed-button" onClick={handleProceed}>
          Continue to Checkout
        </button>
      </div>
    </div>
  );
};

export default AttendeeDetails;

/* eslint-disable react/prop-types */
import "../styles/event-final.css";
import logo from "../../../../../assets/landing/Hero.png";
const EventFinal = ({ formData, onBack }) => {
  return (
    <div className="event-final-container">
      <div className="event-banner">
        <img src={logo} alt="Event Banner" />
      </div>

      <h2 className="event-title">{formData.title}</h2>

      <div className="event-details">
        <div className="event-info">
          <h3>Date and Time</h3>
          <p>📅 {formData.date}</p>
          <p>
            🕒 {formData.start_time} - {formData.end_time}
          </p>
        </div>

        <div className="ticket-info">
          <h3>Ticket Information</h3>
          <p>🎟 Ticket Type: {formData.ticketType || "Price/Ticket"}</p>
        </div>
      </div>

      <div className="event-location">
        <h3>Location</h3>
        <p>{formData.location}</p>
        <div className="map-placeholder">
          {" "}
          {/* Add your map component or an image here */}
          <img src="/path/to/map-placeholder.png" alt="Map" />
        </div>
      </div>

      <div className="event-description">
        <h3>Event Description</h3>
        <p>
          {formData.additionalInfo ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
        </p>
      </div>

      <div className="action-buttons">
        <button onClick={onBack} className="event-final-back-button">
          Back
        </button>
        <div>
          <button onClick={onBack} className="event-final-save-button">
            Save for Later
          </button>
          <button className="event-final-submit-button">Publish Event</button>
        </div>
      </div>
    </div>
  );
};

export default EventFinal;

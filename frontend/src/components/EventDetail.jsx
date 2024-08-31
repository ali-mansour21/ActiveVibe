import "../styles/eventdetail.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import { useState } from "react";
import TicketBooking from "./TicketBooking";
const EventDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showBooking, setShowBooking] = useState(false);
  const event = location.state?.event;

  if (!event) {
    navigate("/");
    return null;
  }

  return (
    <>
      <Header />
      <div className="event-detail">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className="event-detail-header">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="event-detail-header-image"
          />
          <div className="event-detail-title-container">
            <h1 className="event-detail-title">{event.title}</h1>
            <button
              onClick={() => setShowBooking(true)}
              className="buy-tickets-button"
            >
              <FontAwesomeIcon icon={faTicket} className="ticket" />
              Buy Tickets
            </button>
            {showBooking && (
              <TicketBooking onClose={() => setShowBooking(false)} />
            )}
          </div>
        </div>
        <div className="event-detail-info">
          <div className="event-detail-date-time">
            <h3>Date and Time</h3>
            <div>
              <FontAwesomeIcon icon={faCalendarDays} className="calander" />
              <p>{event.month}</p>
              <p>{event.day}</p>
              <p>{event.time}</p>
            </div>
          </div>
          <div className="event-detail-location">
            <h3>Location</h3>
            <div>
              <FontAwesomeIcon icon={faLocationDot} className="location" />
              <p>{event.location}</p>
            </div>
            <img
              src="/path-to-map-image/map.png"
              alt="Map"
              className="event-detail-map"
            />
          </div>
        </div>
        <div className="event-detail-description">
          <h3>Event Description</h3>
          <p>{event.description}</p>
        </div>
      </div>
    </>
  );
};

export default EventDetail;

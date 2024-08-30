import "../styles/eventdetail.css";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
const EventDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
            <button className="buy-tickets-button">Buy Tickets</button>
          </div>
        </div>
        <div className="event-detail-info">
          <div className="event-detail-date-time">
            <h3>Date and Time</h3>
            <div>
              <p>{event.month}</p>
              <p>{event.day}</p>
            </div>
            <p>{event.time}</p>
          </div>
          <div className="event-detail-location">
            <h3>Location</h3>
            <p>{event.location}</p>
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

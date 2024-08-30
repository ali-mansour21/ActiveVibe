import React from "react";
import "../styles/eventdetail.css";
const EventDetail = ({ event }) => {
  return (
    <div className="event-detail">
      <button className="back-button" onClick={() => window.history.back()}>
        ← Back
      </button>
      <div className="event-header">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="event-header-image"
        />
        <div className="event-title-container">
          <h1 className="event-title">{event.title}</h1>
          <button className="bookmark-button">☆</button> {/* Bookmark Icon */}
          <button className="buy-tickets-button">Buy Tickets</button>
        </div>
      </div>

      <div className="event-info">
        <div className="event-date-time">
          <h3>Date and Time</h3>
          <p>{event.date}</p>
          <p>{event.time}</p>
          <button className="calendar-button">+ Add to Calendar</button>
        </div>

        <div className="event-location">
          <h3>Location</h3>
          <p>{event.location}</p>
          <img
            src="/path-to-map-image/map.png"
            alt="Map"
            className="event-map"
          />
        </div>

        <div className="event-host">
          <h3>Hosted by</h3>
          <div className="host-info">
            <img
              src="/path-to-host-image/host.png"
              alt="Host"
              className="host-image"
            />
            <div>
              <p>{event.host}</p>
              <button className="follow-button">Follow</button>
            </div>
          </div>
        </div>
      </div>

      <div className="event-description">
        <h3>Event Description</h3>
        <p>{event.description}</p>
      </div>

      <div className="event-tags">
        <h3>Tags</h3>
        <div className="tags-container">
          {event.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;

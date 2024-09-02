import "../styles/eventcard.css";
// eslint-disable-next-line react/prop-types
const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={onClick}>
      <img src={event?.imageUrl} alt={event?.title} className="event-image" />
      <div className="event-details">
        <div className="event-date">
          <span className="event-month">{event?.month}</span>
          <span className="event-day">{event?.day}</span>
        </div>
        <div className="event-info">
          <h4 className="event-title">{event?.title}</h4>
          <p className="event-location">{event?.location}</p>
          <p className="event-time">{event?.time}</p>
          <p className="event-price">{event?.price}</p>
        </div>
      </div>
      <div className="event-category">{event?.category}</div>
    </div>
  );
};

export default EventCard;

import "../styles/eventcard.css";
const EventCard = ({ event, onClick }) => {
  return (
    <div className="online-event-card" onClick={onClick}>
      <img
        src={event.imageUrl}
        alt={event.title}
        className="online-event-image"
      />
      <div className="online-event-details">
        <div className="online-event-category">{event.category}</div>
        <h3 className="online-event-title">{event.title}</h3>
        <p className="online-event-date-location">
          {event.date} | {event.location}
        </p>
        <p className="online-event-time">{event.time}</p>
        <p className="online-event-price">{event.price}</p>
      </div>
    </div>
  );
};

export default EventCard;

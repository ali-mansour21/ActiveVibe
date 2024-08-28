import "../styles/eventcard.css";
const EventCard = ({ title, date, location, price, category, imageUrl }) => {
  return (
    <div className="event-card">
      <img src={imageUrl} alt={title} className="event-image" />
      <div className="event-details">
        <div className="event-category">{category}</div>
        <h3 className="event-title">{title}</h3>
        <p className="event-date-location">
          {date} | {location}
        </p>
        <p className="event-price">{price}</p>
      </div>
    </div>
  );
};

export default EventCard;

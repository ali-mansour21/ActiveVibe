import "../styles/eventcard.css";
const EventCard = ({ title, date, location, price, category, imageUrl }) => {
  return (
    <div className="online-event-card">
      <img src={imageUrl} alt={title} className="online-event-image" />
      <div className="online-event-details">
        <div className="online-event-category">{category}</div>
        <h3 className="online-event-title">{title}</h3>
        <p className="online-event-date-location">
          {date} | {location}
        </p>
        <p className="online-event-price">{price}</p>
      </div>
    </div>
  );
};

export default EventCard;

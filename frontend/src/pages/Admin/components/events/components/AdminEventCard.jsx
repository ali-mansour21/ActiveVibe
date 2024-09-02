/* eslint-disable react/prop-types */
import "../styles/admin-event-card.css";
const AdminEventCard = ({ event, onClick, onEdit, onDelete }) => {
  return (
    <div className="admin-event-card">
      <img
        srcSet={event?.imageUrl}
        alt={event?.title}
        className="admin-event-image"
        onClick={onClick}
      />
      <div className="admin-event-details">
        <div className="admin-event-date">
          <span className="admin-event-month">{event?.month}</span>
          <span className="admin-event-day">{event?.day}</span>
        </div>
        <div className="admin-event-info">
          <h4 className="admin-event-title">{event?.title}</h4>
          <p className="admin-event-location">{event?.location}</p>
          <p className="admin-event-time">{event?.time}</p>
          <p className="admin-event-price">{event?.price}</p>
        </div>
      </div>
      <div className="admin-event-category">{event?.category}</div>

      {/* Edit and Delete Buttons */}
      <div className="admin-event-actions">
        <button className="admin-edit-button" onClick={() => onEdit(event)}>
          Edit
        </button>
        <button
          className="admin-delete-button"
          onClick={() => onDelete(event.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminEventCard;

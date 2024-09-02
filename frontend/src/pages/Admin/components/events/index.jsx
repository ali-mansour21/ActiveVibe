import { useState } from "react";
import "./styles/index.css";
import logo from "../../../../assets/landing/Hero.png";
import AdminEventCard from "./components/AdminEventCard";
import EventForm from "./components/EventForm";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([
    {
      id: 13,
      title: "Lakeside Camping at Pawna",
      month: "NOV",
      day: "25 - 26",
      location: "Adventure Geek - Explore the Unexplore...",
      time: "8:30 AM - 7:30 PM",
      price: "INR 1,400",
      interested: "14",
      imageUrl: logo,
      category: "Travel & Adventure",
    },
    {
      id: 14,
      title: "Sound Of Christmas 2023",
      month: "DEC",
      day: "02",
      location: "Bal Gandharva Rang Mandir, Mumbai",
      time: "6:30 PM - 9:30 PM",
      price: "INR 499",
      interested: "16",
      imageUrl: logo,
      category: "Cultural & Arts",
    },
  ]);

  // Handle event addition (this is just a placeholder, no modal)
  const handleAddEvent = () => {
    navigate("/add-event");
  };
  const handleCloseForm = () => {
    setShowEventForm(false);
  };

  // Handle event edit
  const handleEditEvent = (event) => {
    alert(`Edit Event: ${event.title}`);
    // Implement edit logic here
  };

  // Handle event delete
  const handleDeleteEvent = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (confirmDelete) {
      setEvents(events.filter((event) => event.id !== id));
    }
  };

  return (
    <div className="admin-event-page">
      <h2 className="admin-event-title">Events</h2>
      <button className="admin-event-add-button" onClick={handleAddEvent}>
        Add New Event
      </button>
      <div className="admin-event-grid">
        {events.map((event) => (
          <AdminEventCard
            key={event.id}
            event={event}
            onEdit={handleEditEvent}
            onDelete={handleDeleteEvent}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;

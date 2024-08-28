import EventCard from "./EventCard";
import "../styles/eventsection.css";
import logo from "../../assets/landing/Hero.png";
const events = [
  {
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
  {
    title: "Meet the Royal College of Art in Mumbai 2023",
    month: "DEC",
    day: "02",
    location: "Sofitel Mumbai BKC, Mumbai",
    time: "10 AM - 5 PM",
    price: "FREE",
    interested: "",
    imageUrl: logo,
    category: "Educational & Business",
  },
  {
    title: "Meet the Royal College of Art in Mumbai 2023",
    month: "DEC",
    day: "02",
    location: "Sofitel Mumbai BKC, Mumbai",
    time: "10 AM - 5 PM",
    price: "FREE",
    interested: "",
    imageUrl: logo,
    category: "Educational & Business",
  },
  {
    title: "Meet the Royal College of Art in Mumbai 2023",
    month: "DEC",
    day: "02",
    location: "Sofitel Mumbai BKC, Mumbai",
    time: "10 AM - 5 PM",
    price: "FREE",
    interested: "",
    imageUrl: logo,
    category: "Educational & Business",
  },
  {
    title: "Meet the Royal College of Art in Mumbai 2023",
    month: "DEC",
    day: "02",
    location: "Sofitel Mumbai BKC, Mumbai",
    time: "10 AM - 5 PM",
    price: "FREE",
    interested: "",
    imageUrl: logo,
    category: "Educational & Business",
  },
];

const EventsSection = () => {
  return (
    <div className="events-section">
      <h2>Popular Events in Mumbai</h2>
      <div className="event-filters">
        <button>All</button>
        <button>Today</button>
        <button>Tomorrow</button>
        <button>This Weekend</button>
        <button>Free</button>
      </div>
      <div className="events-grid">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      <button className="see-more-button">See More</button>
    </div>
  );
};

export default EventsSection;

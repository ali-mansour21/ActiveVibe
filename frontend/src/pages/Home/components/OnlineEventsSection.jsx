import EventCard from "./EventCard";
import "../styles/onlineeventsection.css";
import "../styles/eventcard.css";
import logo from "../../../assets/landing/Hero.png";

const onlineEvents = [
  {
    title: "The Road to Jobs and Internships: Starting with LinkedIn",
    month: "JAN",
    day: "13",
    location: "Online",
    time: "6 PM - 7:30 PM",
    price: "INR 49",
    interested: "21",
    imageUrl: logo,
    category: "Educational & Business",
  },
  {
    title: "Online Zumba Dance Fitness Class over Zoom",
    month: "NOV",
    day: "29",
    location: "Online",
    time: "7 PM - 8 PM",
    price: "CAD 7",
    interested: "",
    imageUrl: logo,
    category: "Sports & Fitness",
  },
  {
    title: "Easy Book Folding: Christmas Edition",
    month: "DEC",
    day: "12",
    location: "Online",
    time: "4 PM - 5:30 PM",
    price: "FREE",
    interested: "10",
    imageUrl: logo,
    category: "Cultural & Arts",
  },
  {
    title: "Voices from the Rome Synod: An Evening with Austen Ivereigh",
    month: "DEC",
    day: "14",
    location: "Online",
    time: "1 PM - 2 PM",
    price: "FREE",
    interested: "37",
    imageUrl: logo,
    category: "Cultural & Arts",
  },
  {
    title: "HackerX - Zurich (Full-Stack) 11/29 (Virtual)",
    month: "NOV",
    day: "29",
    location: "Online",
    time: "11:30 AM - 1:30 PM",
    price: "USD 0 - 50",
    interested: "16",
    imageUrl: logo,
    category: "Technology & Innovation",
  },
  {
    title: "FRIENDS OF THE METAVERSE: Season of Innovation 2023",
    month: "DEC",
    day: "07",
    location: "Online",
    time: "10:30 AM - 5 PM",
    price: "USD 0 - 150",
    interested: "10",
    imageUrl: logo,
    category: "Technology & Innovation",
  },
  // Add more events as needed...
];
const OnlineEventsSection = () => {
  return (
    <div className="online-events-section">
      <h2>Discover Best of Online Events</h2>
      <div className="online-events-grid">
        {onlineEvents?.map((event, index) => (
          <div key={index}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
      <button className="see-more-button">See More</button>
    </div>
  );
};

export default OnlineEventsSection;

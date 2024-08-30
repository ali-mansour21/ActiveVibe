import EventCard from "../components/EventCard";
import "../styles/eventlisting.css";
import logo from "../../../assets/landing/Hero.png";
const EventListing = () => {
  const events = [
    {
      title: "Delhi 6 - Traditional Food from Delhi Street",
      date: "Nov 23 - 29",
      location: "Chengalpattu, India",
      price: "INR 1200",
      category: "Food & Drink",
      imageUrl: logo,
    },
    {
      title: "Delhi 6 - Traditional Food from Delhi Street",
      date: "Nov 23 - 29",
      location: "Chengalpattu, India",
      price: "INR 1200",
      category: "Food & Drink",
      imageUrl: logo,
    },
    {
      title: "Delhi 6 - Traditional Food from Delhi Street",
      date: "Nov 23 - 29",
      location: "Chengalpattu, India",
      price: "INR 1200",
      category: "Food & Drink",
      imageUrl: logo,
    },
    {
      title: "Startup Talks -Innovative event for founders & startups",
      date: "Dec 17",
      location: "New Delhi, India",
      price: "FREE",
      category: "Educational & Business",
      imageUrl: logo,
    },
    {
      title: "Startup Talks -Innovative event for founders & startups",
      date: "Dec 17",
      location: "New Delhi, India",
      price: "FREE",
      category: "Educational & Business",
      imageUrl: logo,
    },
    {
      title: "Startup Talks -Innovative event for founders & startups",
      date: "Dec 17",
      location: "New Delhi, India",
      price: "FREE",
      category: "Educational & Business",
      imageUrl: logo,
    },
  ];

  return (
    <div className="event-listing">
      <aside className="filters">
        <h3>Filters</h3>
        <div className="filter-group">
          <h4>Price</h4>
          <label>
            <input type="checkbox" /> Free
          </label>
          <label>
            <input type="checkbox" /> Paid
          </label>
        </div>
        <div className="filter-group">
          <h4>Date</h4>
          <label>
            <input type="checkbox" /> Today
          </label>
          <label>
            <input type="checkbox" /> Tomorrow
          </label>
          <label>
            <input type="checkbox" /> This Week
          </label>
        </div>
        <div className="filter-group">
          <h4>Category</h4>
          <label>
            <input type="checkbox" /> Adventure Travel
          </label>
          <label>
            <input type="checkbox" /> Art Exhibitions
          </label>
          <label>
            <input type="checkbox" /> Auctions & Fundraisers
          </label>
        </div>
      </aside>
      <div className="event-cards-container">
        {events?.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventListing;

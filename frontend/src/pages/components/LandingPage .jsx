import "../styles/landing.css";
const LandingPage = () => {
  return (
    <div className="banner">
      <h1>Don't miss out!</h1>
      <p>
        Explore the <span className="highlight">vibrant events</span> happening
        locally and globally.
      </p>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Events, Categories, Location..."
          className="search-input"
        />
        <button className="location-button">
          <i className="fa fa-map-marker" aria-hidden="true"></i> Mumbai
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

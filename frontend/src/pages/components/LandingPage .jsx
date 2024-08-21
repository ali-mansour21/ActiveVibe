import "../styles/landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const LandingPage = () => {
  return (
    <div className="banner">
      <h1>Don't miss out!</h1>
      <p>
        Explore the <span className="highlight">vibrant events</span> happening
        locally and globally.
      </p>
      <div className="search-bar">
        <div className="search-input-container">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input
            type="text"
            placeholder="Search Events, Categories, Location..."
            className="search-input"
          />
        </div>
        <button className="location-button">
          <FontAwesomeIcon icon={faLocationDot} className="location-icon" />{" "}
          Mumbai <FontAwesomeIcon icon={faCaretDown} className="list-icon" />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

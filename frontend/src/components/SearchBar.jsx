import { FaSearch, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import "../styles/searchbar.css";
const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <h2>Explore a world of events. Find what excites you!</h2>
      <div className="search-bar">
        <div className="search-input-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Sky, Swim,..."
            className="search-input"
          />
          <FaTimes className="clear-icon" />
        </div>
        <div className="location-container">
          <FaMapMarkerAlt className="location-icon" />
          <select className="location-select">
            <option value="Beirut">Beirut</option>
            <option value="Beirut">Beirut</option>
            <option value="Beirut">Beirut</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

import "../styles/guideregistrationbanner.css";

const GuideRegistrationBanner = () => {
  return (
    <div className="guide-registration-banner">
      <div className="guide-banner-content">
        <div className="guide-text">
          <h2>Register to Become a Guide with Us</h2>
          <p>
            Have expertise in guiding events, activities, or experiences? Join
            our team and share your knowledge by becoming a guide with us.
          </p>
        </div>
        <button className="register-guide-button">
          Register Now <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default GuideRegistrationBanner;

import "../styles/curatedeventsbanner.css";
const CuratedEventsBanner = () => {
  return (
    <div className="curated-events-banner">
      <div className="banner-content">
        <h2>Events specially curated for you!</h2>
        <p>
          Get event suggestions tailored to your interests! Don't let your
          favorite events slip away.
        </p>
        <button className="get-started-button">
          Get Started <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default CuratedEventsBanner;

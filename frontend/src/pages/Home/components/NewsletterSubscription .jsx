import "../styles/newslettersubscription.css";
const NewsletterSubscription = () => {
  return (
    <div className="newsletter-subscription">
      <div className="newsletter-content">
        <h2>Subscribe to our Newsletter</h2>
        <p>
          Receive our weekly newsletter & updates with new events from your
          favourite organizers & venues.
        </p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your e-mail address"
            className="newsletter-input"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;

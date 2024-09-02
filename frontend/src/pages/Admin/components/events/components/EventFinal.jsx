/* eslint-disable react/prop-types */

const EventFinal = ({ formData }) => {
  return (
    <div className="admin-step">
      <h3>Step 4: Review Your Event</h3>
      <div>
        <p>Title: {formData.title}</p>
        <p>Date: {formData.date}</p>
        <p>Time: {formData.time}</p>
        <p>Location: {formData.location}</p>
        <p>Latitude: {formData.latitude}</p>
        <p>Longitude: {formData.longitude}</p>
        <p>Additional Information: {formData.additionalInfo}</p>
        <div>
          <img src={formData.banner} alt="Event Banner" />
        </div>
      </div>
      <button onClick={onBack} className="admin-back-button">
        Back
      </button>
      <button className="admin-submit-button">Submit</button>
    </div>
  );
};

export default EventFinal;

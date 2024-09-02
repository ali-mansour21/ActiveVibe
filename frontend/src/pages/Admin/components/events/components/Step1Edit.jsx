/* eslint-disable react/prop-types */

const Step1Edit = ({ formData, onChange, onNext }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="admin-step">
      <h3>Step 1: Event Details</h3>

      <div className="admin-form-grid">
        {/* Event Title */}
        <div className="admin-form-group">
          <label htmlFor="title">Event Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="admin-input"
          />
        </div>

        {/* Start Date */}
        <div className="admin-form-group">
          <label htmlFor="start_date">Start Date</label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            value={formData.start_date}
            onChange={handleInputChange}
            required
            className="admin-input"
          />
        </div>

        {/* Start Time */}
        <div className="admin-form-group">
          <label htmlFor="start_time">Start Time</label>
          <input
            type="time"
            id="start_time"
            name="start_time"
            value={formData.start_time}
            onChange={handleInputChange}
            required
            className="admin-input"
          />
        </div>

        {/* End Time */}
        <div className="admin-form-group">
          <label htmlFor="end_time">End Time</label>
          <input
            type="time"
            id="end_time"
            name="end_time"
            value={formData.end_time}
            onChange={handleInputChange}
            required
            className="admin-input"
          />
        </div>

        {/* Location */}
        <div className="admin-form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
            className="admin-input"
          />
        </div>

        {/* Latitude */}
        <div className="admin-form-group">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="text"
            id="latitude"
            name="latitude"
            value={formData.latitude}
            onChange={handleInputChange}
            required
            className="admin-input"
          />
        </div>

        {/* Longitude */}
        <div className="admin-form-group">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="text"
            id="longitude"
            name="longitude"
            value={formData.longitude}
            onChange={handleInputChange}
            required
            className="admin-input"
          />
        </div>

        {/* Additional Information */}
        <div className="admin-form-group-full">
          <label htmlFor="additionalInfo">Additional Information</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            className="admin-input"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <button onClick={onNext} className="admin-next-button">
        Next
      </button>
    </div>
  );
};
export default Step1Edit;

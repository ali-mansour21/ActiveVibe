/* eslint-disable react/prop-types */

const Step2Banner = ({ formData, onChange, onNext, onBack }) => {
  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      onChange("banner", reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="admin-step">
      <h3>Step 2: Upload Banner</h3>
      <input type="file" onChange={handleBannerChange} />
      <div className="banner-preview">
        {formData.banner && <img src={formData.banner} alt="Banner Preview" />}
      </div>
      <button onClick={onBack} className="admin-back-button">
        Back
      </button>
      <button onClick={onNext} className="admin-next-button">
        Next
      </button>
    </div>
  );
};

export default Step2Banner;

/* eslint-disable react/prop-types */
const StepIndicator = ({ currentStep }) => {
  const steps = ["Edit", "Banner", "Ticketing", "Review"];

  return (
    <div className="step-indicator-container">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index + 1 <= currentStep ? "active" : ""}`}
        >
          <span className="step-circle"></span>
          <span className="step-label">{step}</span>
          {index < steps.length - 1 && <span className="step-line"></span>}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;

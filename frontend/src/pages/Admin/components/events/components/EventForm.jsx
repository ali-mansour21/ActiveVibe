import { useState } from "react";
import "../styles/event-form.css";
import Step1Edit from "./Step1Edit";
import Step2Banner from "./Step2Banner";
import Step3Ticketing from "./Step3Ticketing";
import EventFinal from "./EventFinal";
import StepIndicator from "./StepIndicator";
const EventForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    start_date: "",
    start_time: "",
    end_time: "",
    location: "",
    latitude: "",
    longitude: "",
    additionalInfo: "",
    banner: "",
    tickets: [],
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="event-form-container">
      <h2>Create a New Event</h2>
      <StepIndicator currentStep={step} />
      <div className="event-form-steps">
        {step === 1 && (
          <Step1Edit
            formData={formData}
            onChange={handleChange}
            onNext={handleNext}
          />
        )}
        {step === 2 && (
          <Step2Banner
            formData={formData}
            onChange={handleChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 3 && (
          <Step3Ticketing
            formData={formData}
            onChange={handleChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 4 && <EventFinal formData={formData} onBack={handleBack} />}
      </div>
    </div>
  );
};

export default EventForm;

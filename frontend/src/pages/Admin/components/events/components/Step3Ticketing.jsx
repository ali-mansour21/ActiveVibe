/* eslint-disable react/prop-types */

import React from "react";

const Step3Ticketing = ({ formData, onChange, onNext, onBack }) => {
  // Logic to handle ticket addition can go here

  return (
    <div className="admin-step">
      <h3>Step 3: Ticketing Options</h3>
      {/* Add ticketing fields */}
      <button onClick={onBack} className="admin-back-button">
        Back
      </button>
      <button onClick={onNext} className="admin-next-button">
        Next
      </button>
    </div>
  );
};

export default Step3Ticketing;

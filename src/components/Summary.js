import React from "react";
import "./Summary.css";

const Summary = ({ formData }) => {
  return (
    <div className="summary-container">
      <h3>Registration Summary</h3>
      <div className="summary-item">
        <span className="summary-label">Name:</span> {formData.name}
      </div>
      <div className="summary-item">
        <span className="summary-label">Email:</span> {formData.email}
      </div>
      <div className="summary-item">
        <span className="summary-label">Age:</span> {formData.age}
      </div>
      <div className="summary-item">
        <span className="summary-label">Attending with a guest:</span>{" "}
        {formData.attendingWithGuest ? "Yes" : "No"}
      </div>
      {formData.attendingWithGuest && (
        <div className="summary-item">
          <span className="summary-label">Guest Name:</span>{" "}
          {formData.guestName}
        </div>
      )}
    </div>
  );
};

export default Summary;

import { useState } from "react";
import SelectTickets from "./SelectTickets";
import AttendeeDetails from "./AttendeeDetails";
import OrderSummary from "./OrderSummary";
import "../styles/ticketbooking.css";
// eslint-disable-next-line react/prop-types
const TicketBooking = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [tickets, setTickets] = useState([
    { type: "Standard Ticket", quantity: 0, price: 200 },
    { type: "VIP Ticket", quantity: 0, price: 500 },
  ]);
  const [attendee, setAttendee] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleProceed = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleTicketChange = (updatedTickets) => {
    setTickets(updatedTickets);
  };

  const handleAttendeeChange = (attendeeDetails) => {
    setAttendee(attendeeDetails);
  };

  return (
    <div className="ticket-booking">
      <button className="close-button" onClick={onClose}>
        ×
      </button>
      {step === 1 && (
        <SelectTickets
          tickets={tickets}
          onProceed={handleProceed}
          onTicketChange={handleTicketChange}
        />
      )}
      {step === 2 && (
        <AttendeeDetails
          attendee={attendee}
          onProceed={handleProceed}
          onBack={handleBack}
          onAttendeeChange={handleAttendeeChange}
        />
      )}
      {step === 3 && (
        <OrderSummary
          tickets={tickets}
          attendee={attendee}
          onBack={handleBack}
        />
      )}
    </div>
  );
};

export default TicketBooking;

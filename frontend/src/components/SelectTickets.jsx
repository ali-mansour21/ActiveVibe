/* eslint-disable react/prop-types */
import "../styles/select-tickets.css";
const SelectTickets = ({ tickets, onProceed, onTicketChange }) => {
  const handleQuantityChange = (type, operation) => {
    const updatedTickets = tickets.map((ticket) => {
      if (ticket.type === type) {
        let newQuantity =
          operation === "increase" ? ticket.quantity + 1 : ticket.quantity - 1;
        if (newQuantity < 0) newQuantity = 0; // Ensure quantity does not go below zero
        return { ...ticket, quantity: newQuantity };
      }
      return ticket;
    });

    onTicketChange(updatedTickets);
  };

  const handleProceed = () => {
    onProceed();
  };

  const totalAmount = tickets.reduce(
    (total, ticket) => total + ticket.price * ticket.quantity,
    0
  );

  return (
    <div className="select-tickets">
      <h2>Ticket Booking / Select Tickets</h2>
      {tickets.map((ticket, index) => (
        <div key={index} className="ticket-selection">
          <div className="ticket-type">
            <p>{ticket.type}</p>
            <p>Price: ₹{ticket.price}</p>
          </div>
          <div className="ticket-quantity">
            <button
              onClick={() => handleQuantityChange(ticket.type, "decrease")}
            >
              -
            </button>
            <span>{ticket.quantity}</span>
            <button
              onClick={() => handleQuantityChange(ticket.type, "increase")}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <p>Total: ₹{totalAmount}</p>
        <button className="proceed-button" onClick={handleProceed}>
          Proceed
        </button>
      </div>
    </div>
  );
};

export default SelectTickets;

/* eslint-disable react/prop-types */

import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "../styles/order-summary.css";

const OrderSummary = ({ tickets, attendee, onBack }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [error, setError] = useState(null);

  const totalAmount = tickets.reduce(
    (total, ticket) => total + ticket.price * ticket.quantity,
    0
  );

  const handlePayment = async () => {
    if (!stripe || !elements) {
      return;
    }

    setPaymentProcessing(true);

    const cardElement = elements.getElement(CardElement);

    // Call your backend to create a PaymentIntent
    const response = await fetch("/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: totalAmount * 100,
        attendee,
        tickets,
      }),
    });

    const { clientSecret } = await response.json();

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: attendee.name,
          email: attendee.email,
        },
      },
    });

    if (paymentResult.error) {
      setError(paymentResult.error.message);
      setPaymentProcessing(false);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successful!");
      }
      setPaymentProcessing(false);
    }
  };

  return (
    <div className="order-summary">
      <h2>Ticket Booking / Order Summary</h2>
      <div className="summary-details">
        {tickets.map((ticket, index) => (
          <p key={index}>
            <strong>{ticket.type}:</strong> Qty {ticket.quantity} - ₹
            {ticket.price * ticket.quantity}
          </p>
        ))}
        <p>
          <strong>Total:</strong> ₹{totalAmount}
        </p>
        <CardElement />
        {error && <div className="payment-error">{error}</div>}
      </div>
      <div className="order-buttons">
        <button
          className="order-back-button"
          onClick={onBack}
          disabled={paymentProcessing}
        >
          Back
        </button>
        <button
          className="order-pay-button"
          onClick={handlePayment}
          disabled={!stripe || paymentProcessing}
        >
          {paymentProcessing ? "Processing..." : `Pay ₹${totalAmount}`}
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;

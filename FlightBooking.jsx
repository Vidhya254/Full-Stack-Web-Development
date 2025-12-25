import React from "react";

const FlightBooking = () => {
  const bookTicket = () => {
    // Prompt dialogs for user input
    const name = prompt("Enter Passenger Name:");
    if (!name) {
      alert("Name is required!");
      return;
    }

    const from = prompt("Enter Source City:");
    if (!from) {
      alert("Source city is required!");
      return;
    }

    const to = prompt("Enter Destination City:");
    if (!to) {
      alert("Destination city is required!");
      return;
    }

    const date = prompt("Enter Travel Date (YYYY-MM-DD):");
    if (!date) {
      alert("Travel date is required!");
      return;
    }

    // Confirmation dialog
    const confirmBooking = confirm(
      `Please confirm your booking:\n\nPassenger: ${name}\nFrom: ${from}\nTo: ${to}\nDate: ${date}`
    );

    if (confirmBooking) {
      alert("Flight Ticket Booked Successfully!");
    } else {
      alert(" Booking Cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Flight Ticket Booking</h1>
        <p style={styles.text}>
          Click the button below to book your flight using dialog boxes.
        </p>
        <button style={styles.button} onClick={bookTicket}>
          Book Flight
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  },
  title: {
    color: "#1e3c72",
    marginBottom: "15px",
  },
  text: {
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 25px",
    fontSize: "16px",
    background: "#1e88e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default FlightBooking;

import React from "react";

const HotelReservation = () => {
  const reserveRoom = () => {
    // Prompt dialogs for user input
    const name = prompt("Enter Guest Name:");
    if (!name) {
      alert("Guest name is required!");
      return;
    }

    const roomType = prompt("Enter Room Type (Single / Double / Deluxe):");
    if (!roomType) {
      alert("Room type is required!");
      return;
    }

    const checkIn = prompt("Enter Check-in Date (YYYY-MM-DD):");
    if (!checkIn) {
      alert("Check-in date is required!");
      return;
    }

    const nights = prompt("Enter Number of Nights:");
    if (!nights || isNaN(nights)) {
      alert("Please enter a valid number of nights!");
      return;
    }

    // Confirmation dialog
    const confirmReservation = confirm(
      `Please confirm your reservation:\n\n` +
      `Guest Name: ${name}\n` +
      `Room Type: ${roomType}\n` +
      `Check-in Date: ${checkIn}\n` +
      `Nights: ${nights}`
    );

    if (confirmReservation) {
      alert("Hotel Room Reserved Successfully!");
    } else {
      alert("Reservation Cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}> Hotel Reservation System</h1>
        <p style={styles.text}>
          Reserve your hotel room easily using dialog boxes.
        </p>
        <button style={styles.button} onClick={reserveRoom}>
          Reserve Room
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #4b6cb7, #182848)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    width: "360px",
    textAlign: "center",
    boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
  },
  title: {
    color: "#182848",
    marginBottom: "15px",
  },
  text: {
    color: "#555",
    marginBottom: "20px",
    fontSize: "15px",
  },
  button: {
    padding: "12px 28px",
    fontSize: "16px",
    background: "#9c4bb7ff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default HotelReservation;

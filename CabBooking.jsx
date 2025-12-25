import React from "react";

const CabBooking = () => {
  const bookCab = () => {
    // Prompt dialogs for user input
    const name = prompt("Enter Passenger Name:");
    if (!name) {
      alert("Passenger name is required!");
      return;
    }

    const pickup = prompt("Enter Pickup Location:");
    if (!pickup) {
      alert("Pickup location is required!");
      return;
    }

    const drop = prompt("Enter Drop Location:");
    if (!drop) {
      alert("Drop location is required!");
      return;
    }

    const cabType = prompt("Enter Cab Type (Mini / Sedan / SUV):");
    if (!cabType) {
      alert("Cab type is required!");
      return;
    }

    // Confirmation dialog
    const confirmBooking = confirm(
      `Please confirm your cab booking:\n\n` +
      `Passenger: ${name}\n` +
      `Pickup: ${pickup}\n` +
      `Drop: ${drop}\n` +
      `Cab Type: ${cabType}`
    );

    if (confirmBooking) {
      alert("Cab Booked Successfully!");
    } else {
      alert("Cab Booking Cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚖 Online Cab Booking</h1>
        <p style={styles.text}>
          Book your cab quickly using JavaScript dialog boxes.
        </p>
        <button style={styles.button} onClick={bookCab}>
          Book Cab
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #ff9800, #ff229fff)",
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
    color: "#179696ff",
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
    background: "#379989ff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default CabBooking;

import React from "react";

const EventRegistration = () => {
  const registerEvent = () => {
    // Collect user details using prompt dialogs
    const name = prompt("Enter Participant Name:");
    if (!name) {
      alert("Participant name is required!");
      return;
    }

    const email = prompt("Enter Email ID:");
    if (!email) {
      alert("Email ID is required!");
      return;
    }

    const eventName = prompt("Enter Event Name:");
    if (!eventName) {
      alert("Event name is required!");
      return;
    }

    const date = prompt("Enter Event Date (YYYY-MM-DD):");
    if (!date) {
      alert("Event date is required!");
      return;
    }

    // Confirmation alert
    const confirmRegistration = confirm(
      `Please confirm your registration:\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Event: ${eventName}\n` +
      `Date: ${date}`
    );

    if (confirmRegistration) {
      alert("Event Registration Successful!");
    } else {
      alert("Event Registration Cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Event Registration</h1>
        <p style={styles.text}>
          Register for your favorite event using simple dialog boxes.
        </p>
        <button style={styles.button} onClick={registerEvent}>
          Register Now
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #6a11cb, #25f8fcff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    width: "380px",
    textAlign: "center",
    boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
  },
  title: {
    color: "#2575fc",
    marginBottom: "15px",
  },
  text: {
    color: "#555",
    marginBottom: "20px",
    fontSize: "15px",
  },
  button: {
    padding: "12px 30px",
    fontSize: "16px",
    background: "#6a11cb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default EventRegistration;

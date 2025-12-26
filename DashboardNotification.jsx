import React from "react";

const DashboardNotification = () => {
  const showNotification = (type) => {
    if (type === "success") {
      alert("Success: Your data has been saved successfully!");
    } else if (type === "warning") {
      alert("Warning: Your session will expire soon!");
    } else if (type === "error") {
      alert("Error: Failed to load data!");
    } else {
      alert("Info: You have a new dashboard update!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Dashboard Notifications</h1>
        <p style={styles.text}>
          Click a button below to simulate dashboard notifications.
        </p>

        <button
          style={{ ...styles.button, background: "#4caf50" }}
          onClick={() => showNotification("success")}
        >
          Success Notification
        </button>

        <button
          style={{ ...styles.button, background: "#ff9800" }}
          onClick={() => showNotification("warning")}
        >
          Warning Notification
        </button>

        <button
          style={{ ...styles.button, background: "#f44336" }}
          onClick={() => showNotification("error")}
        >
          Error Notification
        </button>

        <button
          style={{ ...styles.button, background: "#2196f3" }}
          onClick={() => showNotification("info")}
        >
          Info Notification
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #141e30, #243b55)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    width: "400px",
    textAlign: "center",
    boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
  },
  title: {
    color: "#243b55",
    marginBottom: "15px",
  },
  text: {
    color: "#555",
    marginBottom: "20px",
    fontSize: "15px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "14px",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    margin: "6px",
    width: "100%",
  },
};

export default DashboardNotification;


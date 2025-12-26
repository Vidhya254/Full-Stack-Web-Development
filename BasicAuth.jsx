import React from "react";
const BasicAuth = () => {
  const loginUser = () => {
    // Predefined credentials (for simulation only)
    const correctUsername = "admin";
    const correctPassword = "1234";

    // Prompt for username
    const username = prompt("Enter Username:");
    if (!username) {
      alert("Username cannot be empty!");
      return;
    }

    // Prompt for password
    const password = prompt("Enter Password:");
    if (!password) {
      alert("Password cannot be empty!");
      return;
    }

    // Check credentials
    if (username === correctUsername && password === correctPassword) {
      alert("Login Successful! Welcome.");
    } else {
      alert("Invalid Username or Password!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Authentication System</h1>
        <p style={styles.text}>
          Click the button below to login using dialog boxes.
        </p>
        <button style={styles.button} onClick={loginUser}>
          Login
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #991185ff, #3881efff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    color: "#11998e",
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
    background: "#114599ff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default BasicAuth;

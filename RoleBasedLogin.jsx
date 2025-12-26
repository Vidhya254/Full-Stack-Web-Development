import React, { useState } from "react";
const RoleBasedLogin = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username) {
      setMessage("Username is required!");
      return;
    }

    if (!role) {
      setMessage("Please select a role!");
      return;
    }

    // Role-based redirection message
    if (role === "Admin") {
      setMessage("Redirecting to Admin Dashboard...");
    } else if (role === "User") {
      setMessage(" Redirecting to User Home Page...");
    } else if (role === "Guest") {
      setMessage("Redirecting to Guest Access Page...");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login</h1>

        <form onSubmit={handleLogin}>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <select
            style={styles.input}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option>Admin</option>
            <option>User</option>
            <option>Guest</option>
          </select>

          <button style={styles.button} type="submit">
            Login
          </button>
        </form>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #141e30, #243b55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#ffffff",
    padding: "30px",
    width: "350px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
  },
  title: {
    marginBottom: "20px",
    color: "#502455ff",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#452455ff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  },
  message: {
    marginTop: "15px",
    fontWeight: "bold",
    color: "#333",
  },
};

export default RoleBasedLogin;

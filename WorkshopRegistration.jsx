import React, { useState } from "react";

const WorkshopRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [mode, setMode] = useState("Online");

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}> Workshop Registration</h1>

        {/* Registration Form */}
        <input
          style={styles.input}
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={styles.input}
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="text"
          placeholder="Workshop Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <select
          style={styles.input}
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option>Online</option>
          <option>Offline</option>
        </select>

        {/* Live Preview Section */}
        <div style={styles.preview}>
          <h3> Live Preview</h3>
          <p><strong>Name:</strong> {name || "—"}</p>
          <p><strong>Email:</strong> {email || "—"}</p>
          <p><strong>Topic:</strong> {topic || "—"}</p>
          <p><strong>Mode:</strong> {mode}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #8360c3, #2ebf91)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "30px",
    width: "380px",
    borderRadius: "12px",
    boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#2ebf91",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  preview: {
    marginTop: "20px",
    padding: "15px",
    background: "#f4f4f4",
    borderRadius: "8px",
    fontSize: "14px",
  },
};

export default WorkshopRegistration;

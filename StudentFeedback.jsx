import React from "react";
const StudentFeedback = () => {
  const submitFeedback = () => {
    // Get student name
    const name = prompt("Enter Student Name:");
    if (!name) {
      alert("Student name is required!");
      return;
    }

    // Get rating
    const rating = prompt("Rate the course (1 to 5):");
    if (!rating || rating < 1 || rating > 5) {
      alert("Please enter a valid rating between 1 and 5!");
      return;
    }

    // Get comments
    const comments = prompt("Enter your feedback comments:");
    if (!comments) {
      alert("Comments cannot be empty!");
      return;
    }

    // Confirmation dialog
    const confirmSubmit = confirm(
      `Please confirm your feedback:\n\n` +
      `Student Name: ${name}\n` +
      `Rating: ${rating}/5\n` +
      `Comments: ${comments}`
    );

    if (confirmSubmit) {
      alert("Thank you! Your feedback has been submitted.");
    } else {
      alert("Feedback submission cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎓 Student Feedback System</h1>
        <p style={styles.text}>
          Share your rating and feedback using dialog boxes.
        </p>
        <button style={styles.button} onClick={submitFeedback}>
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #b0219aff, #ed6debff)",
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
    color: "#2193b0",
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
    background: "#b021a9ff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default StudentFeedback;

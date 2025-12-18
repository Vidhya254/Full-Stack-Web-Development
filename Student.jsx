import React, { useState } from "react";

const Student = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Anu", present: false },
    { id: 2, name: "Kavi", present: false },
    { id: 3, name: "Ravi", present: false },
    { id: 4, name: "Meena", present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📋 Attendance Tracker</h2>

      {students.map((student) => (
        <div
          key={student.id}
          style={{
            ...styles.card,
            background: student.present
              ? "linear-gradient(135deg, #d4fc79, #96e6a1)"
              : "linear-gradient(135deg, #ff9a9e, #fad0c4)",
          }}
        >
          <span style={styles.name}>{student.name}</span>

          <button
            style={{
              ...styles.button,
              backgroundColor: student.present ? "#2e7d32" : "#c62828",
            }}
            onClick={() => toggleAttendance(student.id)}
          >
            {student.present ? "Present" : "Absent"}
          </button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    padding: "30px",
    background: "linear-gradient(120deg, #89f7fe, #66a6ff)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#fff",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    borderRadius: "12px",
    marginBottom: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Student;

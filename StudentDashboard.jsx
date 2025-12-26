import React, { useState } from "react";
const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  // Sample student data
  const students = [
    { id: 1, name: "Alice", grade: "A", age: 16 },
    { id: 2, name: "Bob", grade: "B+", age: 17 },
    { id: 3, name: "Charlie", grade: "A-", age: 16 },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Dashboard</h2>
        <ul style={styles.navList}>
          <li
            style={activeTab === "home" ? styles.activeNavItem : styles.navItem}
            onClick={() => setActiveTab("home")}
          >
            Home
          </li>
          <li
            style={activeTab === "students" ? styles.activeNavItem : styles.navItem}
            onClick={() => setActiveTab("students")}
          >
            Students
          </li>
          <li
            style={activeTab === "about" ? styles.activeNavItem : styles.navItem}
            onClick={() => setActiveTab("about")}
          >
            About
          </li>
        </ul>
      </div>

      <div style={styles.content}>
        {activeTab === "home" && (
          <div>
            <h1>Welcome to Student Dashboard</h1>
            <p>Use the navigation to see student data and info.</p>
          </div>
        )}

        {activeTab === "students" && (
          <div>
            <h1>Student List</h1>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Grade</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.grade}</td>
                    <td>{student.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "about" && (
          <div>
            <h1>About</h1>
            <p>This dashboard helps manage and view student data quickly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #a243ceff, #77189dff)",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "220px",
    background: "#ffffff",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
  },
  sidebarTitle: {
    textAlign: "center",
    color: "#185a9d",
    marginBottom: "20px",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
  },
  navItem: {
    padding: "10px",
    cursor: "pointer",
    color: "#333",
  },
  activeNavItem: {
    padding: "10px",
    cursor: "pointer",
    color: "#fff",
    backgroundColor: "#43cea2",
    borderRadius: "5px",
  },
  content: {
    flex: 1,
    padding: "30px",
    color: "#fff",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
  },
  tableThTd: {
    border: "1px solid #fff",
    padding: "8px",
    textAlign: "left",
  },
};

export default StudentDashboard;

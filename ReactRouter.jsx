import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const Dashboard = () => (
  <div style={styles.page}>
    <h2>Student Dashboard</h2>
    <p>Welcome to the student dashboard.</p>
  </div>
);

const Profile = () => (
  <div style={styles.page}>
    <h2> Profile</h2>
    <p>Name: Vidhyadharshini</p>
    <p>Course: B.Sc Computer Science</p>
  </div>
);

const Courses = () => (
  <div style={styles.page}>
    <h2>Courses</h2>
    <ul>
      <li>React JS</li>
      <li>Data Structures</li>
      <li>Database Management</li>
    </ul>
  </div>
);

const Settings = () => (
  <div style={styles.page}>
    <h2>Settings</h2>
    <p>Update your preferences here.</p>
  </div>
);
const ReactRouter = () => {
  return (
    <Router>
      <div style={styles.container}>
        {/* Navigation Bar */}
        <nav style={styles.nav}>
          <h3 style={{ color: "white" }}> Student Panel</h3>
          <Link to="/" style={styles.link}>Dashboard</Link>
          <Link to="/profile" style={styles.link}>Profile</Link>
          <Link to="/courses" style={styles.link}>Courses</Link>
          <Link to="/settings" style={styles.link}>Settings</Link>
        </nav>

        {/* Page Content */}
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
  },
  nav: {
    width: "220px",
    background: "#7a38a0ff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    background: "#b578a5ff",
    padding: "10px",
    borderRadius: "6px",
    textAlign: "center",
  },
  content: {
    flex: 1,
    padding: "30px",
  },
  page: {
    background: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};

export default ReactRouter;

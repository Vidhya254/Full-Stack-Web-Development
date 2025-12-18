import React, { useState } from "react";

const Task = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}> Task List Dashboard</h2>

      <div style={styles.inputBox}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>
          Add
        </button>
      </div>

      <div>
        {tasks.length === 0 && (
          <p style={styles.emptyText}>No tasks added yet</p>
        )}

        {tasks.map((t, index) => (
          <div key={index} style={styles.taskCard}>
            <span style={styles.taskText}>{t}</span>
            <button
              onClick={() => removeTask(index)}
              style={styles.deleteBtn}
            >
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    padding: "30px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    color: "#fff",
    marginBottom: "25px",
  },
  inputBox: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    gap: "10px",
  },
  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
  },
  addBtn: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#00c853",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  emptyText: {
    textAlign: "center",
    color: "#eee",
    marginTop: "20px",
  },
  taskCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "12px 18px",
    margin: "10px auto",
    maxWidth: "400px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  taskText: {
    fontSize: "16px",
    color: "#333",
  },
  deleteBtn: {
    backgroundColor: "#d32f2f",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    padding: "6px 10px",
    cursor: "pointer",
  },
};

export default Task;

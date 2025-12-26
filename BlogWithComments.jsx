import React, { useState } from "react";

const BlogWithComments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim() === "") {
      alert("Comment cannot be empty!");
      return;
    }
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.blogCard}>
        <h1 style={styles.title}> My Tech Blog</h1>
        <p style={styles.blogText}>
          Welcome to my blog! This article explains how React helps in building
          interactive and responsive user interfaces easily.
        </p>

        <h3 style={styles.commentTitle}>Comments</h3>

        <div style={styles.commentBox}>
          {comments.length === 0 ? (
            <p style={styles.noComment}>No comments yet.</p>
          ) : (
            comments.map((comment, index) => (
              <p key={index} style={styles.comment}>
                {comment}
              </p>
            ))
          )}
        </div>

        <div style={styles.inputArea}>
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            style={styles.input}
          />
          <button onClick={addComment} style={styles.button}>
            Post
          </button>
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
    padding: "20px",
  },
  blogCard: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    maxWidth: "600px",
    width: "100%",
    boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
  },
  title: {
    color: "#a02ebfff",
    marginBottom: "10px",
  },
  blogText: {
    color: "#555",
    marginBottom: "20px",
    fontSize: "15px",
  },
  commentTitle: {
    marginBottom: "10px",
    color: "#333",
  },
  commentBox: {
    maxHeight: "150px",
    overflowY: "auto",
    marginBottom: "15px",
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "6px",
  },
  comment: {
    background: "#f1f1f1",
    padding: "6px",
    borderRadius: "4px",
    marginBottom: "5px",
    fontSize: "14px",
  },
  noComment: {
    color: "#888",
    fontSize: "14px",
  },
  inputArea: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "8px 16px",
    background: "#bf2eb3ff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default BlogWithComments;

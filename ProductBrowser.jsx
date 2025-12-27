import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// Product data
const products = {
  electronics: ["Mobile", "Laptop", "Headphones"],
  clothing: ["T-Shirt", "Jeans", "Jacket"],
  books: ["React Book", "JavaScript Guide", "CSS Basics"],
};

// Home Component
function Home() {
  return (
    <div style={styles.container}>
      <h2>Product Categories</h2>

      <div style={styles.categoryBox}>
        <Link to="/category/electronics" style={styles.link}>Electronics</Link>
        <Link to="/category/clothing" style={styles.link}>Clothing</Link>
        <Link to="/category/books" style={styles.link}>Books</Link>
      </div>
    </div>
  );
}

// Category Component
function Category() {
  const { name } = useParams();
  const items = products[name];

  return (
    <div style={styles.container}>
      <h2>{name.toUpperCase()} Products</h2>

      {items ? (
        <ul style={styles.list}>
          {items.map((item, index) => (
            <li key={index} style={styles.listItem}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}

      <Link to="/" style={styles.back}>⬅ Back</Link>
    </div>
  );
}

// Main Component
function ProductBrowser() {
  return (
    <Router>
      <div style={styles.app}>
        <h1 style={styles.title}>Simple Product Browser</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

// Styles Object properly closed
const styles = {
  app: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #a6d7e8ff, #90caf9)",
    padding: "20px",
    fontFamily: "Arial"
  },
  title: {
    textAlign: "center",
    color: "#3d53a3ff"
  },
  container: {
    background: "#fff",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "500px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  },
  categoryBox: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px"
  },
  link: {
    textDecoration: "none",
    background: "#b319d2ff",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "5px"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    background: "pink",
    margin: "8px",
    padding: "10px",
    borderRadius: "5px"
  },
  back: {
    display: "inline-block",
    marginTop: "15px",
    textDecoration: "none",
    color: "#880da1ff",
    fontWeight: "bold"
  }
};
export default ProductBrowser;

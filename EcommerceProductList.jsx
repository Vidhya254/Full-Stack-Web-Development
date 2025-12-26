import React, { useState } from "react";
const EcommerceProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Headphones", price: 2000 },
    { id: 3, name: "Smartphone", price: 30000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>E-Commerce Store</h1>

        <h3>Products</h3>
        {products.map((product) => (
          <div key={product.id} style={styles.product}>
            <span>
              {product.name} - ₹{product.price}
            </span>
            <button
              style={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}

        <h3 style={{ marginTop: "20px" }}>🛒 Cart ({cart.length})</h3>
        {cart.length === 0 ? (
          <p style={styles.empty}>Cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <p key={index} style={styles.cartItem}>
              {item.name} - ₹{item.price}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    width: "400px",
    boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
  },
  title: {
    textAlign: "center",
    color: "#ef61ffff",
    marginBottom: "20px",
  },
  product: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    padding: "8px",
    background: "#f7f7f7",
    borderRadius: "6px",
  },
  button: {
    background: "#61caffff",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  cartItem: {
    fontSize: "14px",
    color: "#333",
  },
  empty: {
    color: "#888",
    fontSize: "14px",
  },
};

export default EcommerceProductList;

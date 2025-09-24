// src/pages/Auth/Login.jsx
import React from "react";

const Login = () => {
  const handleLogin = (role) => {
    // Save fake user in localStorage
    localStorage.setItem("user", JSON.stringify({ role }));
    // Redirect to dashboard based on role
    if (role === "admin") {
      window.location.href = "/admin/dashboard";
    } else {
      window.location.href = "/user/dashboard";
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login Page</h1>
      <p>This is a temporary fake login for testing roles.</p>

      <button
        onClick={() => handleLogin("admin")}
        style={{
          marginRight: "10px",
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Login as Admin
      </button>

      <button
        onClick={() => handleLogin("user")}
        style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Login as User
      </button>
    </div>
  );
};

export default Login;

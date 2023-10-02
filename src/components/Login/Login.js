import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const isLoginSuccessful = username === "sakthi" && password === "123456";

    if (isLoginSuccessful) {
      onLogin();
      console.log(onLogin);
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-flex">
      <div className="login-container">
        <h2 className="login-heading">Login</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

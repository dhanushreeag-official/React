import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/Login.css';

export default function LoginPage() {
  const navigate = useNavigate();

  // State to store input values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    if (username.trim() !== "" && password.trim() !== "") {
      // You can add login validation here
      navigate("/home"); // redirect to homepage
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div className="LoginContainer">
      <h1>Sign-in</h1>
      <p>Enter your credentials to sign-in to your account</p>
      <form onSubmit={handleSubmit}>
        <div className="Spacing">
          <label className="Label">UserName</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="InputBox" // update state
          />
        </div>
        <div className="Spacing">
          <label className="Label">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // update state
            className="InputBox"
          />
        </div>
        <button type="submit" className="SubmitBtn">Login</button>
      </form>
    </div>
  );
}

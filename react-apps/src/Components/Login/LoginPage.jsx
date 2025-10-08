import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../Styles/Login.css';

export default function LoginPage() {
  const navigate = useNavigate();

  // State to store input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    if (email.trim() !== "" && password.trim() !== "") {
      navigate("/home");
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
          <label className="Label">Email</label>
          <input
            type="email"
            placeholder="Enter your email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="InputBox"
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
      <div>
        <p>
          Don’t have an account?{" "}
          <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}
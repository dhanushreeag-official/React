import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // update state
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // update state
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

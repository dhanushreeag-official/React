import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import EachInput from './EachInput';
import '../Styles/Register.css';

export default function RegisterPage() {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch = password === confirmPassword || confirmPassword === "";

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (fullname.trim() !== "" && password.trim() !== "" && email.trim() !== "") {
      if (!passwordsMatch) {
        alert("Passwords do not match");
        return;
      }
      navigate("/");
    } else {
      alert("Please enter all fields");
    }
  };

  return (
    <div className="LoginContainer">
      <h1>Sign-up</h1>
      <p>Create your account</p>

      {/* ✅ onSubmit should be on form */}
      <form onSubmit={handleSubmit}>
        <EachInput
          type="text"
          displayName="Full Name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />

        <EachInput
          type="email"
          displayName="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <EachInput
          type="password"
          displayName="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <EachInput
          type="password"
          displayName="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {!passwordsMatch && (
          <p style={{ color: "red", fontSize: "14px" }}>
            Passwords do not match
          </p>
        )}

        {/* ✅ Button should have type="submit" */}
        <button type="submit" className="SubmitBtn">
          Register
        </button>
      </form>

      <p>
        Already have an account?{" "}
        <Link to="/">Login here</Link>
      </p>
    </div>
  );
}

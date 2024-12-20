import React, { useState } from "react";
import "./styles/SubscribeToTheNewsLetterApp.css"; // Create this file for styling

export default function SubscribeToTheNewsLetterApp() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Here, you can add the logic to submit the email (e.g., send to an API)
    if (email) {
      setMessage("Thank you for subscribing!");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="subscribe-container">
      <h2 className="subscribe-title">Subscribe to the Newsletter</h2>
      <form onSubmit={handleSubscribe} className="subscribe-form">
        <input
          type="email"
          placeholder="Enter your email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="subscribe-input custom-search-input"
          required
        />
        <button type="submit" className="subscribe-button">
          Subscribe
        </button>
      </form>
      {message && <p className="subscribe-message">{message}</p>}
    </div>
  );
}

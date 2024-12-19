import React from "react";
import "../../styles/Footer.css"; // Create a CSS file if styling is needed

export default function Email() {
  const emails = [
    { address: "sales@digitalb2btrade.com" },
    { address: "info@digitalb2btrade.com" },
  ];

  return (
    <div className="email-container">
      <h2 className="email-title">Email :</h2>
      <ul className="email-list">
        {emails.map((email, index) => (
          <li key={index} className="email-item">
            <a href={`mailto:${email.address}`} className="email-link">
              {email.address}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

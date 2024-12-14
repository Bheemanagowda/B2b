import React from 'react';
import "../../styles/Footer.css"; // Create a CSS file if styling is needed

export default function ContactUs() {
  const address = "#270/2/21, 2ND Floor Sir M V Road, Near Bhanu Nursing Home Bommanahalli, Bangalore-560068";

  return (
    <div className="contact-us-container">
      <h2 className="contact-us-title">Contact Us</h2>
      <p className="contact-us-address">
        {address}
      </p>
    </div>
  );
}

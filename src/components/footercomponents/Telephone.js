import React from "react";
import "../../styles/Footer.css"; // Create a CSS file if styling is needed

export default function Telephone() {
  const phones = [{ number: "080 - 48525441" }, { number: "+91 9742477988" }];

  return (
    <div className="telephone-container">
      <h2 className="telephone-title">Telephone :</h2>
      <ul className="telephone-list">
        {phones.map((phone, index) => (
          <li key={index} className="telephone-item">
            <a
              href={`tel:${phone.number.replace(/ /g, "")}`}
              className="telephone-link"
            >
              {phone.number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

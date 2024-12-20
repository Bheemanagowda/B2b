import React from "react";
import { Link } from "react-router-dom";

export default function FooterLinks({ title, categories }) {
  return (
    <div>
      <h2 className="FooterTitle">{title}</h2>
      <ul className="footer-links-list">
        {categories.map((category, index) => (
          <li key={index}>
            <i className="fas fa-angle-right"></i>
            <Link to={category.path}>{category.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Adding default props
FooterLinks.defaultProps = {
  title: "Quick Links", // Default title if none is provided
  categories: [], // Default to an empty array if no categories are passed
};

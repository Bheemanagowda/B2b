import React from 'react';
import "../../styles/Footer.css";
import { Link } from 'react-router-dom'; // Importing Link for navigation

export default function PopularCategories() {
  // Categories array for scalability and cleaner code
  const categories = [
    { label: 'Interior and Furnitures', path: '/interior-furnitures' },
    { label: 'Industrial Plants & Machinery', path: '/industrial-plants-machinery' },
    { label: 'Building Construction & Material', path: '/building-construction-material' },
    { label: 'Information Technology', path: '/information-technology' },
    { label: 'Medical, Pharma & Healthcare', path: '/medical-pharma-healthcare' },
    { label: 'Computer & IT Solutions', path: '/computer-it-solutions' },
    { label: 'Apparel & Garments', path: '/apparel-garments' },
  ];

  return (
    <div className="footer-links-container">
      <h2 className="FooterTitle">Popular Categories</h2>
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

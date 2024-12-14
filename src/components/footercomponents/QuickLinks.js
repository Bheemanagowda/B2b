import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import "../../styles/Footer.css";

export default function QuickLinks() {
  const links = [
    { label: 'About Us', path: '/about-us' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Site Map', path: '/site-map' },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Terms & Conditions', path: '/terms-and-conditions' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
  ];

  return (
    <div className="footer-links-container">
      <h2 className="FooterTitle">Quick Links</h2>
      <ul className="footer-links-list">
        {links.map((link, index) => (
          <li key={index}>
            <i className="fas fa-angle-right"></i>
            <Link to={link.path}>{link.label}</Link> {/* Using Link instead of anchor */}
          </li>
        ))}
      </ul>
    </div>
  );
}

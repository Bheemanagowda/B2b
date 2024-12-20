import React from 'react';
 // Import Link for navigation
import "./Footer.css";
import FooterLinks from "./FooterLinks"

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
    
    <FooterLinks
    title="Quick Links"
    categories={links}

    />
  );
}

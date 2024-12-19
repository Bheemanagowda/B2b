import React from "react";
import "../../styles/Footer.css";
import FooterLinks from "./FooterLinks";

export default function PopularCategories() {
  // Categories array for scalability and cleaner code
  const categories = [
    { label: "Interior and Furnitures", path: "/interior-furnitures" },
    {
      label: "Industrial Plants & Machinery",
      path: "/industrial-plants-machinery",
    },
    {
      label: "Building Construction & Material",
      path: "/building-construction-material",
    },
    { label: "Information Technology", path: "/information-technology" },
    {
      label: "Medical, Pharma & Healthcare",
      path: "/medical-pharma-healthcare",
    },
    { label: "Computer & IT Solutions", path: "/computer-it-solutions" },
    { label: "Apparel & Garments", path: "/apparel-garments" },
  ];

  return <FooterLinks title="Popular Categories" categories={categories} />;
}

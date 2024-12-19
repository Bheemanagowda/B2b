import React from "react";
import CategoryList from "./CategoryList";  // Import reusable component

export default function InteriorFurnituresCategoryList() {
  // Furniture categories with paths
  const furnitureCategories = [
    { name: "Wooden Double Bed", path: "/wooden-double-bed" },
    { name: "Carpentry Work", path: "/carpentry-work" },
    { name: "Office Partitions", path: "/office-partitions" },
    { name: "Hospital Furniture", path: "/hospital-furniture" },
    { name: "Garden Furniture", path: "/garden-furniture" },
  ];

  const buttonStyle = {
    display: "flex",
    padding: "14px 20px",
    color: "#204063",
    alignItems: "center",
    border: "1px solid #204063",
    borderRadius: "3px",
    fontSize: "18px",
    fontWeight: "600",
  };

  return (
    <CategoryList
      title="Interior and Furnitures"
      categories={furnitureCategories}
      buttonLabel="View All"
      buttonStyle={buttonStyle}
    />
  );
}

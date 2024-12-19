import React from "react";

import "../../styles/Product.css";
import "../Button/styles/ViewAll.css";
import CategoryList from './CategoryList'

export default function FoodAndBeverageCategoryList() {
  const furnitureCategories = [
    { name: "Basmati Rice", path: "/basmati-rice" },
    { name: "Bakery Products", path: "/bakery-products" },
    { name: "Fresh Vegetables", path: "/fresh-vegetables" },
    { name: "Tea", path: "/tea" },
    { name: "Packaged Drinking Water", path: "/packaged-drinking-water" },
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
    title="Food & Beverages"
    categories={furnitureCategories}
    buttonLabel="View All"
    buttonStyle={buttonStyle}
  />
  );
}

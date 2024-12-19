import React from 'react';
import '../../styles/Product.css'
import CategoryList from './CategoryList';
import '../Button/styles/ViewAll.css'



export default function ElectronicsAndElectricalCategoryList() {
  const electronicsCategories = [
    { name: "Photocopier Machine", path: "/photocopier-machine" },
    { name: "Electrical Ceiling Fans", path: "/electrical-ceiling-fans" },
    { name: "LCD Television", path: "/lcd-television" },
    { name: "Inverters", path: "/inverters" },
    { name: "Access Control Systems", path: "/access-control-systems" }
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
    title="Electronics and Electrical"
    categories={ electronicsCategories}
    buttonLabel="View All"
    buttonStyle={buttonStyle}
  />

  );
}

import React from "react";

import "../Button/styles/ViewAll.css";

import "../../styles/Product.css";
import CategoryList from "./CategoryList"


export default function MechanicalComponentsCategoryList() {
  const componentsCategories = [
    { name: "Industrial Valves", path: "/industrial-valves" },
    { name: "Gearbox", path: "/gearbox" },
    { name: "Industrial Fasteners", path: "/industrial-fasteners" },
    { name: "Bearings", path: "/bearings" },
    { name: "Packaged Drinking Water", path: "/packaged-drinking-water" },
  ];

  const buttonStyle ={
    display:"flex",
    padding:"14px 20px",
    color:"#204063",
    alignItems:"center",
    border:"1px solid #204063",
    borderRadius:"3px",
      fontSize:"18px",
      fontWeight:"600",
  }
  return (
    <CategoryList
    title="Mechanical Components"
    categories={ componentsCategories}
    buttonLabel="View All"
    buttonStyle={buttonStyle}
  />
  );
}

import React from "react";
import Button from "../Button/Button";
import "../Button/styles/ViewAll.css";
import RightArrowIcon from "./images/vector.svg";
import './style/Product.css'

// Reusable Category List Component
function CategoryList({ title, categories, buttonLabel, buttonStyle }) {
  return (
    <div className="BgFurniture">
      <h2 className="Title">{title}</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <img src={RightArrowIcon} className="RightArrow" alt="icons" />
            {category.name}
          </li>
        ))}
      </ul>
      <Button label={buttonLabel} type="button" style={buttonStyle} />
    </div>
  );
}

export default CategoryList;

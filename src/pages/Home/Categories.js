import React from "react";
import "./styles/Categories.css";
import "../../styles/Customize.css";
import "../../styles/Responsive.css";

import InteriorFurnitureImage from "./Images/categories/interior-design.png";
import FoodBeveragesiImage from "./Images/categories/fast-food.png";
import ApparelGarmentsImage from "./Images/categories/male-cloths.png";
import MedicalPharmaHealthcareImage from "./Images/categories/drug-store.png";
import InformationTechnologyImage from "./Images/categories/consultant.png";
import IndustrialPlantsMachineryImage from "./Images/categories/power-plant.png";
import MechanicalComponentsImage from "./Images/categories/mechanical.png";
import BuildingConstructionImage from "./Images/categories/building.png";
import ChemicalsDyesImage from "./Images/categories/search.png";
import MoreCategoriesImage from "./Images/categories/application.png";

export default function Categories() {
  const Categories = [
    { name: "Interior & Furniture", image: InteriorFurnitureImage },
    { name: "Food & Beverages", image: FoodBeveragesiImage },
    { name: "Apparel & Garments", image: ApparelGarmentsImage },
    {
      name: "Medical, Pharma & Healthcare",
      image: MedicalPharmaHealthcareImage,
    },
    { name: "Information Technology", image: InformationTechnologyImage },
    {
      name: "Industrial Plants & Machinery",
      image: IndustrialPlantsMachineryImage,
    },
    { name: "Mechanical Components", image: MechanicalComponentsImage },
    { name: "Building & Construction", image: BuildingConstructionImage },
    { name: "Chemicals and Dyes", image: ChemicalsDyesImage },
    { name: "More Categories", image: MoreCategoriesImage },
  ];
  return (
    <div className="pt-80 pb-80">
      <div className="container">
        <div className="categories">
          <div className="category-grid">
            {/* Map through cities and display their images */}
            {Categories.map((category, index) => (
              <div key={index} className="category-card">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
                <h4 className="CategoryName">{category.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

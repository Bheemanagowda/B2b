
import React from 'react'
import '../styles/Categories.css';
import '../styles/Customize.css'
import '../styles/Responsive.css'

import InteriorFurnitureImage from '../assets/images/categories/interior-design.png';
import FoodBeveragesiImage from '../assets/images/categories/fast-food.png';
import ApparelGarmentsImage from '../assets/images/categories/male-cloths.png';
import MedicalPharmaHealthcareImage from '../assets/images/categories/drug-store.png';
import InformationTechnologyImage from '../assets/images/categories/consultant.png';
import IndustrialPlantsMachineryImage from '../assets/images/categories/power-plant.png';
import MechanicalComponentsImage from '../assets/images/categories/mechanical.png';
import BuildingConstructionImage from '../assets/images/categories/building.png';
import ChemicalsDyesImage  from '../assets/images/categories/search.png';
import MoreCategoriesImage  from '../assets/images/categories/application.png';

export default function Categories() {
    const Categories = [
        { name: "Interior & Furniture", image: InteriorFurnitureImage },
        { name: "Food & Beverages", image: FoodBeveragesiImage },
        { name: "Apparel & Garments", image: ApparelGarmentsImage },
        { name: "Medical, Pharma & Healthcare", image: MedicalPharmaHealthcareImage },
        { name: "Information Technology", image:InformationTechnologyImage },
        { name: "Industrial Plants & Machinery", image: IndustrialPlantsMachineryImage },
        {name:"Mechanical Components",image:MechanicalComponentsImage },
        { name: "Building & Construction", image: BuildingConstructionImage },
        { name: "Chemicals and Dyes", image:ChemicalsDyesImage },
        { name: "More Categories", image:MoreCategoriesImage },

       
      ];
  return (
  <div className='pt-80 pb-80'>
      <div className='container'>
    <div className="categories">
 
  <div className="category-grid">
    {/* Map through cities and display their images */}
    {Categories.map((category, index) => (
      <div key={index} className="category-card">
        <img src={category.image} alt={category.name} className="category-image" />
        <h4 className='CategoryName'>{category.name}</h4>
      </div>
    ))}
  </div>
</div>
</div>
  </div>
  )
}

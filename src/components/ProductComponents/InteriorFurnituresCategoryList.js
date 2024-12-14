import React from 'react';

import ViewAll from '../ButtonComponents/ViewAll';
import RightArrowIcon from '../../assets/images/vector.svg';
import '../../styles/Product.css'



export default function InteriorFurnituresCategoryList() {
  // Furniture categories with paths
  const furnitureCategories = [
    { name: "Wooden Double Bed", path: "/wooden-double-bed" },
    { name: "Carpentry Work", path: "/carpentry-work" },
    { name: "Office Partitions", path: "/office-partitions" },
    { name: "Hospital Furniture", path: "/hospital-furniture" },
    { name: "Garden Furniture", path: "/garden-furniture" }
  ];

  return (
    <div className='BgFurniture'>
      <h2 className='Title'>Interior and Furnitures</h2>
      <ul>
        
        {furnitureCategories.map((category, index) => (
          
          <li key={index}>
            <img src={RightArrowIcon} className="RightArrow"alt='icons'/>
        
            {category.name}
          </li>
        ))}
      </ul>
      <ViewAll />
    </div>
  );
}

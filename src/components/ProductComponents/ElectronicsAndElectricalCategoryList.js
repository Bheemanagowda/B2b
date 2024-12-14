import React from 'react';
import '../../styles/Product.css'
import RightArrowIcon from '../../assets/images/vector.svg'; // Ensure this path is correct
import ViewAll from '../ButtonComponents/ViewAll'; // Ensure this component is properly implemented

export default function ElectronicsAndElectricalCategoryList() {
  const electronicsCategories = [
    { name: "Photocopier Machine", path: "/photocopier-machine" },
    { name: "Electrical Ceiling Fans", path: "/electrical-ceiling-fans" },
    { name: "LCD Television", path: "/lcd-television" },
    { name: "Inverters", path: "/inverters" },
    { name: "Access Control Systems", path: "/access-control-systems" }
  ];

  return (
   
        <div className="BgFurniture">
      <h2 className="Title">Electronics and Electrical Products</h2>
      <ul >
        {electronicsCategories.map((category, index) => (
          <li key={index} >
            <img src={RightArrowIcon} className="RightArrow" alt="arrow icon" />
            <a href={category.path} className="categoryLink">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
      <ViewAll />
    </div>

  );
}

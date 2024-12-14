import React from 'react'
import ViewAll from '../ButtonComponents/ViewAll';
import RightArrowIcon from '../../assets/images/vector.svg';
import '../../styles/Product.css'

export default function FoodAndBeverageCategoryList() {
  const FoodAndBeverageCategories = [
    { name: "Basmati Rice", path: "/basmati-rice" },
    { name: "Bakery Products", path: "/bakery-products" },
    { name: "Fresh Vegetables", path: "/fresh-vegetables" },
    { name: "Tea", path: "/tea" },
    { name: "Packaged Drinking Water", path: "/packaged-drinking-water" },
  ];
  return (
    
    <div className="BgFurniture">
    <h2 className="Title">Food & Beverages</h2>
    <ul >
      { FoodAndBeverageCategories.map((category, index) => (
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
  )
}


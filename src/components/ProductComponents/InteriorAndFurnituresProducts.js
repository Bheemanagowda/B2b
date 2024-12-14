import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included
import KitchenImage from '../../assets/images/ineterior-furnitures/kitchen.png';
import WardrobeImage from '../../assets/images/ineterior-furnitures/wardrobe.jpg';
import TvunitImage from '../../assets/images/ineterior-furnitures/tv-unit.png';
import "../../styles/Product.css"
import "../../styles/Responsive.css"


export default function InteriorAndFurnituresProducts() {
  // Categories
  const categories = [
    { name: 'Kitchen', path: '/kitchen', image: KitchenImage },
    { name: 'Wardrobe', path: '/wardrobe', image: WardrobeImage },
    { name: 'TV Unit', path: '/tv-unit', image: TvunitImage },
  ];

  return (
    <div className="interiorAndFurnituresContainer">
     
      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-md-4">
            <div className="categoryItem">
              <img src={category.image} alt={category.name} className="categoryIcon img-fluid" />
              <h3 className="categoryName">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

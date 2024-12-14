import React from 'react';
import "../../styles/Product.css"

// Ensure to import or define your image variables correctly
import MasalaImage from '../../assets/images/food-beverages/masala.png';
import FreshJuiceImage from '../../assets/images/food-beverages/fresh-juice.png';
import TeaImage from '../../assets/images/food-beverages/tea.png';

export default function FoodAndBeverageProducts() {
  const foodAndBeverageProducts = [
    { name: 'Masala', path: '/masala', image: MasalaImage },
    { name: 'Fresh Juice', path: '/fresh-juice', image: FreshJuiceImage },
    { name: 'Tea', path: '/tea', image: TeaImage },
  ];

  return (
    <div className="foodAndBeverageContainer">
      <div className="row">
        {foodAndBeverageProducts.map((product, index) => (
          <div key={index} className="col-md-4">
            <div className="categoryItem">
              <img src={product.image} alt={product.name} className="categoryIcon img-fluid" />
              <h3 className="categoryName">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

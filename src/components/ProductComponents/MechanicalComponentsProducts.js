import React from 'react';

// Import images
import NutsImage from '../../assets/images/mechanical-products/1.png';
import NailsImage from '../../assets/images/mechanical-products/2.png';
import BallBearingImage from '../../assets/images/mechanical-products/3.png';

export default function MechanicalComponentsProducts() {
  const mechanicalComponents = [
    { name: 'Nuts', image: NutsImage },
    { name: 'Nails', image: NailsImage },
    { name: 'Ball Bearing', image: BallBearingImage },
  ];

  return (
    <div className="interiorAndFurnituresContainer">
     
      <div className="row">
        {mechanicalComponents.map((category, index) => (
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

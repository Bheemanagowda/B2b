import React from 'react';
import "../../styles/Responsive.css";
import './style/Product.css'
import ProductList from './ProductList';
// Import images
import NutsImage from './images/mechanical-products/1.png';
import NailsImage from './images/mechanical-products/2.png';
import BallBearingImage from './images/mechanical-products/3.png';

export default function MechanicalComponentsProducts() {

  const mechanicalComponents = [
    { 
      id: 1, 
      image: NutsImage, 
      name: "Nuts", 
     
    },
    { 
      id: 2, 
      image: NailsImage, 
      name: "Nails", 
    
    },
    { 
      id: 3, 
      image: BallBearingImage, 
      name: "Ball Bearing", 
     
    },
  ];

  return (
    <div className="interiorAndFurnituresContainer">
      <div className="row">
        {mechanicalComponents.map((component) => (
          <div key={component.id} className='col-12 col-md-4'>
            <ProductList
              image={component.image} 
              name={component.name}  
            />
          </div>
        ))}
      </div>
    </div>
  );
}

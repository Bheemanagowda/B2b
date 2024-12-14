import React from 'react';
import "../../styles/Product.css"
import "../../styles/Responsive.css"

import SolarImage from '../../assets/images/electronics-electrical/solar.png';
import InvertersImage from '../../assets/images/electronics-electrical/inverters.png';
import CctvImage from '../../assets/images/electronics-electrical/cctv-cameras.png'

export default function ElectronicsAndElectricalProducts() {
  // Categories
  const products = [
    { name: 'Solar Panels', path: '/solar-panels', image:SolarImage },
    { name: 'Inverters', path: '/inverters', image:InvertersImage  },
    { name: 'CCTV Cameras', path: '/cctv-cameras', image: CctvImage  },
  ];

  return (
    <div className="electronicsAndElectricalContainer">
  
      <div className="row">
        {products.map((product, index) => (
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

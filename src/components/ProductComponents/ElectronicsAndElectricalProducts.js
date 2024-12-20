import React from 'react';
import "./style/Product.css"
import "../../styles/Responsive.css"
import ProductList from "./ProductList";

import SolarImage from './images/electronics-electrical/solar.png';
import InvertersImage from './images/electronics-electrical/inverters.png';
import CctvImage from './images/electronics-electrical/cctv-cameras.png'

export default function ElectronicsAndElectricalProducts() {
  // Categories
  const products = [
    { id :1,name: 'Solar Panels', path: '/solar-panels', image:SolarImage },
    { id :2,name: 'Inverters', path: '/inverters', image:InvertersImage  },
    {id :3, name: 'CCTV Cameras', path: '/cctv-cameras', image: CctvImage  },
  ];

  return (
    <div className="electronicsAndElectricalContainer">
  
     <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-12 col-md-4">
                <ProductList image={product.image} name={product.name}  />
              </div>
            ))}
          </div>
    </div>
  );
}

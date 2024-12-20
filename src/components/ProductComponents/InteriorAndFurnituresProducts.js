import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included
import KitchenImage from "./images/ineterior-furnitures/kitchen.png";
import WardrobeImage from "./images/ineterior-furnitures/wardrobe.jpg";
import TvunitImage from "./images/ineterior-furnitures/tv-unit.png";
import './style/Product.css'
import "../../styles/Responsive.css";
import ProductList from "./ProductList";

export default function InteriorAndFurnituresProducts() {
  // Categories
  const categories = [
    {
      id: 1,
      image: KitchenImage,
      name: "Kitchen",
    },
    {
      id: 2,
      image: WardrobeImage,
      name: "Wardrobe",
    },

    {
      id: 3,
      image: TvunitImage,
      name: "Tvunit",
    },
  ];

  return (
    <div className="interiorAndFurnituresContainer">
      <div className="row">
        {categories.map((category) => (
          <div key={category.id} className="col-12 col-md-4">
            <ProductList image={category.image} name={category.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

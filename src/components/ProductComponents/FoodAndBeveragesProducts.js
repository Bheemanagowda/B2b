import React from "react";
import "../../styles/Product.css";
import "../../styles/Responsive.css";
import ProductList from "./ProductList";

// Ensure to import or define your image variables correctly
import MasalaImage from "./images/food-beverages/masala.png";
import FreshJuiceImage from "./images/food-beverages/fresh-juice.png";
import TeaImage from "./images/food-beverages/tea.png";

export default function FoodAndBeverageProducts() {
  const foodAndBeverageProducts = [
    { id: 1,
      name: "Masala",
      path: "/masala",
      image: MasalaImage },

    {
      id: 2,
      name: "Fresh Juice",
      path: "/fresh-juice",
      image: FreshJuiceImage,
    },
    { id: 3,
      name: "Tea",
      path: "/tea",
      image: TeaImage },
  ];

  return (
    <div className="foodAndBeverageContainer">
      <div className="row">
        {foodAndBeverageProducts.map((product) => (
          <div key={product.id} className="col-12 col-md-4">
            <ProductList image={product.image} name={product.name}  />
          </div>
        ))}
      </div>
    </div>
  );
}

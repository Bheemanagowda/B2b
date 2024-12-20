import React from "react";
import "./styles/TopCities.css";
import "../../styles/Responsive.css";
import bengaluruImage from "./Images/topcities/bengaluru.jpg";
import delhiImage from "./Images/topcities/delhi.jpg";
import hyderabadImage from "./Images/topcities/hydrabad.jpg";
import chennaiImage from "./Images/topcities/chennai.jpg";
import mumbaiImage from "./Images/topcities/mumbai.jpg";
import kolkattaImage from "./Images/topcities/kolkatta.jpg";

const TopCities = () => {
  // Array of cities with image paths
  const cities = [
    { name: "Bangalore", image: bengaluruImage },
    { name: "Delhi", image: delhiImage },
    { name: "Hyderabad", image: hyderabadImage },
    { name: "Chennai", image: chennaiImage },
    { name: "Mumbai", image: mumbaiImage },
    { name: "Kolkatta", image: kolkattaImage },
  ];

  return (
    <div className="pb-80">
      <div className="container">
        <div className="top-cities">
          <h2 className="text-left">Top Cities</h2>
          <div className="cities-grid">
            {/* Map through cities and display their images */}
            {cities.map((city, index) => (
              <div key={index} className="city-card">
                <img src={city.image} alt={city.name} className="city-image" />
                <h4>{city.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCities;

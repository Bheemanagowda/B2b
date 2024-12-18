import React from "react";
import "../styles/GetDigitalB2bTradeApp.css";
import "../styles/Responsive.css";
import googleplayimage from "../assets/images/google-playstore/google-play.png";

export default function GetDigitalB2bTradeApp() {
  return (
    <div>
      <div className="GetDigital">
        <h2 className="GetDigitalTradeAppTitle">Get DigitalB2BTrade App</h2>
        <div className="GooglePlayImage">
          <img src={googleplayimage} alt="" className="GooglePlayStoreImage" />
        </div>
      </div>
    </div>
  );
}

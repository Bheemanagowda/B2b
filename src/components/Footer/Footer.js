import React from "react";
import "./Footer.css";
import QuickLinks from "./QuickLinks";
import PopularCategories from "./PopularCategories";
import Email from "./Email";
import Telephone from "./Telephone";
import ContactUs from "./ContactUs";

export default function Footer() {
  return (
    <div className="FooterBg">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <QuickLinks />
          </div>
          <div className="col-12 col-md-4">
            <PopularCategories />
          </div>
          <div className="col-12 col-md-4">
            <ContactUs />

            <Telephone />
            <Email />
          </div>
          <div className="col-md-12">
            <div className="CopyRights">
              <h5>Copyright © 2025 DigitalB2BTrade . All Rights Reserved</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

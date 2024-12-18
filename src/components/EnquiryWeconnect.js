import React from "react";
import EnquireNow from "./EnquireNow";
import WeConnectBuyersAndSellers from "./WeConnectBuyersAndSellers";

export default function EnquiryWeconnect() {
  return (
    <div className="container-fluid g-0" style={{ marginTop: "220px" }}>
      <div className="row g-0">
        <div className="col-md-6">
          <EnquireNow />
        </div>
        <div className="col-md-6">
          <WeConnectBuyersAndSellers />
        </div>
      </div>
    </div>
  );
}

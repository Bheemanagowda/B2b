import React from "react";
import GetDigitalB2bTradeApp from "./GetDigitalB2bTradeApp";
import DownloadApp from "./DownloadApp";
import "./styles/TradeApp.css";

export default function TradeApp() {
  return (
    <div className="BgTrade">
      <div className="row">
        <div className="col-md-6">
          <GetDigitalB2bTradeApp />
        </div>
        <div className="col-md-6">
          <DownloadApp />
        </div>
      </div>
    </div>
  );
}

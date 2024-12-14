import React from 'react'
import GetDigitalB2bTradeApp from '../components/GetDigitalB2bTradeApp';
import DownloadApp from '../components/DownloadApp';
import "../styles/TradeApp.css"


export default function TradeApp() {
  return (
    <div className='BgTrade'>
        <div className='row'>
            <div className='col-md-6'>
            <GetDigitalB2bTradeApp/>
          

            </div>
            <div className='col-md-6'>
            <DownloadApp/>
            </div>
        </div>
      
    </div>
  )
}

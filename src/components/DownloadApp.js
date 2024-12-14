import React from 'react';

import '../styles/DownloadApp.css'
import downloadAppImage1 from '../assets/images/img-download-app/1.png';
import downloadAppImage2 from '../assets/images/img-download-app/2.png';

export default function DownloadApp() {
  return (
    <div className="download-app">
      <div className="image-container">
        <img src={downloadAppImage1} alt="Download App 1" className='DownloadApp1' />
        <img src={downloadAppImage2} alt="Download App 2"  className='DownloadApp2'/>
      </div>
     
    </div>
  );
}

import React from 'react';
import '../styles/WeConnect.css'; // Import your external CSS file if needed
import '../styles/Responsive.css'; // Import your external CSS file if needed
import TrustedImage from '../assets/images/icons/trust.png';
import SafeAndSecureImage from '../assets/images/icons/shield.png';
import QuickAssistanceImage from'../assets/images/icons/headshet.png'

export default function WeConnectBuyersAndSellers() {
  const weconnectIcons = [
    { name: 'Trusted Platform', image: TrustedImage },
    { name: 'Safe & Secure', image: SafeAndSecureImage },
    { name: 'Quick Assistance', image: QuickAssistanceImage },
  ];

  return (
    <div className="weConnectContainer">
      <div className="titleSection text-center">
        <h2>We Connect<br/> <span className='TitleText'> Buyers & Sellers</span> </h2>
       
        <p>
          DigitalB2BTrade is India's largest online B2B marketplace, connecting buyers with suppliers.
        </p>
      </div>

      <div className="row">
        {weconnectIcons.map((icon, index) => (
          <div className="col-md-4 " key={index}>
            <div className="iconCard">
              <img src={icon.image} alt={icon.name} className="iconImage" />
              <h5 className="iconTitle">{icon.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

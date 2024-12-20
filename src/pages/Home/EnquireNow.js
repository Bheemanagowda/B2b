import React, { useState } from 'react';
import "./styles/EnquiryNow.css";  // Import your external CSS if needed
import '../../styles/Responsive.css';
import backgroundImage from './Images/enquiry-now.jpg';
import Button from '../../components/Button/Button';
import '../../components/Button/styles/ViewAll.css'


export default function EnquireNow() {
  const [product, setProduct] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  // Inline style for background image
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload on form submission

    if (product.trim() === '' || mobileNo.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }

    // Mobile number validation (optional)
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobileNo)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    alert(`Product: ${product}, Mobile No: ${mobileNo}`);
    
    // Reset form fields
    setProduct('');
    setMobileNo('');
  };

  return (
    <div className="enquireNowContainer" style={backgroundStyle}>
      <h2>Enquire Now</h2>
      <form onSubmit={handleSubmit} className="enquireForm">
        <div className="formGroup">
          <input
            type="text"
            id="productInput"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Enter Product"
            required
          />
        </div>
        <div className="formGroup">
          <input
            type="tel"
            id="mobileNoInput"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            placeholder="Enter Mobile No"
            required
          />
        </div>
        <Button
          label="Submit"
          type="submit"  // Use type="submit" for button submission
          style={{
            display: "flex",
            padding: "6px 34px",
            backgroundColor: "#46a695",
            color: "white",
            width: "120px",
            alignItems: "center",
            border: "1px solid #46a695",
            borderRadius: "2px",
            fontSize: "16px",
            fontWeight: "400"
          }}
        />
      </form>
    </div>
  );
}

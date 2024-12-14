import React from 'react';
import '../ButtonComponents/styles/ViewAll.css';  // Import your CSS file

export default function ViewAll({ to, text, className, style }) {
  const handleClick = () => {
    // Navigate logic here if using react-router
  };

  return (
    <button 
      onClick={handleClick} 
      className={`view-all-button ${className || ''}`}  // Add the passed className to the button
      style={style}>
      {text || 'View All'}  {/* Default text is 'View All' if no text prop is passed */}
    </button>
  );
}

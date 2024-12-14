import React from 'react'
import ElectronicsAndElectricalProducts from './ElectronicsAndElectricalProducts.js'
import ElectronicsAndElectricalCategoryList from './ElectronicsAndElectricalCategoryList.js';

export default function ElectronicsAndElectrical() {
  return (
    <div className='pb-80'>
      <div className='container'>
        <div className='row'>
        <div className='col-md-3'><ElectronicsAndElectricalCategoryList/></div>
        <div className='col-md-9'><ElectronicsAndElectricalProducts/></div>
      
    </div>
    </div>

    </div>
    
  )
}


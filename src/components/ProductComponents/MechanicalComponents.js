import React from 'react'
import MechanicalComponentsProducts from './MechanicalComponentsProducts';
import MechanicalComponentsCategoryList from './MechanicalComponentsCategoryList'

export default function MechanicalComponents() {
  return (
    <div className='pb-80'>
    <div className='container'>
    <div className='row'>
            <div className='col-md-3'>
                <MechanicalComponentsCategoryList/> 

            </div>
            <div className='col-md-9'>
                <MechanicalComponentsProducts/> 

            </div>


        </div>
    </div>
      
    </div>
  )
}

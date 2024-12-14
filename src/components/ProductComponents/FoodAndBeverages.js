import React from 'react'
import FoodAndBeveragesProducts from './FoodAndBeveragesProducts.js'
import FoodAndBeverageCategoryList from './FoodAndBeverageCategoryList.js'


export default function FoodAndBeverages() {
  return (
    <div className='pb-80'>
        <div className='container'>
    <div className='row'>
            <div className='col-md-3'>
                <FoodAndBeverageCategoryList/> 

            </div>
            <div className='col-md-9'>
                <FoodAndBeveragesProducts/> 

            </div>


        </div>
    </div>
    </div>
  )
}

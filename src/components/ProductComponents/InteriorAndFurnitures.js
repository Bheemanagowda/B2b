import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included
import InteriorFurnituresCategoryList from './InteriorFurnituresCategoryList';
import InteriorAndFurnituresProducts from './InteriorAndFurnituresProducts';
import '../../styles/Customize.css'

export default function InteriorAndFurnitures() {
  return (
    <div className='pb-80'>
    <div className='container'>
    <div className='row'>
            <div className='col-md-3'>
                <InteriorFurnituresCategoryList/> 

            </div>
            <div className='col-md-9'>
                <InteriorAndFurnituresProducts/> 

            </div>


        </div>
    </div>
      
    </div>
  )
}

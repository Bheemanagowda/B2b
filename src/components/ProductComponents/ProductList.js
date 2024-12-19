import React from 'react'

export default function ProductList({image,name,}) {
  return (
    <div className='categoryItem'>
        <img src={image} alt={name} className="categoryIcon img-fluid" />
        <h3 className="categoryName">{name}</h3>
     

      
    </div>
  )
}

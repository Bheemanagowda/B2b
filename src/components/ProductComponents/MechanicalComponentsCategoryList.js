import React from 'react'
import ViewAll from '../ButtonComponents/ViewAll';
import RightArrowIcon from '../../assets/images/vector.svg';
import '../../styles/Product.css'

export default function MechanicalComponentsCategoryList() {
    const mechanicalComponentsCategories = [
        { name: 'Industrial Valves', path: '/industrial-valves' },
    { name: 'Gearbox', path: '/gearbox' },
    { name: 'Industrial Fasteners', path: '/industrial-fasteners' },
    { name: 'Bearings', path: '/bearings' },
    { name: 'Packaged Drinking Water', path: '/packaged-drinking-water' },
      ];
  return (
    <div>
         <div className="BgFurniture">
    <h2 className="Title">Mechanical Components</h2>
    <ul >
      { mechanicalComponentsCategories.map((category, index) => (
        <li key={index} >
          <img src={RightArrowIcon} className="RightArrow" alt="arrow icon" />
          <a href={category.path} className="categoryLink">
            {category.name}
          </a>
        </li>
      ))}
    </ul>
    <ViewAll />
  </div>
      
    </div>
  )
}

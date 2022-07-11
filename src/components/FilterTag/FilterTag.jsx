import React from 'react'
import "./FilterTag.scss"
import performanceMoney from "../../assets/images/performance-money-icon.svg"
import handshake from "../../assets/images/handshake-icon.svg"
import paintingPalette from "../../assets/images/painting-palette-icon.svg"
import phoneWrite from "../../assets/images/phone-write-icon.svg"
import carActions from "../../assets/images/car-actions-icon.svg"
import fileCode from "../../assets/images/file-code-icon.svg"


const FilterTag = () => {
  return (
    <div className='filter-tag'> trial
      <span className='filter-tag__item'>All</span>
      <span className='filter-tag__item'>finance</span>
      <span className='filter-tag__item'>Business</span>
      <span className='filter-tag__item'>Design</span>
      <span className='filter-tag__item'>Digital Marketing</span>
      <span className='filter-tag__item'>Engineering</span>
      <span className='filter-tag__item'>Programming</span>

    </div>
  )
}

export default FilterTag
import React from 'react'
import FilterTag from '../../components/FilterTag/FilterTag.jsx';

// path: /pathways

const PathwaysMenu = () => {

  const filterArray = (event) =>{
    console.log(event.target.id);
  }

  return (
    <div>PathwaysMenu
      <FilterTag filterArray = {filterArray}/>
    </div>
    
  )
}

export default PathwaysMenu
import React from 'react';
import search from "./../../assets/images/search.svg";
import "./SearchBar.scss"

const SearchBar = ({handleChange}) => {

  return (
    <div className='search-bar'>
        <img className='search-bar__image' src={search} alt="search icon" />
        <label className='search-bar__label' htmlFor="search">Search</label>
        <input className='search-bar__input' placeholder='Search for pathways, articles...' type="text" id="search" onInput={handleChange}/>
    </div>
  )
}

export default SearchBar
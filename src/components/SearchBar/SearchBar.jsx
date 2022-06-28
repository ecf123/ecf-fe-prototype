import React from 'react';
import search from "./../../assets/images/search.svg";
import "./SearchBar.scss"

const SearchBar = ({handleChange}) => {

  return (
    <form className='search-bar'onSubmit= {handleChange}>
        <input type="image" className='search-bar__image' src={search}  alt="search icon" />
        <label className='search-bar__label' htmlFor="search">Search</label>
        <input className='search-bar__input' name="search" placeholder='Search for pathways, articles...' type="text" id="search"/>
    </form>
  )
}

export default SearchBar
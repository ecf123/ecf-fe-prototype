import React from 'react';
import search from "./../../assets/images/search.svg";
import "./SearchBar.scss"

const SearchBar = ({handleInput}) => {

  return (
    <form className='search-bar' onSubmit={handleInput}>
        <label className='search-bar__label' htmlFor='search-button'>Search button</label>
        <input type="image" className='search-bar__image' id="search-button" src={search}  alt="search icon" />
        <label className='search-bar__label' htmlFor="search">Search</label>
        <input className='search-bar__input' name="search" placeholder='Search for pathways, articles...' type="text" id="search"/>
    </form>
  )
}

export default SearchBar;
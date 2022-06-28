import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'

const SearchContainer = () => {

  const arr = [
    "apple",
    "orange",
    "banana",
    "pear",
    "jackfruit",
    "passionfruit",
    "melon",
    "lemon",
    "lime",
    "watermelon",
    "mango"
  ]

 

  const [searchTerm, setSearchTerm] = useState("");
  const [arrayJsx, setArrayJsx] = useState([]);

  setArrayJsx(arr.map((element, index) =>{
    return <p key={index}>{element}</p>
  }))
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.search.value);
    console.log(event.target.search.value)
    event.preventDefault();
    
    const filterArray = arr.filter((element)=> {
      return element.includes(event.target.search.value);

    })
   

  }


  return (
    <div>
      <SearchBar handleChange = {handleSearchChange}/>
      {searchTerm &&  <h1>Search results for "{searchTerm}"</h1>}
      {arrayJsx}
    </div>
  )
}

export default SearchContainer
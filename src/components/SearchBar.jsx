import React from 'react';

export default function SearchBar({onSearch}) {

  function handleOnSearch() {
    if(typeof onSearch === 'function') {
      const input = document.getElementById("search-input");
      onSearch(input.value);
    }
  }

  return (
  <div>
    <input type="text" id="search-input" placeholder="Search"/>
    <button onClick={handleOnSearch} >Agregar</button>
  </div>
  )
};
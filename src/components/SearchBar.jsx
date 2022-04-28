import React from 'react';
import Styles from './Search.module.css';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import BtnStyle from './Card.module.css'

export default function SearchBar({onSearch}) {

  function handleOnSearch(event) {
    event.preventDefault();
    if(typeof onSearch === 'function') {
      const input = document.getElementById("search-input");
      onSearch(input.value);
      input.value = '';
    }
  }

  return (
  <form className={Styles.Search} onSubmit={handleOnSearch}>
    <input type="text" id="search-input" placeholder="Search"/>
    <button className={BtnStyle.closeBtn} type="submit" ><FaSearch /></button>
  </form>
  )
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
}
import React from 'react';
import Styles from './Search.module.css';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import BtnStyle from './Card.module.css'

export default function SearchBar({onSearch}) {

  function handleOnSearch() {
    if(typeof onSearch === 'function') {
      const input = document.getElementById("search-input");
      onSearch(input.value);
    }
  }

  return (
  <div className={Styles.Search}>
    <input type="text" id="search-input" placeholder="Search"/>
    <button className={BtnStyle.closeBtn} onClick={handleOnSearch} ><FaSearch /></button>
  </div>
  )
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
}
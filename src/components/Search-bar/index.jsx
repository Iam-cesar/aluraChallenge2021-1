import React from 'react';
import './style.css';

const SearchBar = () => {
  return (
    <div className="nav__search-container">
      <input
        className="nav__search"
        typesubmit='text'
        placeholder='Busque por algo'
      />
    </div>
  );
};

export default SearchBar;

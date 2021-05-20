import React from 'react';
import './style.css';

const SearchBar = (props) => { 
  return(
    <div className="nav__search-container">
      {props.children}
    </div>
  );
};

export default SearchBar;
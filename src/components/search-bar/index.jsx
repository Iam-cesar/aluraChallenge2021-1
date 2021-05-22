import React from 'react';
import './style.css';
import Input from '../input';

const SearchBar = () => { 
  return(
    <div className="nav__search-container">
      <Input className="nav__search" typeSubmit='text' placeholder='Busque por algo' />
    </div>
  );
};

export default SearchBar;
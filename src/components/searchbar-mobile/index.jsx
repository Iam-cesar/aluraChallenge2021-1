import React from 'react';
import './style.css';

const SearchBarMobile = ({open}) => {
  return(
    <div className='search-bar-mobile__container' onClick={() => {open()}}>
      <div className='search-bar-mobile__img-menu-container'></div>
    </div>
  )
};

export default SearchBarMobile;
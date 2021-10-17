import React, { useState } from 'react';
import './style.css';

const SearchBarMobile = () => {
  const [search, setSearch] = useState(false);

  const handleSeachBar = (state, setSearch) => {
    let navbar = document.querySelector('.nav__search-container');
    let logo = document.querySelector('.nav__logo-container');
    let image = document.querySelector('.search-bar-mobile__img-menu-container')

    if (!state) {
      setSearch(state)
      navbar.classList.toggle('nav__active');
      logo.classList.toggle('nav__logo-active');
      image.classList.toggle('search-bar-mobile__is-active');
    }
  }

  return (
    <div
      className='search-bar-mobile__container'
      onClick={() => { handleSeachBar(search, setSearch) }}
    >
      <div className='search-bar-mobile__img-menu-container'></div>
    </div>
  )
};
export default SearchBarMobile;

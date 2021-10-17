import React, { useState } from 'react';
import './style.css';

const Perfil = ({ children, className, hamburguerClass }) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = (state, setState) => {
    let element = document.querySelector('.nav__img-menu-container');
    let menuMobile = document.querySelector('.menu-mobile__container');

    if (!state) {
      setState(state)
      element.classList.toggle('menu__is-active');
      menuMobile.classList.toggle('menu-mobile__show-menu');
    }
  }

  return (
    <div className={className} >
      {children}
      <div className={`nav__menu-hamburguer ${hamburguerClass}`} >
        <div
          className='nav__img-menu-container'
          onClick={() => handleMenu(menu, setMenu)}
        ></div>
      </div>
    </div>
  );
};
export default Perfil;

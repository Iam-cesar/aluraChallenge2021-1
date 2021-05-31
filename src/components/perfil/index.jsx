import React from 'react';
import './style.css';

const Perfil = ({ open, children, className, hamburguerClass }) => {
  return (
    <div className={className} >
      {children}
      <div className={`nav__menu-hamburguer ${hamburguerClass}`} >
        <div className='nav__img-menu-container' onClick={() => open()}></div>
      </div>
    </div>
  );
};

export default Perfil;
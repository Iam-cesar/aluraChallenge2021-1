import React from 'react';
import './style.css';

const Perfil = ({open, children}) => { 
  return(
    <div className="nav__perfil-container" >
    {children}
    <div className='nav__menu-hamburguer' >
      <div className="nav__img-menu-container" onClick={() => open()}></div>
    </div>
    </div>
  );
};

export default Perfil;
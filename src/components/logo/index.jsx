import React from 'react';
import ImgLogo from '../../assets/img/logo.png';
import './style.css';

const Logo = () => { 
  return(
    <div className="nav__logo-container">
      <img className="nav__logo-image" src={ImgLogo} alt="Logotipo alura-dev" />
    </div>
  );
};

export default Logo;
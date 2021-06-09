import React from 'react';
import ImgLogo from '../../assets/img/logo.png';
import './style.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className="nav__logo-container">
      <img className="nav__logo-image" src={ImgLogo} alt="Logotipo alura-dev" />
    </Link >
  );
};

export default Logo;
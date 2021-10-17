import React from 'react';
import './style.css';

import MenuPrincipal from '../../components/Menu-principal';
import Perfil from '../../components/Perfil';
import Usuario from '../../components/Usuario';

const MenuMobile = ({ nomeUsuario, PerfilImg }) => {
  return (
    <div
      className="menu-mobile__container">
      <MenuPrincipal
        className='menu-mobile__menu' />
      <div
        className='menu-mobile__dividing-line menu-mobshow-menu'></div>
      <Perfil
        hamburguerClass='menu-mobile__perfil-hamburguer'
        className="menu-mobile__perfil-container">
        <Usuario
          className='nav__perfil-usuario menu-mobile__hamburguer-perfil-class'
          nomeUsuario={nomeUsuario}
          imgPerfil={PerfilImg} />
      </Perfil>
    </div>
  );
};

export default MenuMobile;

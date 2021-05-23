import React from 'react';
import './style.css';

import MenuPrincipal from '../menu-principal';
import Perfil from '../perfil';
import Usuario from '../usuario';

const MenuMobile = ({nomeUsuario, PerfilImg}) => {
  return(
    <div className="menu-mobile__container">
      <MenuPrincipal />
      <Perfil>
        <Usuario nomeUsuario={nomeUsuario} imgPerfil={PerfilImg} />
      </Perfil>
    </div>
  );
};

export default MenuMobile;
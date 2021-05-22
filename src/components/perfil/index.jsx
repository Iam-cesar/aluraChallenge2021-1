import React from 'react';
import './style.css';

const Perfil = ({nomeUsuario, imgPerfil}) => { 
  return(
    <div className="width">

    <a href="#/" className="nav__perfil-usuario">
      <div className="nav__perfil-img-container">
        <img className="nav__perfil-img" src={imgPerfil} alt="" />
      </div>
      <div className="nav__nome-usuario-container">
        <span className="nav__nome-usuario">{nomeUsuario}</span>
      </div>
    </a>
    </div>
  );
};

export default Perfil;
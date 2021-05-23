import React from 'react';
import './style.css';

const Usuario = ({ nomeUsuario, imgPerfil }) => {
  return (
    <a href="#/" className="nav__perfil-usuario">
      <div className="nav__perfil-img-container">
        <img className="nav__perfil-img" src={imgPerfil} alt="" />
      </div>
      <div className="nav__nome-usuario-container">
        <span className="nav__nome-usuario">{nomeUsuario}</span>
      </div>
    </a>
  );
}

export default Usuario;
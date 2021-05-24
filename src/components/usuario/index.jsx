import React from 'react';
import './style.css';

const Usuario = ({ nomeUsuario, imgPerfil, className }) => {
  return (
    <div className={className}>
      <div className="nav__perfil-img-container">
        <img className="nav__perfil-img" src={imgPerfil} alt="perfil do usuario" />
      </div>
      <div className="nav__nome-usuario-container">
        <span className="nav__nome-usuario">{nomeUsuario}</span>
      </div>
    </div>
  );
}

export default Usuario;
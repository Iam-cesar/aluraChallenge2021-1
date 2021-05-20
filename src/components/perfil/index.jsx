import React from 'react';
import './style.css';

const Perfil = (props) => { 
  return(
    <a href="#/" className="nav__perfil-usuario">
      <div className="nav__perfil-img-container">
        <img className="nav__perfil-img" src={props.imgPerfil} alt="" />
      </div>
      <div className="nav__nome-usuario-container">
        <span className="nav__nome-usuario">{props.nomeUsuario}</span>
      </div>
    </a>
  );
};

export default Perfil;
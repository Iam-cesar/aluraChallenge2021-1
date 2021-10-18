import { UserContext } from 'context/user';
import React, { useContext, useEffect } from 'react';
import './style.css';
import PerfilImg from 'assets/img/perfil.jpg';

const Usuario = ({ className }) => {
  const { userName, setUserName, userImage, setUserImage } = useContext(UserContext)

  useEffect(() => {
    setUserImage(PerfilImg)
    setUserName('Cesar Augusto')
  }, [setUserName, setUserImage])

  return (
    <div className={className}>
      <div className="nav__perfil-img-container">
        <img
          className="nav__perfil-img"
          src={userImage}
          alt="perfil do usuario" />
      </div>
      <div className="nav__nome-usuario-container">
        <span className="nav__nome-usuario">{userName}</span>
      </div>
    </div>
  );
}

export default Usuario;

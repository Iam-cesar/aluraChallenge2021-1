import React from 'react';
import './style.css';

import { ReactComponent as Like } from '../../assets/img/likes.svg';
import { ReactComponent as Coments } from '../../assets/img/coments.svg';


const SocialMedia = ({ PerfilImg, nomeUsuario, like, id }) => {

  return (
    <div className='projetos__likes'>

      <div className='projetos__likes-container-iteracoes-social'>

        <div className='projetos__container-interacoes'>
          <Coments className='projetos__comment-icon'></Coments>
          <span className='projetos__contador'>0</span>
        </div>

        <div id={id} className='projetos__container-interacoes like' onClick={(event) => like({ id, event })}>
          <Like className='projetos__like-icon'></Like>
          <span className='projetos__contador projetos__contador-likes'>0</span>
        </div>
      </div>

      <div className='projetos__likes-container-usuario'>

        <div className="nav__perfil-img-container">
          <img className="nav__perfil-img" src={PerfilImg} alt="perfil do usuario" />
        </div>

        <div className="nav__nome-usuario-container">
          <span className="nav__nome-usuario">{`@${nomeUsuario}`}</span>
        </div>

      </div>
    </div>
  );
}

export default SocialMedia;
import React from 'react';
import './style.css';

// images
import { ReactComponent as Like } from '../../assets/img/likes.svg';
import { ReactComponent as Coments } from '../../assets/img/coments.svg';

const SocialMedia = ({ PerfilImg, nomeUsuario }) => {
  return (
    <div className='projetos__likes'>

      <div className='projetos__likes-container-iteracoes-social'>

        <div className='projetos__container-interacoes'>
          <div className='projetos__likes-image-coments'>
            <Coments />
          </div>
          <span className='projetos__contador'>120</span>
        </div>

        <div className='projetos__container-interacoes'>

          <div className='projetos__likes-image-likes'>
            <Like onClick={() => {
            const like = document.querySelector('.projetos__likes-image-likes > svg > path')
            like.classList.toggle('svg-like')
          }} />
          </div>
          <span className='projetos__contador'>50</span>
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
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import SocialMedia from '../../components/social-media';
import TextEditor from '../../components/text-editor';

const Projetos = ({ projetos, nomeUsuario, PerfilImg, like, apagar }) => {

  return (
    projetos.length === 0 ?

      <h1 className='projetos__length-zero'>Parece que você ainda não adicionou nenhum projeto</h1>
      :

      <div className='projetos__container'>{
        projetos.map((item, index) => {
          return (
            <div
              className='projetos__item'
              key={index}
            >
              <Link to={`/editor/${index}`} style={{ textDecoration: 'none' }}>
                <TextEditor bgColor={item.bgColor} className='projetos__textarea' textValue={item.textValue ?? ''} />
              </Link>

              <div className='projetos__info'>
                <div className="projetos__container-titulo-delete">
                  <h5 className='projetos__titulo'>{item.titulo ?? ''}</h5>
                  <span id={index} className="projetos__delete" onClick={e => apagar(e)}></span>
                </div>
                <p className='projetos__descricao'>{item.descricao ?? ''}</p>
                <SocialMedia id={index} PerfilImg={PerfilImg} nomeUsuario={nomeUsuario} like={id => like(id)} />
              </div>
            </div>
          );

        })
      }</div>
  )
};

export default Projetos;
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


// components
import SocialMedia from '../../components/social-media';
import TextEditor from '../../components/text-editor';

const Projetos = ({ projetos, nomeUsuario, PerfilImg, like, likesContador, apagar }) => {
  return (
    <div className='projetos__container'>{
      projetos.map((item, index) => {
        return (
          <div
            className='projetos__item'
            key={index}
          >
            <Link to='/' style={{ textDecoration: 'none' }}>
              <TextEditor bgColor={item.bgColor} className='projetos__textarea' textValue={item.textValue ?? ''} />
            </Link>

            <div className='projetos__info'>
              <div className="projetos__container-titulo-delete">
                <h5 className='projetos__titulo'>{item.titulo ?? ''}</h5>
                <span id={index} className="projetos__delete" onClick={e => apagar(e)}></span>
              </div>
              <p className='projetos__descricao'>{item.descricao ?? ''}</p>
              <SocialMedia PerfilImg={PerfilImg} nomeUsuario={nomeUsuario} likesContador={likesContador} like={e => like(e)} />
            </div>
          </div>
        );
      })
    }</div>
  )
};

export default Projetos;
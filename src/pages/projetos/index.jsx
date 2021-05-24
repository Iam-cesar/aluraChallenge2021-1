import React from 'react';
import './style.css';

import TextEditor from '../../components/text-editor';

const Projetos = ({ projetos }) => {
  return (
    <div className='projetos__container'>{
      projetos.map((item, index) => {
        return (
          <div className='projetos__item' key={index}>
            <TextEditor bgColor={item.bgColor} className='projetos__textarea' textValue={item.textValue ?? ''} />
            <div className='projetos__info'>
              <h5 className='projetos__titulo'>{item.titulo ?? ''}</h5>
              <p className='projetos__descricao'>{item.descricao ?? ''}</p>
            </div>
          </div>
        );
      })
    }</div>

  )
};

export default Projetos;
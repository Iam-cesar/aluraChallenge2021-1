import React from 'react';
import './style.css';

const Botao = (props) => {
  return (
    <button className="menu__botao-container">
      <div className="menu__botao-img">{props.imgBotao}</div>
      <div className="menu__botao-texto">
        <span>{props.textoBotao}</span>
      </div>
    </button>
  );
};

export default Botao;
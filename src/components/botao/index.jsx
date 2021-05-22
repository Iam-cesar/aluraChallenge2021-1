import React from 'react';
import './style.css';

const Button = ({imgBotao, textoBotao}) => {
  return (
    <button className="menu__botao-container">
      <div className="menu__botao-img">{imgBotao}</div>
      <div className="menu__botao-texto">
        <span>{textoBotao}</span>
      </div>
    </button>
  );
};

export default Button;
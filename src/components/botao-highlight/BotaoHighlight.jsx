import React from 'react';
import './style.css';
import Button from '../botao';

const BotaoHighlight = () => {
  const [highlight] = ['Visualizar com highlight'];
  return (
    <Button className='highlight__botao-container'>
      <div className="menu__botao-texto">{highlight}</div>
    </Button>
  );
};

export default BotaoHighlight;
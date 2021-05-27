import React from 'react';
import './style.css';
import Button from '../botao';

const BotaoHighlight = ({fnHighlight}) => {
  const [highlight] = ['Visualizar com highlight'];

  return (
    <Button type='button' className='highlight__botao-container'>
      <div className="menu__botao-texto-highlight" onClick={() => fnHighlight()}>{highlight}</div>
    </Button>
  );
};

export default BotaoHighlight;
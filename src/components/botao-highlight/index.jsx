import React from 'react';
import './style.css';
import Button from 'components/Botao';
import hljs from 'highlight.js/lib/core';

const BotaoHighlight = () => {
  const [highlight] = ['Visualizar com highlight'];

  function handleHighlight () {
    hljs.configure({
      languages: ['javascript', 'python', 'php', 'c'],
    });

    hljs.highlightAll();
  }

  return (
    <Button
      type='button'
      className='highlight__botao-container'>
      <div
        className="menu__botao-texto-highlight"
        onClick={handleHighlight}
      >
        {highlight}
      </div>
    </Button>
  );
};

export default BotaoHighlight;

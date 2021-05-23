import React from 'react';
import './style.css';

import TextEditor from '../../components/text-editor';
import MenuProjeto from '../../components/menu-projeto';
import MenuPersonalizacao from '../../components/menu-personalizacao';
import BotaoHighlight from '../../components/botao-highlight'

const Editor = () => {
  return (
    <>
      <div className='main__wrapper'>
        <TextEditor />
        <BotaoHighlight />
      </div>
      <div className='side__wrapper'>
        <MenuProjeto />
        <MenuPersonalizacao />
      </div>
    </>
  );
}

export default Editor;
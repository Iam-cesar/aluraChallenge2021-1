import React from 'react';
import './style.css';

import TextEditor from '../../components/text-editor';
import MenuProjeto from '../../components/menu-projeto';
import MenuPersonalizacao from '../../components/menu-personalizacao';
import BotaoHighlight from '../../components/botao-highlight'

const Editor = ({color, borderColor, fnHighlight, save, defaultColor }) => {
  return (
    <>
      <div className='main__wrapper'>
        <TextEditor bgColor={borderColor} />
        <BotaoHighlight fnHighlight={fnHighlight} />
      </div>
      <div className='side__wrapper'>
        <MenuProjeto />
        <MenuPersonalizacao defaultColor={defaultColor} save={save} color={color} />
      </div>
    </>
  );
}

export default Editor;
import React from 'react';
import './style.css';

import TextEditor from '../../components/text-editor';
import MenuProjeto from '../../components/menu-projeto';
import MenuPersonalizacao from '../../components/menu-personalizacao';
import BotaoHighlight from '../../components/botao-highlight'

const Editor = ({ color, borderColor, fnHighlight, salvar, defaultColor, exportar}) => {
  return (
    <>
      <div className='main__wrapper'>
        <TextEditor bgColor={borderColor}>
          <div className="text-editor__exportar">
            <select className="text-editor__formatos-exportar" name="formatos" id="formatos">
              <option value="jpg">JPG</option>
              <option value="png">PNG</option>
              <option value="svg">SVG</option>
            </select>
            <button onClick={() => exportar()} className="text-editor__botao-exportar">Exportar</button>
          </div>
        </TextEditor>
        <BotaoHighlight fnHighlight={fnHighlight} />
      </div>
      <div className='side__wrapper'>
        <MenuProjeto />
        <MenuPersonalizacao defaultColor={defaultColor} salvar={salvar} color={color} />
      </div>
    </>
  );
}

export default Editor;
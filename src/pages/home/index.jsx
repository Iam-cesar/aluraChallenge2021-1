import React from 'react';
import './style.css';
import TextEditor from 'components/Text-editor';
import MenuProjeto from 'components/Menu-projeto';
import MenuPersonalizacao from 'components/Menu-personalizacao';
import BotaoHighlight from 'components/Botao-highlight'

const Editor = ({ color, borderColor, defaultColor, exportar, optionBtn }) => {
  return (
    <>
      <div className='main__wrapper'>
        <TextEditor bgColor={borderColor}>
          <div className="text-editor__exportar">
            <select
              className="text-editor__formatos-exportar"
              name="formatos"
              id="formatos">
              <option value="jpg">JPG</option>
              <option value="png">PNG</option>
              <option value="svg">SVG</option>
            </select>
            <button
              onClick={() => exportar()}
              className="text-editor__botao-exportar"
            >Exportar</button>
          </div>
        </TextEditor >
        <BotaoHighlight />
      </div>
      <div className='side__wrapper'>
        <MenuProjeto />
        <MenuPersonalizacao
          optionBtn={optionBtn}
          defaultColor={defaultColor}
          color={color} />
      </div>
    </>
  );
}

export default Editor;

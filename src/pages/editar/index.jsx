import React from 'react';
import './style.css';
import { useParams } from 'react-router-dom';

import TextEditor from '../../components/text-editor';
import MenuProjeto from '../../components/menu-projeto';
import MenuPersonalizacao from '../../components/menu-personalizacao';
import BotaoHighlight from '../../components/botao-highlight'
import { editar } from '../../functions';

const Editar = ({ color, fnHighlight, exportar, optionBtn, state, setState, temas }) => {

  const { id } = useParams()

  return (
    <>
      <div className='main__wrapper'>
        <TextEditor textValue={state[id].textValue} state={state} bgColor={state[id].bgColor} id={id ? parseInt(id) : null} >
          <div className="text-editor__exportar">
            <select className="text-editor__formatos-exportar" name="formatos" id="formatos">
              <option value="jpg">JPG</option>
              <option value="png">PNG</option>
              <option value="svg">SVG</option>
            </select>
            <button onClick={() => exportar()} className="text-editor__botao-exportar">Exportar</button>
          </div>
        </TextEditor >
        <BotaoHighlight fnHighlight={fnHighlight} />
      </div>
      <div className='side__wrapper'>
        <MenuProjeto editarCardDescricao={state[id].descricao} editarCardTitulo={state[id].titulo} />
        <MenuPersonalizacao temas={temas} optionBtn={optionBtn} editar={() => editar(id, state, setState)} defaultColor={state[id].bgColor} color={color} />
      </div>
    </>
  );
}

export default Editar;
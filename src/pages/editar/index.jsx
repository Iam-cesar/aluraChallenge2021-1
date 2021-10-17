import React from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import TextEditor from 'components/Text-editor';
import MenuProjeto from 'components/Menu-projeto';
import MenuPersonalizacao from 'components/Menu-personalizacao';
import BotaoHighlight from 'components/Botao-highlight'
import { useProjects } from 'hooks/useProjects';

const Editar = ({ color, exportar, optionBtn, temas }) => {

  const { id } = useParams()
  const { projects } = useProjects()

  return (
    <>
      <div className='main__wrapper'>
        <TextEditor
          textValue={projects[id].textValue}
          state={projects}
          bgColor={projects[id].bgColor}
          id={id ? parseInt(id) : null}
        >
          <div className="text-editor__exportar">
            <select
              className="text-editor__formatos-exportar"
              name="formatos"
              id="formatos"
            >
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
        <MenuProjeto
          editarCardDescricao={projects[id].descricao}
          editarCardTitulo={projects[id].titulo} />
        <MenuPersonalizacao
          temas={temas}
          optionBtn={optionBtn}
          defaultColor={projects[id].bgColor}
          color={color} />
      </div>
    </>
  );
}

export default Editar;

import React, { useEffect } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import TextEditor from 'components/Text-editor';
import MenuProjeto from 'components/Menu-projeto';
import MenuPersonalizacao from 'components/Menu-personalizacao';
import BotaoHighlight from 'components/Botao-highlight'
import { useProjects } from 'hooks/useProjects';
import CodeToImage from 'components/CodeToImage';
import Button from 'components/Botao';
import { Link } from 'react-router-dom';
import useColorPick from 'hooks/useColorPicker';


const Editar = () => {

  const { id } = useParams()
  const { projects, setProjects } = useProjects()
  const { setColor } = useColorPick()

  useEffect(() => {
    const colorPicker = document.querySelector('.menu-personalizacao__color-picker')
    colorPicker.value = projects[id].bgColor
  }, [projects, setColor, id])

  function handleEditProject () {
    const texto = document.querySelector('.text-editor')
    const titulo = document.querySelector('.menu-projeto__input')
    const descricao = document.querySelector('.menu-projeto__descricao')
    const colorPicker = document.querySelector('.menu-personalizacao__color-picker')
    projects[id] = {
      textValue: texto.innerText,
      titulo: titulo.value,
      descricao: descricao.value,
      bgColor: colorPicker.value
    }
    setProjects(projects)
  }

  return (
    <>
      <div className='main__wrapper'>
        <TextEditor
          textValue={projects[id].textValue}
          state={projects}
          bgColor={projects[id].bgColor}
          id={id ? parseInt(id) : null}
        >
          <CodeToImage />
        </TextEditor >
        <BotaoHighlight />
      </div>
      <div className='side__wrapper'>
        <MenuProjeto
          editarCardDescricao={projects[id].descricao}
          editarCardTitulo={projects[id].titulo} />
        <MenuPersonalizacao>
          <Link to='/projetos'>
            <Button className='menu-personalizacao__botao-salvar' >
              <span onClick={handleEditProject}></span>
            </Button>
          </Link>
        </MenuPersonalizacao>
      </div>
    </>
  );
}

export default Editar;

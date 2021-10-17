import React, { useContext } from 'react';
import './style.css';
import Menu from '../../components/Menu';
import TitleMenu from '../../components/Title-menu';
import Button from '../../components/Botao';
import { Link } from 'react-router-dom';
import { ProjectsContext } from '../../context/projects';

const MenuPersonalizacao = ({ color, optionBtn, defaultColor }) => {

  const options = ['javascript', 'python', 'C', 'php'];
  const { projects, setProjects } = useContext(ProjectsContext)

  const handleEditProject = (id) => {
    let texto = document.querySelector('.text-editor')
    let titulo = document.querySelector('.menu-projeto__input')
    let descricao = document.querySelector('.menu-projeto__descricao')
    let colorPicker = document.querySelector('.menu-personalizacao__color-picker')
    projects[id] = {
      textValue: texto.innerText,
      titulo: titulo.value,
      descricao: descricao.value,
      bgColor: colorPicker.value
    }
    setProjects(projects)
  }

  const handleSaveProject = () => {
    let texto = document.querySelector('.text-editor')
    let titulo = document.querySelector('.menu-projeto__input')
    let descricao = document.querySelector('.menu-projeto__descricao')
    let colorPicker = document.querySelector('.menu-personalizacao__color-picker')
    let botaoSalvar = document.querySelector('.menu-personalizacao__botao-salvar')

    if (texto.innerText !== '' && titulo.value !== '' && descricao.value !== '') {
      setProjects([{
        textValue: `${texto.innerText}`,
        titulo: `${titulo.value}`,
        descricao: `${descricao.value}`,
        bgColor: `${colorPicker.value}`,
      }, ...projects])

      texto.innerText = ''
      titulo.value = ''
      descricao.value = ''
      botaoSalvar.classList.remove('menu-personalizacao__botao-salvar')
      botaoSalvar.classList.add('botao__salvar--confirm')
    }

    setTimeout(() => {
      botaoSalvar.classList.remove('botao__salvar--confirm')
      botaoSalvar.classList.add('menu-personalizacao__botao-salvar')
    }, 2000)
  }

  const optionButton = {
    'salvar':
      <Button
        className='menu-personalizacao__botao-salvar' >
        <span onClick={handleSaveProject}        >
        </span>
      </Button>,
    'editar':
      <Link to='/projetos'>
        <Button className='menu-personalizacao__botao-salvar' >
          <span onClick={e => handleEditProject(e.target.id)}></span>
        </Button>
      </Link>,
  }

  return (
    <Menu className='menu-personalizacao__container'>
      <TitleMenu
        text='PERSONALIZACAO'
        className='menu-personalizacao__title' />
      <div className='personalizacao__options-selecao'>

        <select className='menu-personalizacao__options' >
          {options.map((linguagem, index) => {
            return (
              <option
                value={linguagem}
                key={index}
                className='menu-personalizacao__option'>{linguagem}
              </option>
            );
          })}
        </select>

        <div className='menu-personalizacao__color-picker-container'>
          <input
            type='color'
            className='menu-personalizacao__color-picker'
            defaultValue={defaultColor}
            onClick={() => color()} />
        </div>
      </div>
      {optionButton[optionBtn]}
    </Menu>
  );
};

export default MenuPersonalizacao;

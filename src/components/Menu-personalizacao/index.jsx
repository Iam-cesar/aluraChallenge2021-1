import React, { useContext } from 'react';
import './style.css';
import Menu from 'components/Menu';
import TitleMenu from 'components/Title-menu';
import Button from 'components/Botao';
import { ProjectsContext } from 'context/projects';
import ColorPicker from 'components/ColorPicker';

const MenuPersonalizacao = ({ children }) => {

  const options = ['javascript', 'python', 'C', 'php'];
  const { projects, setProjects } = useContext(ProjectsContext)


  const handleSaveProject = () => {
    const texto = document.querySelector('.text-editor')
    const titulo = document.querySelector('.menu-projeto__input')
    const descricao = document.querySelector('.menu-projeto__descricao')
    const colorPicker = document.querySelector('.menu-personalizacao__color-picker')
    const botaoSalvar = document.querySelector('.menu-personalizacao__botao-salvar')

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

        <ColorPicker />
      </div>
      {children
        ? children
        : <Button
          className='menu-personalizacao__botao-salvar' >
          <span onClick={handleSaveProject}        >
          </span>
        </Button>}
    </Menu>
  );
};

export default MenuPersonalizacao;

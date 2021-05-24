import React from 'react';
import './style.css';
import Menu from '../menu';
import TitleMenu from '../title-menu';
import Button from '../botao';

const MenuPersonalizacao = ({color}) => {

  const options = ['javascript', 'python', 'C', 'c++'];

  const [salvar] = ['Salvar projeto'];

  return (
    <Menu className='menu-personalizacao__container'>
      <TitleMenu text='PERSONALIZACAO' className='menu-personalizacao__title' />
      <div className='personalizacao__options-selecao'>
        <select className='menu-personalizacao__options'>
          {options.map((linguagem, index) => {
            return (
              <option value={linguagem} key={index} className='menu-personalizacao__option'>{linguagem}</option>
            );
          })}
        </select>
        <div className='menu-personalizacao__color-picker-container'>
          <input type='color' className='menu-personalizacao__color-picker' defaultValue='#6BD1FF' onClick={() => color()} />
        </div>
      </div>
      <Button className='menu-personalizacao__botao-salvar'>
        <span>{salvar}</span>
      </Button>
    </Menu>
  );
};

export default MenuPersonalizacao;
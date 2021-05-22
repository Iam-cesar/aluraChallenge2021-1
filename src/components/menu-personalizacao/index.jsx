import React from 'react';
import './style.css';
import Menu from '../menu';
import TitleMenu from '../title-menu';

const MenuPersonalizacao = () => {

  const options = ['javascript', 'python', 'C', 'c++']
  return (
    <Menu className='menu-personalizacao__container'>
      <TitleMenu text='PERSONALIZACAO' />
      <select className='menu-personalizacao__options'>
        {options.map((item, index) => {
          return (
            <option value={item} key={index} className='menu-personalizacao__option'>{item}</option>
          );
        })}
      </select>
    </Menu>
  );
};

export default MenuPersonalizacao;
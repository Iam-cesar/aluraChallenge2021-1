import React from 'react';
import './style.css';
import Menu from '../../components/Menu';
import Img from '../../components/Image';

import { NavLink } from 'react-router-dom';

import { ReactComponent as ImgCodeOff } from '../../assets/svg/codeoff.svg';
import { ReactComponent as ImgUsers } from '../../assets/svg/users.svg';

const MenuPrincipal = ({ children, className }) => {

  let [editor, comunidade] = ['Editor de codigo', 'Comunidade']

  return (
    <Menu>
      <div className={className}>
        {children}
        <NavLink
          exact
          activeClassName={'menu__botao-container-hover'}
          className="menu__link menu__botao-container"
          to='/'
        >
          <Img className="menu__botao-img" image={<ImgCodeOff />} />
          <div className="menu__botao-texto">
            <span>{editor}</span>
          </div>
        </NavLink>

        <NavLink
          activeClassName={'menu__botao-container-hover'}
          className="menu__link menu__botao-container"
          to='/projetos'
        >
          <Img className="menu__botao-img" image={<ImgUsers />} />
          <div className="menu__botao-texto">
            <span>{comunidade}</span>
          </div>
        </NavLink>
      </div>
    </Menu>
  );
};

export default MenuPrincipal;

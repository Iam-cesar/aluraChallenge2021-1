import React from 'react';
import './style.css';
import Menu from '../menu';
import Img from '../Img';

// router
import { NavLink } from 'react-router-dom';
// highlight.js
import hljs from 'highlight.js/lib/core.js';

import { ReactComponent as ImgCodeOff } from '../../assets/img/codeoff.svg';
import { ReactComponent as ImgUsers } from '../../assets/img/users.svg';

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
          onClick={() => {
            setTimeout(()=>{
              hljs.highlightAll()
            }, 100)
          }}
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
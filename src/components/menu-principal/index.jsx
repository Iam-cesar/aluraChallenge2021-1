import React from 'react';
import './style.css';
import Menu from '../menu';
import TitleMenu from '../title-menu';
import Button from '../botao';
import Img from '../Img';

// router
import { Link } from 'react-router-dom';

import { ReactComponent as ImgCodeOff } from '../../assets/img/codeoff.svg';
import { ReactComponent as ImgUsers } from '../../assets/img/users.svg';

const MenuPrincipal = () => {

  let [editor, comunidade] = ['Editor de codigo', 'Comunidade']

  return (
    <Menu>
      <div className="menu__container">
        <TitleMenu text="MENU" />

        <Link className="menu__link" to='/'>
          <Button className="menu__botao-container" >
            <Img className="menu__botao-img" image={<ImgCodeOff />} />
            <div className="menu__botao-texto">
              <span>{editor}</span>
            </div>
          </Button>
        </Link>

        <Link className="menu__link" to='/projetos'>
          <Button className="menu__botao-container" >
            <Img className="menu__botao-img" image={<ImgUsers />} />
            <div className="menu__botao-texto">
              <span>{comunidade}</span>
            </div>
          </Button>
        </Link>
      </div>
    </Menu>
  );
};

export default MenuPrincipal;
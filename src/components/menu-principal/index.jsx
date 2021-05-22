import React from 'react';
import './style.css';
import Menu from '../menu';
import TitleMenu from '../title-menu';
import Button from '../botao';
import Img from '../Img';

import { ReactComponent as ImgCodeOff } from '../../assets/img/codeoff.svg';
import { ReactComponent as ImgUsers } from '../../assets/img/users.svg';

const MenuPrincipal = () => {

  let [editor, comunidade] = ['Editor de codigo', 'Comunidade']

  return (
    <Menu>
      <TitleMenu text="MENU" />

      <Button className="menu__botao-container" >
        <Img className="menu__botao-img" image={<ImgCodeOff />} />
        <div className="menu__botao-texto">
          <span>{editor}</span>
        </div>
      </Button>

      <Button className="menu__botao-container" >
        <Img className="menu__botao-img" image={<ImgUsers />} />
        <div className="menu__botao-texto">
          <span>{comunidade}</span>
        </div>
      </Button>
    </Menu>
  );
};

export default MenuPrincipal;
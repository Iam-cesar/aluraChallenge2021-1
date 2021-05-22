import React from 'react';
import './style.css';
import Menu from '../menu';
import TitleMenu from '../title-menu';
import Button from '../botao';

import { ReactComponent as ImgCodeOff } from '../../assets/img/codeoff.svg';
import { ReactComponent as ImgUsers } from '../../assets/img/users.svg';

const MenuPrincipal = () => {
  return (
    <Menu>
      <TitleMenu text="MENU" />
      <Button textoBotao='Editor de código' imgBotao={<ImgCodeOff />} />
      <Button textoBotao='Comunidade' imgBotao={<ImgUsers />} />
    </Menu>
  );
};

export default MenuPrincipal;
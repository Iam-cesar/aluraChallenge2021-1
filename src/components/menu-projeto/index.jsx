import React from 'react';
import "./style.css";
import Menu from '../menu';
import Input from '../input';
import TitleMenu from '../title-menu';
import TextArea from '../textarea';

const MenuProjeto = () => {
  return (
    <Menu className="menu-projeto__container">

      <TitleMenu text="SEU PROJETO" />
        <Input type="text" placeholder="Nome do seu projeto" className="menu-projeto__input" required/>
        <TextArea className="menu-projeto__descricao" placeholder="Descrição do seu projeto" required/>

    </Menu>
  );
};

export default MenuProjeto;
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
      <div className="menu-principal__container-input">
        <Input type="text" placeholder="Nome do seu projeto" className="menu-principal__input" />
        <TextArea className="menu-principal__descricao" placeholder="Descrição do seu projeto" />
      </div>
    </Menu>
  );
};

export default MenuProjeto;
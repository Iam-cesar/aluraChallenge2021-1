import React from 'react';
import "./style.css";
import Menu from 'components/Menu';
import TitleMenu from 'components/Title-menu';
import TextArea from 'components/Textarea';

const MenuProjeto = ({ editarCardTitulo, editarCardDescricao }) => {

  return (
    <Menu className="menu-projeto__container">

      <TitleMenu text="SEU PROJETO" />
      <input type="text"
        placeholder="Nome do seu projeto"
        className="menu-projeto__input"
        defaultValue={editarCardTitulo}
      />
      <TextArea
        className="menu-projeto__descricao"
        placeholder="Descrição do seu projeto"
        children={editarCardDescricao}
      ></TextArea>
    </Menu>
  );
};

export default MenuProjeto;

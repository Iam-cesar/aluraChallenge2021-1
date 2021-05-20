import { useState } from 'react';
import './App.css';

// image imports
import PerfilImg from './assets/img/perfil.jpg';
import {ReactComponent as ImgCodeOff} from './assets/img/codeoff.svg';
import {ReactComponent as ImgUsers} from './assets/img/users.svg';


// Component imports
import Logo from './components/logo';
import Navbar from './components/navbar';
import Perfil from './components/perfil';
import SeachBar from './components/search-bar';
import Input from './components/input';
import Main from './components/main';
import Menu from './components/menu';
import Botao from './components/botao';
import Paragraph from './components/paragraph';

function App() {
  const [nomeUsuario] = useState('Cesar Augusto');

  return (
    <>
      <Navbar>
        <Logo />
        <SeachBar >
          <Input className="nav__search" typeSubmit='text' placeholder='Busque por algo' />
        </SeachBar>
        <Perfil nomeUsuario={nomeUsuario} imgPerfil={PerfilImg} />
      </Navbar>

      <Main>
        <Menu>
          <Paragraph text="MENU" />
          <Botao textoBotao='Editor de código' imgBotao={<ImgCodeOff/>} />
          <Botao textoBotao='Comunidade' imgBotao={<ImgUsers/>} />
        </Menu>
      </Main>
    </>
  );
}

export default App;

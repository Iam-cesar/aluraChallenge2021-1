import { useState } from 'react';
import './App.css';

// image imports
import PerfilImg from './assets/img/perfil.jpg';

// Component imports
import Logo from './components/logo';
import Main from './components/main';
import Navbar from './components/navbar';
import Perfil from './components/perfil';
import SeachBar from './components/search-bar';
import TextEditor from './components/text-editor';
import MenuProjeto from './components/menu-projeto';
import MenuPrincipal from './components/menu-principal';
import MenuPersonalizacao from './components/menu-personalizacao';
import BotaoHighlight from './components/botao-highlight/BotaoHighlight';

function App() {
  const [nomeUsuario] = useState('Cesar Augusto');

  return (
    <>
      <Navbar>
        <Logo />
        <SeachBar />
        <Perfil nomeUsuario={nomeUsuario} imgPerfil={PerfilImg} />
      </Navbar>

      <Main>
        <div className='side__wrapper'>
          <MenuPrincipal />
        </div>
        <div className='main__wrapper'>
          <TextEditor />
          <BotaoHighlight />
        </div>
        <div className='side__wrapper'>
          <MenuProjeto />
          <MenuPersonalizacao />
        </div>
      </Main>
    </>
  );
}

export default App;

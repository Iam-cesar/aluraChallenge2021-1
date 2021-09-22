import { useState, useEffect } from 'react';
import './App.css';
import DomToImage from 'dom-to-image';
import { saveAs } from 'file-saver';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';
import c from 'highlight.js/lib/languages/c';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/lioshi.css';
import PerfilImg from './assets/img/perfil.jpg';
import useLocalStorage from './hooks/useLocalStorage.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Logo from './components/logo';
import Main from './components/main';
import Editar from './pages/editar';
import Navbar from './components/navbar';
import Perfil from './components/perfil';
import Usuario from './components/usuario';
import SeachBar from './components/search-bar';
import TitleMenu from './components/title-menu';
import MenuMobile from './components/menu-mobile';
import MenuPrincipal from './components/menu-principal';
import SearchBarMobile from './components/searchbar-mobile';
import Home from './pages/home/index';
import Projetos from './pages/projetos';
import {
  handleColor,
  handleHighlight,
  handleState,
  handleLike,
  apagarCard,
  exportar,
} from './functions';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('php', php);
hljs.registerLanguage('c', c);
hljs.registerLanguage('python', python);

function App () {

  const [nomeUsuario] = useState('Cesar Augusto');
  const [borderColor, setBorderColor] = useState('#6BD1FF');
  const [projeto, setProjeto] = useLocalStorage('projeto', [])

  useEffect(() => {
    document.addEventListener('click', (event) => {
      const element = document.querySelector('.nav__img-menu-container');
      const menuMobile = document.querySelector('.menu-mobile__container');

      if (event.target !== menuMobile && event.target !== element) {
        element.classList.remove('menu__is-active');
        menuMobile.classList.remove('menu-mobile__show-menu');
      }

      const navbar = document.querySelector('.nav__search-container');
      const input = document.querySelector('.nav__search');
      const logo = document.querySelector('.nav__logo-container');
      const image = document.querySelector('.search-bar-mobile__img-menu-container')

      if (event.target !== navbar && event.target !== image && event.target !== input) {
        navbar.classList.remove('nav__active');
        logo.classList.remove('nav__logo-active');
        image.classList.remove('search-bar-mobile__is-active');
      }
    })

    hljs.highlightAll();
  });

  return (
    <>
      <Router>
        <Navbar>
          <Logo />
          <SeachBar />

          <div className="nav__icon-wrapper">
            <SearchBarMobile />
            <Perfil className="nav__perfil-container" >
              <Usuario className='nav__perfil-usuario' />
            </Perfil>
          </div>

          <MenuMobile nomeUsuario={nomeUsuario} PerfilImg={PerfilImg} />
        </Navbar>

        <Main className='main'>

          <div className='side__wrapper side__hidden'>
            <MenuPrincipal hljs={hljs ?? ''}>
              <TitleMenu text="MENU" />
            </MenuPrincipal>
          </div>

          <Switch>
            <Route path='/' exact children={
              <Home
                defaultColor={borderColor}
                optionBtn='salvar'
                salvar={() => handleState(projeto, setProjeto)}
                fnHighlight={() => handleHighlight(hljs)}
                borderColor={borderColor}
                color={() => handleColor(setBorderColor)}
                exportar={() => exportar(DomToImage, saveAs)}
              />}
            />
            <Route path="/projetos" children={
              <Projetos
                nomeUsuario={nomeUsuario}
                PerfilImg={PerfilImg}
                projetos={projeto}
                like={(event) => handleLike(event)}
                apagar={event => apagarCard(event, projeto, setProjeto)}
              />}
            />
            <Route path='/editor/:id' children={
              <Editar
                state={projeto}
                setState={setProjeto}
                defaultColor={borderColor}
                optionBtn='editar'
                fnHighlight={() => handleHighlight(hljs)}
                borderColor={borderColor}
                color={() => handleColor(setBorderColor)}
                exportar={() => exportar(DomToImage, saveAs)}
              />}
            />
          </Switch>

        </Main>
      </Router>
    </>
  );
}

export default App;

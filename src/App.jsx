import { useState, useEffect } from 'react';
import './App.css';
// import dom-to-image
import DomToImage from 'dom-to-image';
// import fileSaver
import { saveAs } from 'file-saver';
// highlight
import hljs from 'highlight.js/lib/core';
// import da linguagem highlight.js
import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';
import c from 'highlight.js/lib/languages/c';
import python from 'highlight.js/lib/languages/python';
// css theme highlight.js
import 'highlight.js/styles/lioshi.css';
// image imports
import PerfilImg from './assets/img/perfil.jpg';
// hook para local Storage
import useLocalStorage from './hooks/useLocalStorage.js';
// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Component imports
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
// pages
import Editor from './pages/editor';
import Projetos from './pages/projetos';
// funções
import {
  handleColor,
  handleHighlight,
  handleMenu,
  handleSeachBar,
  handleState,
  handleLike,
  apagarCard,
  exportar,
} from './functions';
// registrando as linguagens
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('php', php);
hljs.registerLanguage('c', c);
hljs.registerLanguage('python', python);

function App() {

  // variaveis
  const [nomeUsuario] = useState('Cesar Augusto');
  const [borderColor, setBorderColor] = useState('#6BD1FF');
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [projeto, setProjeto] = useLocalStorage('projeto', [])

  useEffect(() => {
    document.addEventListener('click', (event) => {
      // responsavel por fechar o menu mobile quando clicado fora ou quando seleciona um item
      const element = document.querySelector('.nav__img-menu-container');
      const menuMobile = document.querySelector('.menu-mobile__container');

      if (event.target !== menuMobile && event.target !== element) {
        element.classList.remove('menu__is-active');
        menuMobile.classList.remove('menu-mobile__show-menu');
      }

      // responsavel por fechar a barra de pesquisa quando clicar fora
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

    // ativa o highlight depois de qualquer alteração na pagina
    hljs.highlightAll()
  });

  return (
    <>
      <Router>
        <Navbar>
          <Logo />
          <SeachBar />
          <div className="nav__icon-wrapper">

            <SearchBarMobile open={() => { handleSeachBar(search, setSearch) }} />

            <Perfil className="nav__perfil-container" open={() => handleMenu(menu, setMenu)}>
              <Usuario className='nav__perfil-usuario' nomeUsuario={nomeUsuario} imgPerfil={PerfilImg} />
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
            {/* pagina de edição */}
            <Route path='/' exact children={
              <Editor
                defaultColor={borderColor}
                optionBtn='salvar'
                salvar={() => handleState(projeto, setProjeto)}
                fnHighlight={() => handleHighlight(hljs)}
                borderColor={borderColor}
                color={() => handleColor(setBorderColor)}
                exportar={() => exportar(DomToImage, saveAs)}
              />}
            />
            {/* pagina com todos os cards */}
            <Route path="/projetos" children={
              <Projetos
                nomeUsuario={nomeUsuario}
                PerfilImg={PerfilImg}
                projetos={projeto}
                like={event => handleLike(event)}
                apagar={event => apagarCard(event, projeto, setProjeto)}
              />}
            />
            {/* pagina de atualização dos cards */}
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

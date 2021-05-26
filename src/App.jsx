import { useState } from 'react';
import './App.css';
// highlight
import hljs from 'highlight.js/lib/core'
// import da linguagem
import javascript from 'highlight.js/lib/languages/javascript';
// import do css
import 'highlight.js/styles/darcula.css';
// image imports
import PerfilImg from './assets/img/perfil.jpg';
// projetos
import projetos from './projetos';
// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Component imports
import Logo from './components/logo';
import Main from './components/main';
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
// registrando as linguagens
hljs.registerLanguage('javascript', javascript);

function App() {

  // variaveis
  const [nomeUsuario] = useState('Cesar Augusto');
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [borderColor, setBorderColor] = useState('#6BD1FF')

  // funções

  const handleHighlight = () => {
    const areaCodigo = document.querySelector('.text-editor__text-codigo-wrapper');
    const linguagem = document.querySelector('.menu-personalizacao__options');
    const codigo = areaCodigo.querySelector('code');
    areaCodigo.innerHTML = `<code class="text-editor ${linguagem.value}" contentEditable='true' aria-label='editor'></code>`;

    const attClassCodigo = codigo.getAttribute('class')

    console.log(attClassCodigo);

    areaCodigo.firstChild.innerText = codigo.innerText;

    hljs.configure({
      languages: ['javascript', 'python', 'php', 'c'],
      useBR: true,
    })
    hljs.highlightAll()
  }

  const handleColor = () => {
    const colorPicker = document.querySelector('.menu-personalizacao__color-picker');
  
    colorPicker.addEventListener('input', () => {
      setBorderColor(colorPicker.value);
    })
  }

  const handleMenu = (state) => {
    const element = document.querySelector('.nav__img-menu-container');
    const menuMobile = document.querySelector('.menu-mobile__container');

    if (state) {
      setMenu(!state)
      element.classList.toggle('menu__is-active');
      menuMobile.classList.toggle('menu-mobile__show-menu');
    } else {
      setMenu(!state)
      element.classList.toggle('menu__is-active');
      menuMobile.classList.toggle('menu-mobile__show-menu');
    }
  }

  const handleSeachBar = (state) => {
    const navbar = document.querySelector('.nav__search-container');
    const logo = document.querySelector('.nav__logo-container');
    const image = document.querySelector('.search-bar-mobile__img-menu-container')

    if (state) {
      setSearch(!state)
      navbar.classList.toggle('nav__active');
      logo.classList.toggle('nav__logo-active');
      image.classList.toggle('search-bar-mobile__is-active');
    } else {
      setSearch(!state)
      navbar.classList.toggle('nav__active');
      logo.classList.toggle('nav__logo-active');
      image.classList.toggle('search-bar-mobile__is-active');
    }
  }

  return (
    <>
      <Router>
        <Navbar>
          <Logo />
          <SeachBar />
          <div className="nav__icon-wrapper">

            <SearchBarMobile open={() => { handleSeachBar(search) }} />
            <Perfil className="nav__perfil-container" open={() => handleMenu(menu)}>
              <Usuario className='nav__perfil-usuario' nomeUsuario={nomeUsuario} imgPerfil={PerfilImg} />
            </Perfil>
          </div>
          <MenuMobile nomeUsuario={nomeUsuario} PerfilImg={PerfilImg} />
        </Navbar>

        <Main className='main'>
          <div className='side__wrapper side__hidden'>
            <MenuPrincipal>
              <TitleMenu text="MENU" />
            </MenuPrincipal>
          </div>
          <Switch>
            <Route path="/" exact children={<Editor fnHighlight={() => handleHighlight()} borderColor={borderColor} color={() => handleColor()} />} />
            <Route path="/projetos" children={<Projetos projetos={projetos} />} />
          </Switch>
        </Main>
      </Router>
    </>
  );
}

export default App;

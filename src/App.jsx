import { useEffect } from 'react';
import './App.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';
import c from 'highlight.js/lib/languages/c';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/dracula.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Logo from 'components/Logo';
import Main from 'components/Main';
import Editar from 'pages/Editar';
import Navbar from 'components/Navbar';
import Perfil from 'components/Perfil';
import Usuario from 'components/Usuario';
import SeachBar from 'components/Search-bar';
import TitleMenu from 'components/Title-menu';
import MenuMobile from 'components/Menu-mobile';
import MenuPrincipal from 'components/Menu-principal';
import SearchBarMobile from 'components/Searchbar-mobile';
import Home from 'pages/Home/index';
import Projetos from 'pages/Projetos'
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('php', php);
hljs.registerLanguage('c', c);
hljs.registerLanguage('python', python);

function App () {

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
        <MenuMobile />
      </Navbar>
      <Main className='main'>
        <div className='side__wrapper side__hidden'>
          <MenuPrincipal hljs={hljs ?? ''}>
            <TitleMenu text="MENU" />
          </MenuPrincipal>
        </div>
        <Switch>
          <Route
            path='/'
            exact
            children={<Home optionBtn='salvar' />}
          />
          <Route
            path="/projetos"
            children={<Projetos />}
          />
          <Route
            path='/editor/:id'
            children={<Editar optionBtn='editar'
            />}
          />
        </Switch>
      </Main>
    </Router>
  );
}

export default App;

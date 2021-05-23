import { useState } from 'react';
import './App.css';

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
import MenuPrincipal from './components/menu-principal';
import MenuMobile from './components/menu-mobile';

// pages
import Editor from './pages/editor';
import Projetos from './pages/projetos';

function App() {
  const [nomeUsuario] = useState('Cesar Augusto');
  const [active, setActive] = useState(false);

  const handleMenu = (state) => {
    const element = document.querySelector('.nav__img-menu-container');

    if (state) {
      setActive(!state)
      element.classList.toggle('menu__is-active');
    } else {
      setActive(!state)
      element.classList.toggle('menu__is-active');
    }
  }

  return (
    <>
      <Router>
        <Navbar>
          <Logo />
          <SeachBar />
          <Perfil open={() => handleMenu(active)}>
            <Usuario nomeUsuario={nomeUsuario} imgPerfil={PerfilImg} />
          </Perfil>
          <MenuMobile nomeUsuario={nomeUsuario} imgPerfil={PerfilImg} />
        </Navbar>

        <Main className='main'>
          <div className='side__wrapper side__hidden'>
            <MenuPrincipal />
          </div>
          <Switch>
            <Route path="/" exact component={Editor} />
            <Route path="/projetos" children={<Projetos projetos={projetos} />} />
          </Switch>
        </Main>
      </Router>
    </>
  );
}

export default App;

const handleState = (state, setState) => {
  const texto = document.querySelector('.text-editor').innerText
  const titulo = document.querySelector('.menu-projeto__input').value
  const descricao = document.querySelector('.menu-projeto__descricao').value
  const colorPicker = document.querySelector('.menu-personalizacao__color-picker').value

  setState([{
    textValue: `${texto}`,
    titulo: `${titulo}`,
    descricao: `${descricao}`,
    bgColor: `${colorPicker}`,
    PerfilImg: state.PerfilImg,
    nomeUsuario: state.nomeUsuario,
  }, ...state])
}

const handleHighlight = (hljs) => {
  const areaCodigo = document.querySelector('.text-editor__text-codigo-wrapper');
  const linguagem = document.querySelector('.menu-personalizacao__options');
  const codigo = areaCodigo.querySelector('code');
  areaCodigo.innerHTML = `<code class="text-editor language-${linguagem.value}" contentEditable='true' aria-label='editor'></code>`;

  areaCodigo.firstChild.innerText = codigo.innerText;

  hljs.configure({
    languages: ['javascript', 'python', 'php', 'c'],
  })
  hljs.highlightAll();
}

const handleColor = (setBorderColor) => {
  const colorPicker = document.querySelector('.menu-personalizacao__color-picker');

  colorPicker.addEventListener('input', () => {
    setBorderColor(colorPicker.value);
  })
}

const handleMenu = (state, setMenu) => {
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

const handleSeachBar = (state, setSearch) => {
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

export {
  handleHighlight,
  handleColor,
  handleMenu,
  handleSeachBar,
  handleState,
}
const editar = (id, state, setState) => {
  let texto = document.querySelector('.text-editor')
  let titulo = document.querySelector('.menu-projeto__input')
  let descricao = document.querySelector('.menu-projeto__descricao')
  let colorPicker = document.querySelector('.menu-personalizacao__color-picker')
  // faz com que o card com o id recebido receba os novos valores do editor
  state[id] = {
    textValue: texto.innerText,
    titulo: titulo.value,
    descricao: descricao.value,
    bgColor: colorPicker.value
  }
  // grava no estado o novo card atualizado
  setState(state)
}

const exportar = (moduleDTI, saveAs) => {
  let formato = document.querySelector('.text-editor__formatos-exportar')
  let node = document.querySelector('.text-editor__container')

  switch (formato.value) {
    case 'svg':
      // filtra todas as tags i do html
      let filter = node => node.tagName !== 'i'

      // salva o undereço da imagem no formato svg
      moduleDTI.toSvg(node, { filter })
        .then(dataUrl => window.saveAs(dataUrl, 'my-code.svg'))
      break

    case 'png':
      moduleDTI.toBlob(node)
        .then(blob => window.saveAs(blob, `my-code.${formato.value}`))
      break

    case 'jpg':
      moduleDTI.toJpeg(node, { quality: 0.9 })
        .then(dataUrl => saveAs(dataUrl, 'my-code.jpg'))
      break

    default: return;
  }
}

const apagarCard = (event, state, setState) => {
  setState(
    // filtra e exclui o item que tiver o id igual sua posição no indice
    state.filter((_item, index) => parseInt(event.target.id) !== index)
  )
}

const handleLike = ({ id, event }) => {

  let iconeLike = event.target.firstChild.firstChild;
  let contadorLikes = event.target.lastChild
  // se o id for igual ao do event.target e o contador de likes for menor que 1
  if (parseInt(event.target.id) === id && parseInt(contadorLikes.innerHTML) < 1) {
    // muda a cor do icone de like da pagina
    iconeLike.classList.add('svg-like')
    // faz a contagem de likes
    contadorLikes.innerHTML = parseInt(contadorLikes.innerHTML) + 1;
  }
}

const handleState = (state, setState) => {
  // muda estado para cada card
  let texto = document.querySelector('.text-editor')
  let titulo = document.querySelector('.menu-projeto__input')
  let descricao = document.querySelector('.menu-projeto__descricao')
  let colorPicker = document.querySelector('.menu-personalizacao__color-picker')

  // se algum dos campos for vazio nao salvara o card
  if (texto.innerText !== '' && titulo.value !== '' && descricao.value !== '') {
    setState([{
      textValue: `${texto.innerText}`,
      titulo: `${titulo.value}`,
      descricao: `${descricao.value}`,
      bgColor: `${colorPicker.value}`,
      // "...state" faz com que os mais recentes apareçam primeiro
    }, ...state])
  }

  // reseta os campos ao clicar em salvar depois que o state é alterado
  texto.innerText = ''
  titulo.value = ''
  descricao.value = ''
}

const handleHighlight = (hljs) => {
  // responsavel por gerenciar o highlightJs
  let areaCodigo = document.querySelector('.text-editor__text-codigo-wrapper');
  let linguagem = document.querySelector('.menu-personalizacao__options');
  let codigo = areaCodigo.querySelector('code');
  areaCodigo.innerHTML = `<code class="text-editor language-${linguagem.value}" contentEditable='true' aria-label='editor'></code>`;

  areaCodigo.firstChild.innerText = codigo.innerText;

  hljs.configure({
    languages: ['javascript', 'python', 'php', 'c'],
  });

  hljs.highlightAll();
}

const handleColor = (setBorderColor) => {
  // responsavel pelo input color e pela borda colorida do card
  let colorPicker = document.querySelector('.menu-personalizacao__color-picker');

  colorPicker.addEventListener('input', () => {
    // captura o valor do input
    setBorderColor(colorPicker.value);
  })
}

const handleMenu = (state, setState) => {
  // responsavel por abrir e fechar o menu mobile
  let element = document.querySelector('.nav__img-menu-container');
  let menuMobile = document.querySelector('.menu-mobile__container');

  if (!state) {
    setState(state)
    element.classList.toggle('menu__is-active');
    menuMobile.classList.toggle('menu-mobile__show-menu');
  }

}

const handleSeachBar = (state, setSearch) => {
  // responsvel por abrir e fechar a barra de pesquisa mobile
  let navbar = document.querySelector('.nav__search-container');
  let logo = document.querySelector('.nav__logo-container');
  let image = document.querySelector('.search-bar-mobile__img-menu-container')

  if (!state) {
    setSearch(state)
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
  handleLike,
  apagarCard,
  exportar,
  editar,
}
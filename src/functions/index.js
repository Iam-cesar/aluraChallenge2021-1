const editar = (id, state, setState) => {
  let texto = document.querySelector('.text-editor')
  let titulo = document.querySelector('.menu-projeto__input')
  let descricao = document.querySelector('.menu-projeto__descricao')
  let colorPicker = document.querySelector('.menu-personalizacao__color-picker')
  state[id] = {
    textValue: texto.innerText,
    titulo: titulo.value,
    descricao: descricao.value,
    bgColor: colorPicker.value
  }
  setState(state)
}

const exportar = (moduleDTI, saveAs) => {
  let formato = document.querySelector('.text-editor__formatos-exportar')
  let node = document.querySelector('.text-editor__container')

  switch (formato.value) {
    case 'svg':
      let filter = node => node.tagName !== 'i'

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
    state.filter((_item, index) => parseInt(event.target.id) !== index)
  )
}

const handleLike = ({ id, event }) => {

  let iconeLike = event.target.firstChild.firstChild;
  let contadorLikes = event.target.lastChild
  if (parseInt(event.target.id) === id && parseInt(contadorLikes.innerHTML) < 1) {
    iconeLike.classList.add('svg-like')
    contadorLikes.innerHTML = parseInt(contadorLikes.innerHTML) + 1;
  }
}

const handleState = (state, setState) => {
  let texto = document.querySelector('.text-editor')
  let titulo = document.querySelector('.menu-projeto__input')
  let descricao = document.querySelector('.menu-projeto__descricao')
  let colorPicker = document.querySelector('.menu-personalizacao__color-picker')
  let botaoSalvar = document.querySelector('.menu-personalizacao__botao-salvar')

  if (texto.innerText !== '' && titulo.value !== '' && descricao.value !== '') {
    setState([{
      textValue: `${texto.innerText}`,
      titulo: `${titulo.value}`,
      descricao: `${descricao.value}`,
      bgColor: `${colorPicker.value}`,
    }, ...state])

    texto.innerText = ''
    titulo.value = ''
    descricao.value = ''
    botaoSalvar.classList.remove('menu-personalizacao__botao-salvar')
    botaoSalvar.classList.add('botao__salvar--confirm')
  }

  setTimeout(() => {
    botaoSalvar.classList.remove('botao__salvar--confirm')
    botaoSalvar.classList.add('menu-personalizacao__botao-salvar')
  }, 2000)
}

const handleHighlight = (hljs) => {
  let areaCodigo = document.querySelector('.text-editor__text-codigo-wrapper');
  let linguagem = document.querySelector('.menu-personalizacao__options');
  let codigo = areaCodigo.querySelector('code');
  areaCodigo.innerHTML = `<code class="text-editor language-${linguagem.value}" contentEditable='true' aria-label='editor'></code>`;

  areaCodigo.firstChild.innerHTML = codigo.innerHTML;

  hljs.configure({
    languages: ['javascript', 'python', 'php', 'c'],
  });

  hljs.highlightAll();
}

const handleColor = (setBorderColor) => {
  let colorPicker = document.querySelector('.menu-personalizacao__color-picker');

  colorPicker.addEventListener('input', () => {
    setBorderColor(colorPicker.value);
  })
}





export {
  handleHighlight,
  handleColor,
  handleState,
  handleLike,
  apagarCard,
  exportar,
  editar,
}
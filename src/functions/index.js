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

const handleLike = ({ id, event }) => {

  let iconeLike = event.target.firstChild.firstChild;
  let contadorLikes = event.target.lastChild
  if (parseInt(event.target.id) === id && parseInt(contadorLikes.innerHTML) < 1) {
    iconeLike.classList.add('svg-like')
    contadorLikes.innerHTML = parseInt(contadorLikes.innerHTML) + 1;
  }
}



const handleColor = (setBorderColor) => {
  let colorPicker = document.querySelector('.menu-personalizacao__color-picker');

  colorPicker.addEventListener('input', () => {
    setBorderColor(colorPicker.value);
  })
}

export {
  handleColor,
  handleLike,
  exportar,
}
import React from 'react'
import DomToImage from 'dom-to-image';
import { saveAs } from 'file-saver';

function CodeToImage () {

  const handleExportCode = (moduleDTI, saveAs) => {
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

  return (
    <div className="text-editor__exportar">
      <select
        className="text-editor__formatos-exportar"
        name="formatos"
        id="formatos"
      >
        <option value="jpg">JPG</option>
        <option value="png">PNG</option>
        <option value="svg">SVG</option>
      </select>
      <button
        onClick={() => handleExportCode(DomToImage, saveAs)}
        className="text-editor__botao-exportar"
      >Exportar</button>
    </div>
  )
}

export default CodeToImage

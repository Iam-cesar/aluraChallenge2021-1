import React, { useEffect } from 'react';
import './style.css';
import TextEditor from 'components/Text-editor';
import MenuProjeto from 'components/Menu-projeto';
import MenuPersonalizacao from 'components/Menu-personalizacao';
import BotaoHighlight from 'components/Botao-highlight'
import DomToImage from 'components/CodeToImage';
import useColorPick from 'hooks/useColorPicker';

const Editor = () => {
  const { color, setColor } = useColorPick()

  useEffect(() => {
    setColor(color)
  }, [color, setColor])

  return (
    <>
      <div className='main__wrapper'>
        <TextEditor bgColor={color}>
          <DomToImage />
        </TextEditor >
        <BotaoHighlight />
      </div>
      <div className='side__wrapper'>
        <MenuProjeto />
        <MenuPersonalizacao
          defaultColor={color}
          color={color} />
      </div>
    </>
  );
}

export default Editor;

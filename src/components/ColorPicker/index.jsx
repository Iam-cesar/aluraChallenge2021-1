import React, { useContext } from 'react'
import { ColorPickContext } from 'context/colorPick'
function ColorPicker () {

  const { color, setColor } = useContext(ColorPickContext)

  return (
    <div className='menu-personalizacao__color-picker-container'>
      <input
        type='color'
        className='menu-personalizacao__color-picker'
        defaultValue={color}
        onChange={event => setColor(event.target.value)} />
    </div>
  )
}

export default ColorPicker

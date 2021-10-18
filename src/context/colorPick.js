import { createContext, useState } from "react";

export const ColorPickContext = createContext()

function ColorPickerProvider ({ children }) {
  const [color, setColor] = useState('#1883BA')
  return (
    <ColorPickContext.Provider value={{ color, setColor }}>
      {children}
    </ColorPickContext.Provider>
  )
}

export default ColorPickerProvider
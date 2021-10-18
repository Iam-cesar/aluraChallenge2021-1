import { useContext } from 'react'
import { ColorPickContext } from 'context/colorPick'

export default function useColorPick () {
  return useContext(ColorPickContext)
}
import { useContext } from "react";
import { UserContext } from '../context/user'

export function useUser () {
  return useContext(UserContext)
}
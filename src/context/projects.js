import { createContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage.js';

export const ProjectsContext = createContext()
ProjectsContext.displayName = 'Projetos'

export function ProjectsProvider ({ children }) {
  const [projects, setProjects] = useLocalStorage('projects', [])

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  )
}

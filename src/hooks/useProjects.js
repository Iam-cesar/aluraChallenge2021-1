import { useContext } from "react";
import { ProjectsContext } from "../context/projects";

export function useProjects () {
  return useContext(ProjectsContext)
}
import projectsData from "../data/projects";
import { Project } from "../types/project";

export function findProjectById(projectId: string): Project | undefined {
  return projectsData.find((project) => project.projectId === projectId);
}

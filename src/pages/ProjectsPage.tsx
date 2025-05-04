import ProjectCard from "../components/ProjectCard";
import { ScrollReveal } from "../components/ScrollReveal";
import projectsData from "../data/projects";

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 py-24 md:px-14"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light bg-gradient-to-r from-blue-900 to-sky-400 bg-clip-text text-transparent md:text-6xl">
          Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-15 text-black">
        {projectsData.map((project) => (
          <ProjectCard
            projectId={project.projectId}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

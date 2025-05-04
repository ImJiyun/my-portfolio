import projectsData from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export function ScrollReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light bg-gradient-to-r from-blue-900 to-sky-400 bg-clip-text text-transparent md:text-6xl">
          Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-15 text-black">
        {projectsData.map((project) => (
          <ProjectCard
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

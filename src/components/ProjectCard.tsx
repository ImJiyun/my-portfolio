import { ScrollReveal } from "./Projects";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({
  image,
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={image}
          alt="project image"
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold md:text-2xl">{title}</div>
            <p className="text-gray-400">{description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-lg bg-gradient-to-r from-blue-900 to-sky-400 p-3 text-white text-sm md:text-base"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

import Alebaba from "/Alebaba.png";
import PaletteMe from "/PaletteMe.png";
import BiteByte from "/BiteByte.png";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: Alebaba,
    title: "알고리즘 리뷰 바로바로",
    description:
      "개발자 취업 준비생들을 위한, 알고리즘 풀이를 기록하고 공유하는 리뷰 플랫폼",
    technologies: ["JavaScript", "React"],
  },
  {
    image: PaletteMe,
    title: "PaletteMe",
    description:
      "예술을 어렵게 느끼는 이들을 위해 다양한 미술 작품을 소개하고, 개인의 미술 취향을 발견할 수 있도록 돕는 서비스",
    technologies: [
      "TypeScript",
      "React",
      "Redux-Toolkit",
      "Tanstack Query",
      "Tailwind CSS",
    ],
  },
  {
    image: BiteByte,
    title: "BiteByte",
    description:
      "컴퓨터 공학 지식을 퀴즈로 배우고 점검할 수 있는 CS 학습 웹사이트",
    technologies: [
      "TypeScript",
      "React",
      "Redux-Toolkit",
      "Redux-Toolkit Query",
      "Tailwind CSS",
    ],
  },
];

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

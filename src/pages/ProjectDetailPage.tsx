import { useParams } from "react-router-dom";
import { findProjectById } from "../util/findProjectById";
import { BsGithub } from "react-icons/bs";

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();

  const project = findProjectById(projectId || "");

  if (!project) {
    return <div>Project not found</div>;
  }
  const {
    image,
    title,
    date,
    people,
    github,
    figma,
    description,
    technologies,
    features,
    achievements,
  } = project;
  return (
    <section className="flex flex-col min-h-screen w-full justify-center items-center gap-16 p-4 py-30 md:px-14">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl text-blue-600">{title}</h2>
        <p className="text-gray-700">{date}</p>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
          기술 스택 :
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <p>참여 인원 : {people}</p>
        <div className="flex gap-4">
          {github && (
            <span className="flex items-center gap-2 text-gray-700">
              <BsGithub />
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                GitHub Link
              </a>
            </span>
          )}
          <span className="flex items-center gap-2 text-gray-700">
            <a
              href={figma}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              Figma Link
            </a>
          </span>
        </div>
      </div>
      <div>
        <img src={image} alt="project image" />
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl text-blue-600 font-bold">기능 구현</h3>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          {features?.map((feature, index) => (
            <li key={index} className="text-gray-700">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl text-blue-600 font-bold">성과</h3>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          {achievements?.map((achievement, index) => (
            <li key={index} className="text-gray-700">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

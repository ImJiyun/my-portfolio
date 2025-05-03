import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";

const technologies = [
  { logo: <BiLogoHtml5 />, style: "text-orange-500" },
  { logo: <BiLogoCss3 />, style: "text-blue-500" },
  {
    logo: <BiLogoJavascript />,
    style: "text-yellow-500",
  },
  {
    logo: <BiLogoTypescript />,
    style: "text-sky-500",
  },
  {
    logo: <BiLogoReact />,
    style: "text-blue-400",
  },
  { logo: <BiLogoRedux />, style: "text-purple-500" },
  {
    logo: <BiLogoTailwindCss />,
    style: "text-sky-400",
  },
];

export default technologies;

import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { FaBootstrap, FaVuejs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";

export const stackData = [
  { 
   title: "Vuejs", 
   img: FaVuejs 
 },
  {
    title: "React",
    img: imgReact,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "Laravel",
    img: FaLaravel,
  },
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  { 
    title: "TypeScript", 
    img: SiTypescript 
  },
  { 
    title: "Bootstrap", 
    img: FaBootstrap 
  },
  
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  // { title: "Docker", img: FaDocker },
];

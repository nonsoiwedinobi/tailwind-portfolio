import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "project.png",
    url: "https://www.staffing4industry.com/",
    github: "https://github.com/nonsoiwedinobi/staffingforindustry",
    title: "Staffing4Industry",
    text: "Website Redesign: Spearheading the redesign of the company’s existing website to enhance user experience, improve functionality, and elevate our brand's online presence.",
  },
  {
    id: nanoid(),
    img: "weatherapp.png",
    url: "https://courageous-swan-0b869a.netlify.app/",
    github: "https://github.com/nonsoiwedinobi/weatherapp",
    title: "Weather App",
    text: "I developed a weather app that's sleek and accurate. It provides real-time forecasts, alerts, and interactive maps, making it ideal for planning your day",
  },
  {
    id: nanoid(),
    img: "QRgenerator.png",
    url: "https://grand-lily-ad7d07.netlify.app/",
    github: "https://github.com/nonsoiwedinobi/qrcode-generator",
    title: "QR Generator",
    text: "I designed a QR code generator that's user-friendly and fast. It creates custom, high-quality QR codes for various needs, perfect for personal or business use.",
  },
];

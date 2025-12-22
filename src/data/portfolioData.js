import IllinoisImage from "../assets/Illinois-Institute-of-Technology.png";
import NSDCImage from "../assets/NSDC_certified.png";
import EntriImage from "../assets/Entri_elevate.png";

import project1Img1 from "../assets/project1/img1.png";
import project1Img2 from "../assets/project1/img2.png";
import project1Img3 from "../assets/project1/img3.png";
import project1Img4 from "../assets/project1/img4.png";

import project2Img1 from "../assets/project2/img1.png";
import project2Img2 from "../assets/project2/img2.png";
import project2Img3 from "../assets/project2/img3.png";
import project2Img4 from "../assets/project2/img4.png";

import project3Img1 from "../assets/project3/img1.png";
import project3Img2 from "../assets/project3/img2.png";
import project3Img3 from "../assets/project3/img3.png";
import project3Img4 from "../assets/project3/img4.png";

import project4Img1 from "../assets/project4/img1.png";
import project4Img2 from "../assets/project4/img2.png";
import project4Img3 from "../assets/project4/img3.png";
import project4Img4 from "../assets/project4/img4.png";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiVite,
  SiNetlify,
  SiPostman,
  SiGithub,
} from "react-icons/si";

import { BsFillLightningChargeFill } from "react-icons/bs";

export const tabs = ["projects", "certificates", "tech stack"];

export const projectData = [
  {
    id: 0,
    title: "Food Ordering Web Page",
    date: "10.10.2024",

    shortDesc:
      "A responsive Food Ordering website built using HTML, CSS, and Bootstrap with a clean UI and mobile-friendly layout.",

    description: `
A professional Food Ordering Website crafted using HTML, CSS, and Bootstrap.
• Fully responsive with a mobile-first design
• Clean and structured restaurant-themed UI
• Displays menu sections, banners, and promotional offers
• Ensures smooth user experience with organized layout
• Focused on modern design standards and readability
`,

    images: [project1Img1, project1Img2, project1Img3, project1Img4],

    link: "https://ruthuran.github.io/Module01/",
    gitLink: "https://github.com/ruthuran/Module01",
    technologies: ["HTML", "CSS", "Bootstrap", "Git"],
  },

  {
    id: 1,
    title: "Learning Management System (LMS) Dashboard",

    shortDesc:
      "A full-featured Learning Management System built as a Final Capstone Project with dashboards, course management, authentication, and role-based access.",

   description: `
A professional Learning Management System (LMS) developed as a Final Capstone Project.

• Role-based platform with Admin, Mentor, and Student dashboards
• Supports course management, student learning, assignments, and progress tracking
`,

    images: [project2Img1, project2Img2, project2Img3, project2Img4],

    link: "https://mern-stack-final-client.onrender.com/",
    gitLink: "https://github.com/Ruthuran/MERN-Stack-Final",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind",
    ],
  },

  {
  id: 2,
  title: "Weather Now App",

  shortDesc:
    "A real-time weather forecasting web application that displays live temperature, humidity, wind speed, and location-based forecasts.",

  description: `
A modern Weather Application built to display real-time weather updates.

• Uses live Open-Meteo API to fetch accurate weather data
• Shows real-time temperature, humidity, wind speed & conditions
• Clean and responsive UI built with React & Tailwind CSS
`,

  images: [project3Img1, project3Img2, project3Img3, project3Img4],

  link: "https://ruthuran.github.io/weathernow-ruthenix/",
  gitLink: "https://github.com/Ruthuran/weathernow-ruthenix",
  technologies: ["React", "Tailwind", "API Integration"],
},

  {
  id: 3,
  title: "Tech Shop – Online Shopping Website",
  date: "12.02.2025",

  shortDesc:
    "An online shopping website to browse and order mobiles, laptops, and earphones with a clean and responsive UI.",

  description: `
A professional e-commerce Tech Shop website designed for a seamless shopping experience.

• Displays product categories like mobiles, laptops, and earphones
• Users can view product details and place orders
• Clean, structured layout with responsive modern UI
`,

  images: [project4Img1, project4Img2, project4Img3, project4Img4],

  link: "https://ruthuran.github.io/shopping-website/",
  gitLink: "https://github.com/Ruthuran/shopping-website",
  technologies: ["React",
    "React Router",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Responsive Design"],
},

];

export const certificateData = [
  { title: "Full Stack Development Certification", image: IllinoisImage },
  { title: "MERN Stack Developer Certification", image: NSDCImage },
  { title: "MERN Stack Course", image: EntriImage },
];

export const techIcons = [
  { icon: SiHtml5, name: "HTML", color: "#E34F26" },
  { icon: SiCss3, name: "CSS", color: "#1572B6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiExpress, name: "Express.js", color: "#FFFFFF" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
  { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiVite, name: "Vite", color: "#646CFF" },
  { icon: SiNetlify, name: "Netlify", color: "#00C7B7" },
  { icon: SiPostman, name: "Postman", color: "#FF6C37" },
  { icon: SiGithub, name: "GitHub", color: "#FFFFFF" },
  { icon: BsFillLightningChargeFill, name: "Thunder Client", color: "#9146FF" },
];

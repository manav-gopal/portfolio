// import {
//     htmlIcon,
//     cssIcon,
//     jsIcon,
//     reactIcon,
//     tailwindIcon,
//     nextjsIcon,
//     typescriptIcon,
//     nodejsIcon,
//     mongodbIcon,
//     githubIcon,
//     devsnestIcon,
//     jkInstituteIcon,
//     moviesHQProject,
//     resumeXProject,
//     authProtectedProject,
//     gameOfLifeProject,
//     dsCertificate,
//     frontendCertificate,
//     pythonCertificate,
//   } from "../assets";

const introduction = {
  text: [
    "Hi there, I'm thrilled to welcome you!",

    "My name is Manav Gopal, a passionate front-end and full-stack developer based in Bengaluru, India. My journey into web development began in April 2022 when I undertook the MERN stack course at Devsnest, sparking a deep interest in creating dynamic and responsive web applications.",

    "Since then, I've continuously expanded my skill set, mastering technologies like React, Next.js, Tailwind CSS, and more. I’ve had the pleasure of working on several exciting projects, including MoviesHQ, an AI-enhanced movie database, and ResumeX, a powerful tool for creating and managing resumes.",

    "With each new project, I aim to leverage the latest technologies to craft innovative solutions that offer both functionality and an exceptional user experience. I’m always eager to collaborate with like-minded individuals and teams who share my enthusiasm for web development and problem-solving.",

    "Thank you for visiting my portfolio—I look forward to connecting with you!",
  ],
};

const education = [
  {
    title: "MERN - Full Stack Developer",
    institution: "Devsnest",
    //   icon: devsnestIcon,
    iconBg: "#000",
    date: "April 2022 - December 2022",
  },
  {
    title: "Bachelor of Technology in Computer Science",
    institution: "JK Institute of Engineering",
    //   icon: jkInstituteIcon,
    iconBg: "#000",
    date: "August 2020 - May 2024",
    cgpa: "8.2",
  },
];

const projects = [
  {
    name: "MoviesHQ",
    description:
      "Comprehensive movie information and search functionality using React, Redux, and SCSS.",
    //   image: moviesHQProject,
    source_code_link: "https://github.com/manav-gopal/MoviesHQ",
    demo_link: "https://yourdemo-link.com",
  },
  {
    name: "ResumeX",
    description:
      "Streamlines resume creation, customization, and management using Next.js, Tailwind CSS, and MongoDB.",
    //   image: resumeXProject,
    source_code_link: "https://github.com/manav-gopal/resumex",
    demo_link: "https://yourdemo-link.com",
  },
  {
    name: "Auth Protected",
    description:
      "A secure authentication system with protected routes built using Next.js, TypeScript, and JWT.",
    //   image: authProtectedProject,
    source_code_link: "https://github.com/manav-gopal/auth-protected",
    demo_link: "https://yourdemo-link.com",
  },
  {
    name: "Game of Life",
    description:
      "A web-based implementation of Conway's Game of Life using React and SCSS.",
    //   image: gameOfLifeProject,
    source_code_link: "https://github.com/manav-gopal/game-of-life",
    demo_link: "https://yourdemo-link.com",
  },
];

const certificates = {
  image: [
    //   dsCertificate,
    //   frontendCertificate,
    //   pythonCertificate,
  ],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    //   icon: htmlIcon,
    description:
      "Proficient in structuring web pages and creating semantic content.",
  },
  {
    id: "css",
    title: "CSS",
    //   icon: cssIcon,
    description: "Skilled in styling web pages and enhancing user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    //   icon: jsIcon,
    description:
      "Experienced in adding interactivity and functionality to web pages.",
  },
  {
    id: "react",
    title: "React",
    //   icon: reactIcon,
    description:
      "Strong understanding of React, creating reusable components and managing application state.",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    //   icon: tailwindIcon,
    description: "Familiar with Tailwind CSS for efficient web styling.",
  },
  {
    id: "nextjs",
    title: "Next.js",
    //   icon: nextjsIcon,
    description:
      "Experienced in using Next.js for building server-side rendered applications.",
  },
  {
    id: "typescript",
    title: "TypeScript",
    //   icon: typescriptIcon,
    description:
      "Proficient in using TypeScript for building robust and scalable applications.",
  },
  {
    id: "nodejs",
    title: "Node.js",
    //   icon: nodejsIcon,
    description:
      "Experienced in building backend services with Node.js and Express.",
  },
  {
    id: "mongodb",
    title: "MongoDB",
    //   icon: mongodbIcon,
    description:
      "Proficient in using MongoDB for database management and integration.",
  },
  {
    id: "git",
    title: "Git",
    //   icon: githubIcon,
    description:
      "Proficient in using Git for version control and collaboration.",
  },
];

import { cardDataTypes } from "../../types";
import robot_1 from "../bot_png/robot_1.png";
import robot_2 from "../bot_png/robot_2.png";
import robot_3 from "../bot_png/robot_3.png";
import robot_4 from "../bot_png/robot_4.png";
import robot_5 from "../bot_png/robot_5.png";

const CARD_DATA : cardDataTypes[] = [
  {
    imgURL: robot_1,
    smallDesc: "A platform to search and find comprehensive movie details.",
    Desc: [
      "MoviesHQ is a feature-rich platform designed to provide comprehensive movie information, offering users the ability to search for movies by title, genre, actor, or director. The application utilizes React.js, JavaScript, Redux, and SCSS to create a seamless user experience.",
      "It integrates AI-enhanced search capabilities powered by the Gemini API to analyze user prompts and deliver accurate results. Users can view detailed information, including synopses, cast lists, release dates, runtimes, ratings, and reviews.",
      "This project demonstrates proficiency in frontend development and the integration of third-party APIs to enhance user experience.",
    ],
    title: "MoviesHQ",
    color: "#266678",
    git_url: "https://github.com/manav-gopal/MoviesHQ",
    live_url: "https://moviehq-manav.vercel.app/"
  },
  {
    imgURL: robot_2,
    smallDesc: "A modern, responsive platform for resume creation.",
    Desc: [
      "ResumeX is a cutting-edge platform built to streamline the resume creation, customization, and management process. Utilizing technologies like Next.js, TypeScript, Tailwind CSS, Express, Node.js, MongoDB, and React Redux, ResumeX offers users a modern, intuitive, and responsive interface.",
      "The application allows users to design and edit resumes effortlessly, with features that enable easy customization to fit individual needs.",
      "By integrating these technologies, ResumeX ensures that users have access to a powerful tool for creating professional resumes that stand out. This project showcases strong skills in full-stack development and user experience design.",
    ],
    title: "ResumeX",
    color: "#cb7c7a",
    git_url: "https://github.com/manav-gopal/resumeX"
  },
  {
    imgURL: robot_3,
    smallDesc: "A secure authentication system with JWT protection.",
    Desc: [
      "Auth Protected is a robust authentication system designed to safeguard user data and control access to protected routes. Developed with NextJS, TypeScript, T3.app, tRPC, Postgres, Prisma(ORM), and JWT, this project implements secure user registration, login, and password hashing for safe data storage.",
      "It features JWT-based authentication to ensure that only authorized users can access certain areas of the application.",
      "The project also includes error handling and input validation to enhance security. Auth Protected exemplifies proficiency in backend development, security protocols, and the implementation of authentication systems in modern web applications.",
    ],
    title: "Auth Protected",
    color: "#36a18b",
    git_url: "https://github.com/manav-gopal/auth-protected",
    live_url: "https://moviehq-manav.vercel.app/"
  },
  {
    imgURL: robot_4,
    smallDesc: "Interactive web-based implementation of Conway's Game of Life.",
    Desc: [
      "Game of Life is a web-based application that recreates Conway's Game of Life, a cellular automaton designed by mathematician John Conway. Built using React, JavaScript, and SCSS, this project provides users with an interactive grid where they can set initial states and observe the evolution of cells according to predefined rules.",
      "Users can start, pause, reset the simulation, and customize the grid size and speed of evolution.",
      "This project not only demonstrates an understanding of algorithms and data visualization but also showcases the ability to build interactive, user-friendly web applications.",
    ],
    title: "Game of Life",
    color: "#cda35f",
    git_url: "https://github.com/manav-gopal/game-of-life"
},
{
    imgURL: robot_5,
    smallDesc: "Ported 'iv-viewer' to React for better performance.",
    Desc: [
        "IV Viewer is an open-source project where significant contributions were made by porting the existing 'iv-viewer' library to React. This project involved enhancing the performance and usability of the viewer by transitioning it to a modern React-based architecture.",
        "The process included collaborating with other developers, maintaining high code quality standards, and ensuring that the React version of the library was robust and easy to use.",
        "The project involved working with React, TypeScript, and TSDX, showcasing strong skills in frontend development and open-source collaboration.",
    ],
    title: "IV Viewer",
    color: "#747474",
    git_url: "https://github.com/manav-gopal/iv-viewer"
},
];

export { CARD_DATA, introduction, education, projects, certificates, skills };

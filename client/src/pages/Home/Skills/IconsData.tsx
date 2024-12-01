import html from "../../../assets/icons/html-5.png";
import scss from "../../../assets/icons/sass.png";
import js from "../../../assets/icons/js.png";
import ts from "../../../assets/icons/typescript.png";
import nodeJs from "../../../assets/icons/node-js.png";
import nextJs from "../../../assets/icons/next-js.png";
import git from "../../../assets/icons/git.png";
import react from "../../../assets/icons/react.png";
import express from "../../../assets/icons/express.png";
import storybook from "../../../assets/icons/storybook.png";

export const IconsData = {
  html: {
    icon: html,
    title: "HTML",
  },
  scss: {
    icon: scss,
    title: "SCSS/CSS",
  },
  js: {
    icon: js,
    title: "JavaScript",
  },
  ts: {
    icon: ts,
    title: "TypeScript",
  },
  react: {
    icon: react,
    title: "ReactJS",
},
nextJs: {
  icon: nextJs,
  title: "NextJS",
  invert: true,
},
  nodeJs: {
    icon: nodeJs,
    title: "NodeJS",
  },
  express: {
    icon: express,
    title: "ExpressJS",
    invert: true,
  },
  storybook: {
    icon: storybook,
    title: "Storybook"
  },
  git: {
    icon: git,
    title: "Git",
    invert: true,
  },
} as const;

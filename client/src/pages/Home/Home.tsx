import React from "react";
// import GitHubRepos from "../../components/GitHubRepos";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

export const Home = () => {
  return (
    <div>
      <Hero /> 
      <About />
      <Projects />
      <Contact />
      {/* <GitHubRepos /> */}
    </div>
  );
};

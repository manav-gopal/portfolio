import React from "react";
import { LinkedInSVG, GithubSVG, XSVG } from "../utils/SVGIcons";

const SocialLinks = () => {
  return (
    <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-6 p-6">
      <a href="https://github.com/manav-gopal" className="w-10" target="_blank" rel="noopener noreferrer">
        <GithubSVG className="icon-hover text-3xl fill-primary-700 hover:fill-primary-400 hover:scale-125 transition-all duration-75"/>
      </a>
      <a href="https://linkedin.com/in/manav-gopal" className="w-10" target="_blank" rel="noopener noreferrer">
        <LinkedInSVG className="icon-hover text-3xl fill-primary-700 hover:fill-primary-400 hover:scale-125 transition-all duration-500"/>
      </a>
      <a href="https://twitter.com/manav-gopal" className="w-10" target="_blank" rel="noopener noreferrer">
        <XSVG className="icon-hover text-3xl fill-primary-700 hover:fill-primary-400 hover:scale-125 transition-all duration-75"/>
      </a>
    </div>
  );
};

export default SocialLinks;

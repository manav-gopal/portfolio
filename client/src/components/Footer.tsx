import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <SocialLinks />
      <div className="flex justify-center pb-4 bg-grayscale-950 text-grayscale-400">
        <span>
          Created by <em>Manav Gopal</em>
        </span>
      </div>
    </div>
  );
};

export default Footer;
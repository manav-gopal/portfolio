import React from "react";
import SkillCards from "./SkillCards";
import { IconsData } from "./IconsData";
import SectionStyled from "../../../ui/Section/SectionStyled";

const Skills = () => {
  return (
    <SectionStyled title={"KEY SKILLS"} subtitle={"Skills in which my expertise align"} id={"skills"}>
        <div className="grid self-center justify-center w-2/3 grid-cols-2 gap-1 mb-10 sm:grid-cols-3 md:grid-cols-5">
          {Object.values(IconsData).map((item, index) => (
            <SkillCards 
              key={index}
              data={item}
            />
          ))}
        </div>
    </SectionStyled>
  );
};

export default Skills;

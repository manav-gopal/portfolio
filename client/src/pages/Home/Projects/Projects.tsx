import React from "react";
import SectionTitle from "../../../utils/SectionTitle";
import ProjectsData from "./ProjectsData";
import SectionStyled from "../../../ui/Section/SectionStyled";

const Projects = () => {
  return (
    <SectionStyled
      id={"projects"}
      title={"PROJECTS"}
      subtitle={"What i have done so far ..."}
    >
      <div className="w-full">
        <ProjectsData />
      </div>
    </SectionStyled>
  );
};

export default Projects;

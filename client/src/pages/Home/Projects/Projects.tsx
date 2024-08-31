import React from "react";
import SectionTitle from "../../../utils/SectionTitle";
import ProjectsData from "./ProjectsData";

const Projects = () => {
  return (
    <div
      id={"projects"}
      className="w-full overflow-hidden-web flex flex-col justify-center items-center"
    >
      <div className="w-full min-h-[800px] xl:w-[70%] relative mt-10 flex flex-col items-center justify-center">
        <div className="w-full h-[20%] mb-10 max-lg:mb-0">
          <SectionTitle title="PROJECTS" subtitle="What i have done so far" />
        </div>
        <div className="w-full">
          <ProjectsData />
        </div>
      </div>
    </div>
  );
};

export default Projects;

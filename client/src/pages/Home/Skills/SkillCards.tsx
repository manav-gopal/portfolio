import React from "react";

interface SkillCardsProps {
  data: {
    icon: string;
    title: string;
    invert?: boolean;
  };
}
const SkillCards = ({ data }: SkillCardsProps) => {
  return (
    <div className="w-[100px] h-[150px] bg-[#4f4f4f10] backdrop-blur-sm flex items-center justify-center flex-col m-2 border-2 border-solid border-[#ffffff20] rounded-lg">
      <div
        id="image-wrapper"
        className="w-[50px] h-[50px] mb-4 rounded-full overflow-hidden flex items-center justify-center"
      >
        {data.invert === true ? (
          <img
            src={data.icon}
            alt="Not Found"
            className="invert"
            width={"50px"}
            height={"50px"}
          />
        ) : (
          <img src={data.icon} alt="Not Found" width={"50px"} height={"50px"} />
        )}
      </div>
      <h1>{data.title}</h1>
    </div>
  );
};

export default SkillCards;

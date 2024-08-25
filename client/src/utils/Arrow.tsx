import React from "react";

const Arrow = () => {
  return (
    <div
      id="scroller"
      className="absolute xs:bottom-10 bottom-12 flex justify-center items-center"
    >
      <a href="#about">
        <div className="flex justify-center items-start p-2">
          <div className="w-full h-full animate-bounce text-6xl text-primary-400">
            ↓
          </div>
        </div>
      </a>
    </div>
  );
};

export default Arrow;

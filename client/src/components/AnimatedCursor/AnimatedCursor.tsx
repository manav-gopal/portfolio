import React from "react";
import AnimatedCursor from "react-animated-cursor";

const AnimateCursor = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={18}
        outerSize={18}
        color="200,200,200"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        outerStyle={{opacity: 0.3}}
        trailingSpeed={4}
      />
    </>
  );
};

export default AnimateCursor;

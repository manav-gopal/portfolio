import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

const AnimateCursor = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <>
      <AnimatedCursor
        innerSize={18}
        outerSize={18}
        color="200,200,200"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        outerStyle={{ opacity: 0.3 }}
        trailingSpeed={4}
      />
    </>
  );
};

export default AnimateCursor;

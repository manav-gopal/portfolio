import { useEffect, useState, useRef } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

const ImageViewer = ({ image }: { image: string }) => {
  const imageRef = useRef(null);

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        ref={imageRef}
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="w-full h-full blob drop-shadow-div"
        style={{ backgroundImage: `url(${image})` }}
      ></m.div>
    </LazyMotion>
  );
};

export default ImageViewer;

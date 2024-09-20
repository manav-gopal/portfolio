import React from "react";
import { domMax, LazyMotion, m } from "framer-motion";
import { CardSliderProps } from "../types";

const CARD_OFFSET = 15;
const SCALE_FACTOR = 0.08;

const CardSlider: React.FC<CardSliderProps> = ({
  cardData,
  index,
  items,
  canDrag,
  onDragEnd,
}) => {
  const [opacity, setOpacity] = React.useState(1);

  const handleClick = () => {
    onDragEnd();
  };
  return (
    <LazyMotion features={domMax}>
      <m.li
        id={"card"}
        style={{
          ...cardStyle,
          cursor: canDrag ? "grab" : "auto",
          opacity: opacity,
        }}
        animate={{
          top: index * -CARD_OFFSET,
          left: index * -CARD_OFFSET,
          scale: 1 - index * SCALE_FACTOR,
          zIndex: items - index,
        }}
        drag={canDrag ? "y" : false}
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragStart={() => {
          setOpacity(0.5);
        }}
        onDragEnd={() => {
          setOpacity(1);
          onDragEnd();
        }}
        onClick={handleClick}
        dragElastic={0.2}
        dragTransition={{ min: 0, max: 100, bounceDamping: 10 }}
      >
        <div className="w-11/12 h-52 flex items-center justify-center">
          <img
            src={cardData.imgURL}
            alt={cardData.title}
            className="w-20 h-20 bg-contain bg-center bg-no-repeat invert select-none"
          />
        </div>
        <h1 className="text-2xl py-5">{cardData.title}</h1>
        <p className="text-sm px-4">{cardData.smallDesc}</p>
        <a
          target="_blank"
          href={cardData.git_url}
          className="text-sm px-6 border-2 border-solid rounded-3xl mt-4 py-2"
        >
          {"GitHub 🔗"}
        </a>
      </m.li>
    </LazyMotion>
  );
};

const cardStyle: React.CSSProperties = {
  position: "absolute",
  width: "300px",
  height: "400px",
  borderRadius: "1rem",
  transformOrigin: "left bottom",
  listStyle: "none",
  marginLeft: "4rem",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  backgroundImage:
    "radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,0,0,1) 0%, rgba(4,0,4,1) 95% )",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
  transition: "opacity .5s",
};

export default CardSlider;

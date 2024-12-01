import React from "react";
import CardSlider from "../../../utils/CardSlider";
import { CARD_DATA } from "../../../assets/Constants/constants";
import { domAnimation, LazyMotion, m } from "framer-motion";
import dragNdrop from "../../../assets/Drag-or-Click.png";

const moveItem = <T,>(array: T[], fromIndex: number, toIndex: number): T[] => {
  const updatedArray = [...array];
  const [movedItem] = updatedArray.splice(fromIndex, 1);
  updatedArray.splice(toIndex, 0, movedItem);
  return updatedArray;
};

const fadeInAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const slideInAnimation = {
  initial: { x: 350 },
  whileInView: { x: 0 },
  transition: { duration: 0.6, type: "spring" }
};

const ProjectsData = () => {
  const [cards, setCards] = React.useState(CARD_DATA);
  const frontCard = cards[0];

  const moveToEnd = (from: number) => {
    setCards(moveItem(cards, from, cards.length - 1));
  };

  return (
    <div className="flex flex-col-reverse h-full lg:flex-row max-lg:items-center">
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-[50%] flex flex-col items-center max-lg:pb-10 max-lg:w-full lg:pt-10"
        >
          <m.h1
            {...fadeInAnimation}
            key={frontCard.title}
            className="w-full px-8 pb-8 text-2xl text-center uppercase text-primary-400"
          >
            {frontCard.title}
          </m.h1>
          <m.div
            {...fadeInAnimation}
            key={frontCard.Desc[0]}
            className="flex flex-col w-full gap-6"
          >
            {frontCard.Desc.map((item) => (
              <p key={item} className="w-full px-8 text-center">
                {item}
              </p>
            ))}
          </m.div>
        </m.div>
        <m.div
          {...slideInAnimation}
          className="relative flex items-center justify-center h-full pl-0 lg:pt-16 lg:pl-28"
        >
          <ul className="relative w-[15rem] h-[25rem] md:w-[22rem] md:h-[32rem]">
            {cards.map((card, index) => (
              <CardSlider
                key={card.color}
                cardData={card}
                index={index}
                items={cards.length}
                canDrag={index === 0}
                onDragEnd={() => moveToEnd(index)}
              />
            ))}
          </ul>
        </m.div>
        <m.img
          initial={{ x: 350, y: -50 }}
          whileInView={{ x: 0, y: -50 }}
          transition={{ duration: 1, type: "spring" }}
          src={dragNdrop}
          alt="Drag and drop instruction"
          className="absolute right-0 hidden w-auto invert opacity-15 md:translate-x-100 lg:block lg:h-24"
        />
      </LazyMotion>
    </div>
  );
};

export default ProjectsData;

const cardWrapStyle: React.CSSProperties = {
  position: "relative",
  width: "350px",
  height: "500px",
};

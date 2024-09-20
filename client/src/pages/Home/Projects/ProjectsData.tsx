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

const ProjectsData = () => {
  const [cards, setCards] = React.useState(CARD_DATA);

  const moveToEnd = (from: number) => {
    console.log("Moving card from index:", from);
    setCards(moveItem(cards, from, cards.length - 1));
  };

  const frontCard = cards[0];

  return (
    <div className="flex h-full flex-col-reverse lg:flex-row max-lg:items-center">
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-[50%] flex flex-col items-center max-lg:pb-10 max-lg:w-full lg:pt-10"
        >
          <m.h1
            key={frontCard.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full text-center text-2xl text-primary-400 uppercase px-8 pb-8"
          >
            {frontCard.title}
          </m.h1>
          <m.div
            key={frontCard.Desc[0]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col gap-6"
          >
            {frontCard.Desc.map((item, key) => {
              return (
                <p key={key} className="w-full text-center px-8">
                  {item}
                </p>
              );
            })}
          </m.div>
        </m.div>
        <m.div
          initial={{ x: 350 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <div className="relative h-full flex items-center justify-center lg:pt-16 lg:pl-28">
            <ul className="relative w-[22rem] h-[32rem]">
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
          </div>
        </m.div>
        <m.img
          initial={{ x: 350, y: -50 }}
          whileInView={{ x: 0, y: -50 }}
          transition={{ duration: 1, type: "spring" }}
          src={dragNdrop}
          alt="Not Found"
          className="hidden w-auto invert opacity-15 absolute right-0 md:translate-x-100 lg:block lg:h-24"
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

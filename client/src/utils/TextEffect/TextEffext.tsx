import React, { useState, useEffect } from "react";
import "./TextEffect.scss";

interface TextEffectProps {
  contents: string[];
  fontSize?: number;
}

export default function TextEffext({
  contents,
  fontSize = 1,
}: TextEffectProps) {
  const sentences = contents;
  const [currentSentence, setCurrentSentence] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSentence((prevSentence) =>
        prevSentence === sentences.length - 1 ? 0 : prevSentence + 1
      );
    }, 4000); // Change every 4 seconds
    return () => clearInterval(intervalId);
  }, [sentences.length]);

  return (
    <div className="box">
      <svg id="logo">
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          style={{
            fontSize: `${fontSize}rem`,
            strokeWidth: `${fontSize / 40}rem`,
          }}
          className="stroke-primary-400 fill-[transparent] text-center"
        >
          {sentences[currentSentence]}
        </text>
      </svg>
    </div>
  );
}

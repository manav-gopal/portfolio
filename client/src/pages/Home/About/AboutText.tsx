import React from "react";
import SectionTitle from "../../../utils/SectionTitle";
import { m, domAnimation, LazyMotion } from "framer-motion";
import { introduction } from "../../../assets/Constants/constants";
import ImageViewer from "../../../utils/ImageViewer";
import AboutImg from '../../../assets/images/personal-removebg.png';

const AboutText = () => {
  return (
    <div id={"intro"} className="w-full h-full flex justify-center overflow-hidden-web">
     <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="ABOUT ME" subtitle="Introduction" />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full md:w-[50%] md:h-full flex items-center mt-10">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="text-grayscale-50 p-6 text-center flex flex-col gap-6"
              >
                <span className="text-primary-400">{introduction.text[0]}</span>
                <span>{introduction.text[1]}</span>
                <span>{introduction.text[2]}</span>
                <span>{introduction.text[3]}</span>
              </m.p>
            </LazyMotion>
          </div>
          <div className="w-full md:w-[50%] flex h-full items-center justify-center">
            <div className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center items-center">
              <ImageViewer image={AboutImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutText;

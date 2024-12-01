import React from "react";
import SectionTitle from "../../../utils/SectionTitle";
import { domAnimation, LazyMotion, m } from "framer-motion";
import TextEffext from "../../../utils/TextEffect/TextEffext";
import ContactForm from "../../../utils/ContactForm";
import SocialLinks from "../../../components/SocialLinks";
import SectionStyled from "../../../ui/Section/SectionStyled";

const Contact = () => {
  const TextEffectContents = ["Let's Connect!", "Got Ideas?"];
  return (
    <SectionStyled id={'contact'} title={'CONTACT'} subtitle={'Get in touch'}>
      <div className="flex items-center justify-center w-full">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full sm:w-[90%] md:w-[80%] sm:h-[600px] rounded-xl border-4 border-primary-400 p-4 mb-4 flex flex-col justify-center items-center"
            >
              <div className="w-full h-[15%]">
                <TextEffext contents={TextEffectContents} fontSize={2} />
              </div>
              <m.div initial={{rotateZ: 100}} whileInView={{rotateZ: 0}} className="w-full h-[80%] max-w-[400px]">
                <ContactForm />
              </m.div>
            </m.div>
          </LazyMotion>
        </div>
    </SectionStyled>
  );
};

export default Contact;

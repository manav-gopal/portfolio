import React from "react";
import SectionTitle from "../../../utils/SectionTitle";
import { domAnimation, LazyMotion, m } from "framer-motion";
import TextEffext from "../../../utils/TextEffect/TextEffext";
import ContactForm from "../../../utils/ContactForm";
import SocialLinks from "../../../components/SocialLinks";

const Contact = () => {
  const TextEffectContents = ["Let's Connect!", "Got Ideas?"];
  return (
    <section
      id={"contact"}
      className="w-full overflow-hidden-web flex flex-col items-center"
    >
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="CONTACT" subtitle="Get in touch" />
        </div>
        <div className="w-full flex justify-center items-center">
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
        {/* <GlobeComponent /> */}
      </div>
      <div className="w-full flex flex-col">
        <SocialLinks />
        <div className="bg-grayscale-950 flex justify-center pb-4 text-grayscale-400">
          <span>
            Created by <em>Manav Gopal</em>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;

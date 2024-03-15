import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-11 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[18px]"
        />

        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor Of Computer Engineering"
            place="Savitribai Phule Pune University (SPPU)"
            time="2021-2025"
            info="Minor in Artificial Intelligence and Machine Learning
            and Major in Computer Science and Engineering."
          />
          <Details
            type="Indian School Certificate Examination (Class-XII)"
            place="Hutchings High School And Junior College"
            time="Passout in 2021"
            info="Relevant course in Science with subjects English, Mathematics, Physics, Chemistry and Computer Science."
          />
          <Details
            type="Indian Certification Of Secondary Education (Class-X)"
            place="Pawar Public School"
            time="Passout in 2019"
            info="Relevant courses included English, Hindi, History, Civics & Geography, Mathematics, 
            Science and Computer Applications"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;

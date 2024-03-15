import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
          py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark
          lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
          xs:text-dark xs:dark:text-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold pb-10 text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkLMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
          p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        <Skill name="HTML" x="-23vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="10vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Refine" x="15vw" y="-12vw" />
        <Skill name="Flask" x="30vw" y="-8vw" />
        <Skill name="C++" x="0vw" y="-20vw" />
        <Skill name="Python" x="-5vw" y="25vw" />
        <Skill name="Drupal" x="18vw" y="18vw" />
        <Skill name="DBMS" x="-20vw" y="15vw" />
        <Skill name="MongoDB" x="38vw" y="2vw" />
        <Skill name="SQL" x="-38vw" y="0vw" />
      </div>
    </>
  );
};

export default Skills;

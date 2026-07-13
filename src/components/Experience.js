import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-11 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[18px]
          "
        />

        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <Details
            position="Junior Software Engineer"
            company="Elastik Teams"
            companyLink="#"
            time="June 2025 - Present"
            address="New Orleans"
            work="Developing a full-stack end-to-end proposal management system using Node.js (Backend) and Angular (Frontend), supporting business workflows and automation. Maintaining and enhancing a .NET Framework 4.5 billing system used for Iron Hide Systems, ensuring reliability and accurate transaction handling. Managing and maintaining a Drupal-based website for an association's ALA Programming Librarian Platform, including content updates and performance improvements."
          />
          <Details
            position="Software Development Intern"
            company="Elastik Teams"
            companyLink="#"
            time="January 2025 - June 2025"
            address="New Orleans"
            work="Gained hands-on exposure to Microsoft Azure Fundamentals, including cloud concepts, services, and deployment basics. Worked with Power BI to understand data visualization, reporting, and business insights. Supported internal technical teams by assisting with tooling, documentation, and exploratory development tasks."
          />
          <Details
            position="Blockchain Junior Developer"
            company="OpenScanAI"
            companyLink="https://xdcscan.io"
            time="August 2024 - January 2025"
            address="Remote"
            work="Worked on the company's core blockchain product xdcscan.io, contributing to feature development and product enhancements. Worked on XDCRemix, used to create blockchain smart contracts. Developed a feature enabling support for both 0x and XDC wallet address formats."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

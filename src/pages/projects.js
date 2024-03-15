import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Featuredproject1 from "../../public/images/projects/ChitChatHub.png";
import Featuredproject2 from "../../public/images/projects/RealEstate.png";
import Featuredproject3 from "../../public/images/projects/ExpressMotors.png";
import project1 from "../../public/images/projects/AgileSattav.png";
import project2 from "../../public/images/projects/Yugma.png";
import project3 from "../../public/images/projects/FlightBooking.png";
import project4 from "../../public/images/projects/CourseListing.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ title, summary, img, type, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-2xl relative
    border border-dark border-solid bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-4xl font-bold text-left dark:light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark 
            sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = ({ title, img, type, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xxs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-1.5"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-3xl font-bold text-left lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Mosin Inamdar | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className="col-span-12">
              <FeaturedProject
                title="ChitChatHub"
                summary="ChitChatHub revolutionizes online conversations. 
                Developed with MERN Stack and Tailwind CSS, it offers seamless interactions, real-time messaging,
                and dynamic user experiences. Join the hub for engaging discussions and effortless connections."
                img={Featuredproject1}
                type="FeaturedProject"
                link="https://chitchathub-zdsi.onrender.com"
                github="https://github.com/MosinInamdar/ChitChatHub"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Projects
                title="Agilesattva"
                img={project1}
                type="Project"
                link="https://agilesattva.netlify.app/"
                github="https://github.com/krushna53/AgileSattva"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Projects
                title="Yugma Ventures"
                img={project2}
                type="Project"
                link="https://yugmav.in/"
                github="https://github.com/krushna53/yugma-ventures-main"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Real Estate : Create and Sell Properties"
                summary="Transforming real estate with our platform. 
                Built with MongoDB, Refine, ExpressJS, NodeJS, it empowers users to effortlessly create, 
                update, and sell properties. Navigate listings with a sleek dashboard for optimal management."
                img={Featuredproject2}
                type="FeaturedProject"
                link="https://propertyestate.netlify.app/"
                github="https://github.com/MosinInamdar/RealEstate"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Projects
                title="FlightBooking"
                img={project3}
                type="Project"
                link="https://flightbooking-mj9m.onrender.com"
                github="https://github.com/MosinInamdar/flightBooking"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Projects
                title="CourseListing"
                img={project4}
                type="Project"
                link="https://courselisting-mu.vercel.app/"
                github="https://github.com/MosinInamdar/Course-Listing"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Express Motors"
                summary="Express Motors is your premier destination for purchasing quality used cars online. 
                With a user-friendly interface powered by Drupal, our site offers a diverse selection of 
                vehicles to suit every need and budget. Stay tuned as we work diligently to bring you a 
                seamless buying experience! Git Repository is private as site is still underconstruction."
                img={Featuredproject3}
                type="FeaturedProject"
                link="https://express-motors.krushna53.com/"
                github="https://github.com/krushna53/express-motors"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

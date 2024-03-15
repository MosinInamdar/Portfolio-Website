import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden
    md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0 z-20
    "
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />
        <Link
          href="mailto:mosininamdar18@gmail.com"
          className="flex items-center justify-center absolute left-[50%] top-[50%] 
          translate-x-[-50%] translate-y-[-50%] shadow-md border border-solid bg-dark 
          rounded-full text-white w-20 h-20 font-semibold hover:bg-light hover:border-dark
           hover:text-dark dark:text-dark dark:bg-light dark:hover:bg-dark
            dark:hover:text-light dark:hover:border-light dark:shadow-light/25
             md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;

import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="px-5 sm:px-10 lg:px-32 bg-black py-10 w-full">
      <p className="text-white text-center sm:text-lg lg:text-base ">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex flex-col md:flex-row justify-start items-start lg:justify-center lg:items-center mt-6 gap-3 lg:w-full w-11/12 mx-auto">
        <input
          type="email"
          placeholder="Email address"
          className="w-full md:w-7/12 lg:w-5/12 p-3 md:p-4 rounded bg-gray-800 text-white text-base placeholder-gray-500 focus:outline focus:outline-white outline outline-1 outline-neutral-500"
        />
        <button className="bg-red-600 w-3/4 md:w-5/12 lg:w-2/12 p-2 md:p-4 rounded flex items-center justify-center hover:bg-red-700 transition-colors duration-300">
          <span className="text-lg md:text-xl text-white font-medium">
            Get Started
          </span>
          <RiArrowRightSLine className="text-white text-2xl ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Footer;

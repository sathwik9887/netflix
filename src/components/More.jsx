import React from 'react';
import { FiMonitor } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import { IoTelescopeSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";

const More = () => {
    const reasons = [
        {
          id: 1,
          headlines: "Enjoy on your TV",
          underlines: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
          image: <FiMonitor />, 
        },
        {
          id: 2,
          headlines: "Download your shows to watch offline",
          underlines: "Save your favourites easily and always have something to watch.",
          image: <LuDownload />, 
        },
        {
          id: 3, 
          headlines: "Watch everywhere",
          underlines: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
          image: <IoTelescopeSharp />, 
        },
        {
          id: 4,
          headlines: "Create profiles for kids",
          underlines: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
          image: <FaUsers />, 
        }
      ];
      


  return (
    <div className='px-5 sm:px-10 lg:px-32 bg-black space-y-5'>
      <h1 className='text-white font-semibold md:text-3xl text-2xl'>
        More reasons to join
      </h1>

      <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-4'>

        {reasons.map((reason, index) => (
        <div key={index} className="relative p-5 border-none rounded-2xl bg-gray-900 py-24 pt-3 flex-1 md:w-1/4">
            <h1 className="text-white py-3 font-semibold md:text-2xl text-xl">{reason.headlines}</h1>
            <h3 className='text-white py-3 w-full'>
            {reason.underlines}
            </h3>
            <div className='absolute right-5 bottom-6 w-full flex justify-end'>
            <div className='text-6xl text-white'>
            {reason.image} 
            </div>
        </div>
        </div>
        ))}

      </div>
    </div>
  );
};

export default More;

import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <section className='text-center md:w-3/4 lg:w-1/2 mx-auto p-6 mb-36 md:mb-32 sm:mb-24'>
     
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 hidden lg:block'>
        Unlimited movies, 
      </h1>

      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 hidden lg:block'>
       TV shows and more
      </h1>

  
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 lg:hidden'>
        Unlimited movies, TV
      </h1>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 lg:hidden'>
        shows and more
      </h1>

     
      <h4 className='text-lg sm:text-xl md:text-2xl font-semibold text-white mb-5'>
        Starts at ₹149. Cancel at any time.
      </h4>

    
      <p className='text-md sm:text-md md:text font-semibold text-white mb-4'>
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <form className="flex flex-col justify-center items-center space-x-2 md:flex-row space-y-10 md:space-y-0">
        <input type="text" placeholder='Enter the email' className='px-4 py-3.5 rounded w-full focus:ring-red-500 md:w-1/2 lg:w-ful focus:outline-none  lg:space-y-0'/>
        <div className='flex justify-center items-center bg-red-600 py-2 px-2 lg:px-5 rounded'>
         <span className="mr-2 text-2xl text-white text-center lg:ml-0 ml-3">Get Started</span>
        <MdKeyboardArrowRight className='text-4xl text-white'/>
        </div>
      </form>
    </section>
  );
};

export default Hero;

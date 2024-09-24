import React from 'react';
import Logo from "../assets/Logo.png";
import { IoLanguage } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";


const Hello = () => {
  return (
    <nav className='flex justify-between items-center w-full lg:px-24 md:px-20 px-4'>
      <img src={Logo} alt="Logo" className='w-24 h-auto md:w-36 lg:w-52' />
      <div className='flex space-x-4 items-center'>
        <div className='flex justify-center items-center space-x-2 border border-gray-500 rounded cursor-pointer py-1 px-2'>
        <IoLanguage className='text-lg text-white'/>
        <span className='hidden sm:inline text-white'>English</span>
       < FaCaretDown className='text-lg text-white'/>
      </div>
      <button className='bg-red-600 text-white font-normal px-3 md:px-4 py-1 rounded'>
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Hello;

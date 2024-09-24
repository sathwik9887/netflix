import React, { useState, useEffect } from 'react';
import Card1 from '../assets/Card1.webp';
import Card2 from '../assets/Card2.webp';
import Card3 from '../assets/Card3.webp'; // Ensure you have this image
import Card4 from '../assets/Card4.webp'; // Ensure you have this image
import Card5 from '../assets/Card5.webp'; // Ensure you have this image
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineChevronLeft } from "react-icons/md";

const images = [
    { id: 1, image: Card1 },
    { id: 2, image: Card2 },
    { id: 3, image: Card3 },
    { id: 4, image: Card4 },
    { id: 5, image: Card5 },
];

const Section = () => {
    const [slider, setSlider] = useState(0);
    const [visibleImagesCount, setVisibleImagesCount] = useState(1); // Default to 1

    // Function to determine visible images count based on window width
    const updateVisibleImagesCount = () => {
        const width = window.innerWidth;

        if (width >= 1024) { // lg: 1024px and above
            setVisibleImagesCount(6);
        } else if (width >= 768) { // md: 768px to 1023px
            setVisibleImagesCount(3);
        } else { // sm: less than 768px
            setVisibleImagesCount(1);
        }
    };

    useEffect(() => {
        updateVisibleImagesCount(); 
        window.addEventListener('resize', updateVisibleImagesCount); 

        return () => {
            window.removeEventListener('resize', updateVisibleImagesCount); 
        };
    }, []);

    const handleLeftSlider = () => {
        setSlider((prevIndex) => 
            prevIndex === 0 ? images.length - visibleImagesCount : prevIndex - 1
        );
    };

    const handleRightSlider = () => {
        setSlider((prevIndex) => 
            prevIndex >= images.length - visibleImagesCount ? 0 : prevIndex + 1
        );
    };

    return (
        <div className='my-8 w-screen bg-black'>
           
            <div className='relative'>
                <div className='absolute bottom-48 h-[100px] w-screen bg-gradient-to-t'></div>
            </div>

            <div className='px-10 lg:px-32 md:px-5 py-5'>
                <h1 className='text-white font-semibold lg:text-2xl text-xl'>Trending Now</h1>
                <div className='w-full mt-6 lg:px-6 px-1 flex items-center space-x-5 lg:space-x-14 md:space-x-8'>
                    <div className='flex justify-center items-center lg:bg-gray-800 rounded-xl w-8 h-32 cursor-pointer transition hover:bg-gray-700' onClick={handleLeftSlider}>
                        <MdOutlineChevronLeft className='text-6xl text-white' />
                    </div>

                    <div className='flex space-x-5 overflow-hidden'>
                        {images.slice(slider, slider + visibleImagesCount).map((img) => (
                            <div key={img.id} className="w-28 lg:w-auto">
                                <img
                                    src={img.image}
                                    alt={`Card${img.id}`}
                                    className='w-28 lg:w-auto rounded-xl transform transition duration-500 hover:scale-110'
                                />
                            </div>
                        ))}
                    </div>

                    <div className='flex justify-center items-center lg:bg-gray-800 rounded-xl w-8 h-32 cursor-pointer transition hover:bg-gray-700' onClick={handleRightSlider}>
                        <MdKeyboardArrowRight className='text-6xl text-white' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;

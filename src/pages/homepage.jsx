import Nav from '../../src/components/nav';
import Cards from '../../src/components/cards';
import React from 'react';

import hero from '../assets/hero_banner.jpg';
import name from '../assets/hero_title.png';

const Homepage = () => {
  return (
    <>
      <Nav />
      {<div className="relative w-full">
        
        <img className="w-full h-screen object-cover" src={hero} alt="Front Page" />

        
        <div className="absolute bottom-10 left-5 sm:left-10 p-4 sm:p-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
          
          <img className="w-2/3 sm:w-3/4 mb-4" src={name} alt="Title" />

         
          <p className="mb-4 sm:mb-6 text-amber-50 text-sm sm:text-lg md:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi delectus minus fugit beatae? Voluptate sed cum sapiente commodi quaerat sint ea officiis minus?
          </p>

          {/* Buttons */}
          <div className="flex gap-3 sm:gap-4">
            <button className="h-8 sm:h-10 w-24 sm:w-32 bg-white text-black rounded-2xl hover:bg-red-500 hover:text-white transition-colors duration-300">
              Play
            </button>
            <button className="h-8 sm:h-10 w-24 sm:w-32 bg-white text-black rounded-2xl hover:bg-red-500 hover:text-white transition-colors duration-300">
              More Info
            </button>
          </div>
        </div>
       </div> }
      <Cards />
    </>
  );
};

export default Homepage;

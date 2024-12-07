import React from 'react';
import hero from '../../Footage/hero.jpg';


function Hero() {
  return (

    <div className="flex flex-col md:flex-row h-full w-[80%] justify-between items-center m-auto mt-8">

      <div className="w-full md:w-[50%]  ">
        <p className='font-bold font-mono'>Session Sale</p>
        <h1 className='font-bold text-start text-4xl mt-1'>Elevate Your <span className='text-[#FF735C]'>Style</span> with <span className='text-[#FF735C]' >Fashion</span> </h1>
        <h1 className='font-bold text-start text-3xl mt-4 whitespace-nowrap'>Jewelry & Electronics</h1>
        <p className='mt-2'>Save more with coupons & up tp 20% off</p>

        <button className="rounded w-28 h-9 mt-4 bg-[#385A64] text-white hover:bg-white hover:border-[#385A64] border hover:text-black transition duration-300 ease-in-out">
          Explore
        </button>

      </div>

      <div className="w-full md:w-[50%] mt-4 md:mt-0">
        <img src={hero} alt="Hero" className="w-full h-auto" />
      </div>

    </div>


  );
}

export default Hero;

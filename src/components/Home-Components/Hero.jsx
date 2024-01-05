import React from "react";
import { SiGooglescholar } from 'react-icons/si';
import banner from "../../assets/banner.jpeg";

const HeroSection = () => {
  return (
    <>
      <section className="mx-5 h-[30rem] flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover bg-gray-400 bg-blend-multiply text-center" style={{ backgroundImage: `url('${banner}')` }}>
        <div className="text-white flex flex-col items-center justify-center w-full">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl hidden md:block animate__animated animate__slideInDown">The Chemsite</h1>
          <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-6 lg:px-48 text-justify p-2">
            Chemistry begins in the stars. The stars are the source of the chemical elements, which are the building blocks of matter and the core of our subject. Chemistry can be a good and bad thing. Chemistry is good when you make love with it. Chemistry is bad when you make crack with it.
          </p>
          <div className='flex items-center justify-center'>
            <button className='text-lg text-blue-700 flex gap-2 text-center items-center bg-white p-3 hover:bg-blue-700 hover:text-white transition-all duration-500'><SiGooglescholar /> Google Scholar</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

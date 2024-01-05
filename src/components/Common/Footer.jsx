import React from 'react';
import { GiFizzingFlask } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4">
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex items-center gap-2">
          © 2023 <a href="#" className="hover:underline flex items-center gap-1"> <GiFizzingFlask/> Chemsite. all rights reserved</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

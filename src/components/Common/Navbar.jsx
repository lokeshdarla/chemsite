import React, { useState } from 'react';
import { GiFizzingFlask } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { PiList } from "react-icons/pi";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white border-gray-200 fixed z-20 top-0 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 justify-between">
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <p className="text-2xl text-blue-700">
            <GiFizzingFlask />
          </p>
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Chemiste
          </span>
        </NavLink>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-700 text-3xl"
          >
            <PiList/>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:w-auto md:flex md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                onClick={toggleMenu}
                activeClassName="text-blue-700"
                className="block py-2 px-3 rounded md:bg-transparent md:text-gray-900 md:p-0"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/research"
                onClick={toggleMenu}
                activeClassName="text-blue-700"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Research
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/publications"
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Publications
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/useful-links"
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Useful Links
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;

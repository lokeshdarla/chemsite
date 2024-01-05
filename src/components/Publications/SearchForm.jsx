import React from 'react';
import { GiFizzingFlask } from 'react-icons/gi';
import { IoIosSearch } from "react-icons/io";

const SearchForm = () => {
  return (
    <form className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <GiFizzingFlask />
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          placeholder="Photodynamic therapy.."
          required
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-600 rounded-lg border border-blue-700"
      >
        <IoIosSearch />
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default SearchForm;

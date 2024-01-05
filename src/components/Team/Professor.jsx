import React from 'react';
import prof from "../../assets/prof.jpeg"

const ProfessorProfile = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 bg-white shadow mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="font-bold text-gray-700 text-xl">22</p>
              <p className="text-gray-400">Articles</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">10</p>
              <p className="text-gray-400">Publications</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">89</p>
              <p className="text-gray-400">Research Papers</p>
            </div>
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
             <img src={prof}  className="rounded-full" alt="" />
            </div>
          </div>

          <div className="space-x-8 flex mt-32 md:mt-0 md:justify-center items-center">
            <button className="w-36 text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Connect
            </button>
            <button className="text-white py-2 px-2 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Download CV
            </button>
          </div>
        </div>

        <div className="mt-20 text-center pb-12">
          <h1 className="text-4xl font-medium text-gray-700">Dr. Professor Name</h1>
          <p className="font-light text-gray-600 mt-3">Amaravati, Andhra Pradesh</p>

          <p className="mt-8 text-gray-500">Assistant Professor - Chemistry Department</p>
          <p className="mt-2 text-gray-500">SRM University, AP</p>
        </div>

      </div>
    </div>
  );
}

export default ProfessorProfile;

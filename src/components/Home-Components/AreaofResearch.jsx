import React from 'react';

const AreaOfResearch = () => {
  return (
    <div id="services" className="flex-col items-center justify-center bg-white text-center gap-10 p-10">
      <h3 className="text-3xl m-5">Area of Research</h3>
        <div className="flex flex-wrap flex-row text-center gap-10 items-center w-full justify-center">
            <div className='h-44 w-44 bg-white shadow-xl flex items-center justify-center text-center px-3 py-5'>
              <span className='text-sm p-2 text-gray-600'>Photodynamic therapy (PDT) and Photodynamic antimicrobial chemotherapy (PACT)</span>
            </div>
            <div className='h-44 w-44 bg-white shadow-xl flex items-center justify-center text-center px-3 py-5'>
              <span className='text-sm p-2 text-gray-600'>Ferrocene conjugates</span>
            </div>
            <div className='h-44 w-44 bg-white shadow-xl flex items-center justify-center text-center px-3 py-5'>
              <span className='text-sm p-2 text-gray-600'>Porphyrinoids – Porphyrin, N-Confused porphyrin, Corrole, Chlorin</span>
            </div>
        </div>
      </div>
  );
};

export default AreaOfResearch;

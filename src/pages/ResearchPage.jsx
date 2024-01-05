import React from 'react';
import {Timeline,ResearchInfo} from '../components/Research-Components'

const ResearchPage = () => {
  return (
    <>
      <ResearchInfo/>
      <div className='p-10 flex  w-full justify-center'>
      <Timeline/>
      </div>
     
    
    </>
  );
};

export default ResearchPage;

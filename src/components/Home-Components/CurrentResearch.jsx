import React from "react";
import { useNavigate } from "react-router-dom";
import pdt from '../../assets/pdt.png';
import { Button } from '@mui/material';

const CurrentResearch = () => {
  const navigate = useNavigate();
  const navigateToResearch = () => {
    navigate('/research');
  };
  return (
    <section className="flex flex-col items-center justify-center p-5 sm:p-10 shadow-md lg:m-20">
        <h3 className="text-3xl m-5">Current Research</h3>
        <div className="flex flex-col-reverse items-center text-center lg:flex-row lg:mx-20 gap-5 md:gap-10">
          <div className="text-center">
            <h3 className="text-2xl m-5 text-gray-700">Photo Dynamic Therapy</h3>
            <p className="text-justify text-gray-500">
              A research brief is a concise summary or outline of a research project or study. A research brief is often used as a preliminary document to communicate the key aspects of a research project to stakeholders such as funders, clients, or research teams. It can also serve as a guide for researchers to ensure that they stay focused and on track throughout the research process. The content and format of a research brief can vary depending on the specific requirements and audience, but it should always provide a clear and accurat description of the proposed research.
            </p>
          </div>
          <figure className="max-w-full lg:max-w-lg">
            <img className="h-auto w-full rounded-lg" src={pdt} alt="Photo-Dynamic Therapy" />
            <figcaption className="mt-2 text-sm text-gray-500">Photo-Dynamic Therapy</figcaption>
          </figure>
        </div>
        <Button variant="outlined" onClick={navigateToResearch}>View Detail</Button>

      </section>
  );
}

export default CurrentResearch;

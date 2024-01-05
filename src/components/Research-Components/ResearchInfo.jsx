import React from "react";
import pdt from "../../assets/pdt.png"

const ResearchInfo = () => {
  return (
    <section className="flex flex-col items-center justify-center p-5 sm:p-10 mt-20 lg:15 ">
      <h1 className="mb-4 flex items-center text-2xl font-extrabold tracking-tight leading-none md:text-4xl text-gray-600 lg:text-5xl">
        Photo Dynamic Therapy 
      </h1>
      <div className="flex flex-col items-center text-center lg:mx-20 gap-5 md:gap-10">
        <figure className="max-w-full lg:max-w-lg">
          <img className="h-auto w-full rounded-lg" src={pdt} alt="Photo-Dynamic Therapy" />
          <figcaption className="mt-2 text-sm text-gray-500">Photo-Dynamic Therapy</figcaption>
        </figure>
        <div className="text-center justify-center flex">
          <p className="text-justify lg:w-2/3">
            A research brief is a concise summary or outline of a research project or study. A research brief is often
            used as a preliminary document to communicate the key aspects of a research project to stakeholders such
            as funders, clients, or research teams. It can also serve as a guide for researchers to ensure that they stay
            focused and on track throughout the research process. The content and format of a research brief can vary
            depending on the specific requirements and audience, but it should always provide a clear and accurate
            description of the proposed research.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ResearchInfo;

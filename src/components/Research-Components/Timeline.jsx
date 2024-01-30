import React from 'react';
import { LuCircleDashed } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const timelineData = [
  {
    title: 'Scientific Publications',
    icon: <LuCircleDashed size={30}/>,
    status: 'Latest',
    releaseDate: 'February 15th, 2022',
    description: 'Scientific Publication(s) means documents, posters, manuscripts, abstracts or the like, of a scientific or medical nature, which include any data, results of any clinical trial or any other information regarding or related to the Licensed Product',
  },
  {
    title: 'Emperical Probelm Analysis',
    icon: <IoMdCheckmarkCircleOutline size={30}/>,
    releaseDate: 'January 10th, 2022',
    description: 'Empirical analysis is an evidence-based approach to the study and interpretation of information. Empirical evidence is information that can be gathered from experience or by the five senses. In a scientific context, it is called empirical research.',
  },
  {
    title: 'Theoretical Problem Analysis',
    icon: <IoMdCheckmarkCircleOutline size={30}/>,
    releaseDate: 'January 5th, 2022',
    description: 'It specifies related terms in detail, e.g. the ability to perceive the problem, the perceptibility of the problem, the willingness to solve the problem, the awareness of existence of the problem or strategies of problem solving.',
  },
];

const Timeline = () => {
  return (
    <ol className="relative border-s border-gray-200 lg:w-1/2">
      {timelineData.map((item, index) => (
        <li key={index} className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 bg-white">
            {item.icon}
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
            {item.title}
            {item.status && (
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
                {item.status}
              </span>
            )}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Released on {item.releaseDate}</time>
          <p className="mb-4 text-base font-normal text-gray-500">{item.description}</p>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
          >
            Download ZIP
          </a>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;

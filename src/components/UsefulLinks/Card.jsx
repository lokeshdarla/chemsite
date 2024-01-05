import React from 'react';

const UsefulLinkCard = ({ title, description, link,icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-96">
      
      <a
        href={link}
        className="hover:text-blue-500 mt-4 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
      <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2"><span className='text-blue-500'>{icon}</span>{title}</h3>
      <p className="text-gray-600">{description}</p>
      </a>
    </div>
  );
};

export default UsefulLinkCard;

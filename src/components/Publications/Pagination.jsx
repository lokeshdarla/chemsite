import React from 'react';

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-base h-10">
        {Array.from({ length: 6 }, (_, index) => (
          <li key={index}>
            <a
              href="#"
              className={`flex items-center justify-center px-4 h-10 ${
                index === 3
                  ? 'text-blue-600 border bg-blue-50'
                  : 'text-gray-500 bg-white border'
              } ${
                index === 0
                  ? 'border-e-0 rounded-s-lg'
                  : index === 5
                  ? 'rounded-e-lg'
                  : ''
              } hover:bg-gray-100 hover:text-gray-700`}
            >
              {index === 0 && 'Previous'}
              {index !== 0 && index !== 5 && index}
              {index === 5 && 'Next'}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

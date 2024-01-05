import React from 'react';
import { SearchForm,Pagination,PublicationCard } from '../components/Publications';

const PublicationPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 p-5 mt-10 ">
        <h3 className="text-3xl mt-10">Recent Publications</h3>
        <SearchForm />
        <div className="flex flex-wrap items-center justify-center gap-5">
          {[...Array(8)].map((_, index) => (
            <PublicationCard key={index} />
          ))}
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default PublicationPage;

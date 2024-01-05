import React from 'react';
import { ProfessorProfile,TeamSection } from '../components/Team';

const TeamPage = () => {
  return (
    <section className="bg-white mt-10">
      <ProfessorProfile/>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Students</h2>
        </div>
        <TeamSection/>
      </div>
    </section>
  );
}

export default TeamPage;

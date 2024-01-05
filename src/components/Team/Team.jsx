import React from 'react';
import TeamMember from './MemberCard';

const TeamSection = () => {
  return (
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        <TeamMember
            name="Bonnie Green"
            role="CEO & Web Developer"
            description="Bonnie drives the technical strategy of the flowbite platform and brand."
            imageUrl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          />
           <TeamMember
            name="Bonnie Green"
            role="CEO & Web Developer"
            description="Bonnie drives the technical strategy of the flowbite platform and brand."
            imageUrl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          />
           <TeamMember
            name="Bonnie Green"
            role="CEO & Web Developer"
            description="Bonnie drives the technical strategy of the flowbite platform and brand."
            imageUrl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          />
        </div>
  );
}

export default TeamSection;

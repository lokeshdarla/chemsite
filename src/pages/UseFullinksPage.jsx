import React from "react";
import UsefulLinkCard from '../components/UsefulLinks/Card'
import { SiGooglescholar } from "react-icons/si";
import { LuAtom } from "react-icons/lu";
import { MdArticle } from "react-icons/md";
import { IoIosJournal } from "react-icons/io";
import { FaMicroscope } from "react-icons/fa";
import { LuLink } from "react-icons/lu";

const LinksSection = () => {
  const usefulLinks = [
    {
      title: 'Google Scholar',
      icon: <SiGooglescholar/>,
      description: 'Google Scholar provides a simple way to broadly search for scholarly literature.',
      link: 'https://reactjs.org/',
    },
    {
      title: 'MDN Web Docs',
      icon: <LuAtom/>,
      description: 'A comprehensive resource for web developers.',
      link: 'https://developer.mozilla.org/',
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 gap-5">
        <h3 className="text-3xl m-10 flex items-center gap-2"><span className="text-blue-700"><LuLink/></span>Some Useful Links</h3>
        <div className="flex flex-wrap items-center gap-12">
        <div className="flex flex-col items-center gap-6">
        <h3 className="text-2xl flex items-center gap-2"><span className="text-blue-700"><FaMicroscope/></span>Research Related</h3>
          {usefulLinks.map((link, index) => (
            <UsefulLinkCard key={index} {...link} />
          ))}
        </div>
        <div className="flex flex-col items-center gap-6">
        <h3 className="text-2xl flex items-center gap-2"><span className="text-blue-700"><MdArticle/></span>Articles Related</h3>
          {usefulLinks.map((link, index) => (
            <UsefulLinkCard key={index} {...link} />
          ))}
        </div>
        <div className="flex flex-col items-center gap-6">
        <h3 className="text-2xl flex items-center gap-2"><span className="text-blue-700"><IoIosJournal/></span>Journals Related</h3>
          {usefulLinks.map((link, index) => (
            <UsefulLinkCard key={index} {...link} />
          ))}
        </div>
        </div>
        
      </div>
    </>
  );
};

export default LinksSection;

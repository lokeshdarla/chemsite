import React from "react";
import { useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { indigo } from "@mui/material/colors";

const ChemistryFAQData = [
  {
    question: "What is chemistry research?",
    answer:
      "Chemistry research involves the systematic investigation of chemical substances, their properties, composition, reactions, and applications. Researchers in chemistry explore new materials, develop methodologies, and contribute to our understanding of the molecular world.",
  },
  {
    question: "Who can participate in chemistry research?",
    answer:
      "Chemistry researchers include scientists, students, and professionals in the field of chemistry. Anyone with a passion for understanding the behavior of molecules and their interactions can engage in chemistry research.",
  },
  {
    question: "Do I need a chemistry background to conduct research?",
    answer:
      "While a background in chemistry is beneficial, individuals from related fields can also contribute to chemistry research. Collaboration among researchers with diverse expertise often leads to innovative discoveries.",
  },
  {
    question: "Are there costs associated with chemistry research?",
    answer:
      "The costs of chemistry research can vary. Some research projects may require funding for equipment, chemicals, and facilities. However, there are also opportunities for funded research projects and collaborations.",
  },
  {
    question: "Is chemistry research typically conducted in teams?",
    answer:
      "Yes, collaborative efforts are common in chemistry research. Research teams often bring together individuals with complementary skills to address complex scientific questions and challenges.",
  },
  {
    question: "Can I pursue individual chemistry research projects?",
    answer: "Yes, individual researchers can undertake independent projects and contribute to the advancement of chemistry knowledge.",
  },
];

export function FAQSection() {
  return (
    <section id="ChemistryFAQs" className="py-4 pt-20">
      <h3 className="text-3xl text-center m-10 leading-relaxed">Frequently Asked Questions</h3>
      <div className="mx-auto px-3">
        <div className="mx-auto flex max-w-2xl font-roboto-mono flex-col space-y-3 rounded-md">
          {ChemistryFAQData.map((faq) => {
            return (
              <div key={faq.question} className="z-10">
                  <Accordion >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="hover:text-indigo-500 active:text-indigo-500"
                    >
                      <Typography >{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const ChemistryQuestionsAndAnswers = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 shadow" key={faq.question}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex cursor-pointer justify-between gap-2 py-3 hover:text-indigo-500 active:text-indigo-500"
      >
        <span className="z-10 text-lg font-light antialiased transition duration-100 w-fit">
          {faq.question}
        </span>
        <span>
          {isOpen ? (
            <BiUpArrowAlt />
          ) : (
            <BiDownArrowAlt />
          )}
        </span>
      </div>
      {isOpen ? (
        <p className="mb-4 py-2 font-normal text-gray-700 w-96">
          {faq.answer}
        </p>
      ) : null}
    </div>
  );
};

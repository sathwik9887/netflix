import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service",
    },
    {
      question: "How much does Netflix cost?",
      answer: "Plans range from $8.99 to $17.99",
    },
    {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime",
    },
    {
      question: "What can I watch on Netflix?",
      answer: "Netflix has an extensive library of feature films",
    },
    {
      question: "How do I cancel?",
      answer: "Netflix is flexible",
    },
    {
      question: "Is Netflix good for kids",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
    },
  ];

  return (
    <div className="px-5 sm:px-10 lg:px-32 bg-black space-y-5 py-10 w-full">
      <h1 className="text-white font-semibold md:text-3xl text-2xl my-10">
        Frequently Asked Questions
      </h1>
      <div className="container mx-auto space-y-3">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-md p-4 text-white cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">{faq.question}</p>
              {open === index ? <FaMinus /> : <FaPlus />}
            </div>
            {open === index && (
              <div className="mt-3 text-sm text-gray-300">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

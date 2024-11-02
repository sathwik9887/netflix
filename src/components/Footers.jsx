import React from "react";
import { LuLanguages } from "react-icons/lu";
import { MdOutlineArrowDropDown } from "react-icons/md";

const footerLinks = [
  {
    section: [
      { name: "FAQ", href: "#" },
      { name: "Investor Relations", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Speed Test", href: "#" },
    ],
  },
  {
    section: [
      { name: "Help Centre", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "Cookie Preferences", href: "#" },
      { name: "Legal Notices", href: "#" },
    ],
  },
  {
    section: [
      { name: "Account", href: "#" },
      { name: "Ways to Watch", href: "#" },
      { name: "Corporate Information", href: "#" },
      { name: "Only on Netflix", href: "#" },
    ],
  },
  {
    section: [
      { name: "Media Centre", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
];

const Footers = () => {
  return (
    <div className="px-5 sm:px-10 lg:px-32 bg-black py-10 w-full">
      <div>
        <p className="text-gray-400">
          Questions? Call{" "}
          <span className="underline cursor-pointer text-gray-400">
            000-800-919-1694
          </span>
        </p>
        <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          {footerLinks.map((linkSection, index) => (
            <ul key={index} className="flex flex-col gap-2">
              {linkSection.section.map((link, idx) => (
                <li
                  key={idx}
                  className="text-gray-400 cursor-pointer underline"
                >
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center space-x-1 mt-10 border w-32 rounded-md bg-zinc-900 px-3 py-1 cursor-pointer hover:bg-zinc-700 transition-all duration-200">
        <LuLanguages className="text-zinc-300" />
        <p className="text-zinc-300">English</p>
        <MdOutlineArrowDropDown className="text-zinc-300" />
      </div>
      <p className="text-gray-400 mb-10 mt-14 text-sm">Netflix India</p>
    </div>
  );
};

export default Footers;

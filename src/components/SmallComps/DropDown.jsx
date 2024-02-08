import React, { useEffect, useRef, useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-scroll';

const RightAlignedDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-right text-white" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="text-xl border p-2 rounded-lg">
        <CiMenuBurger/>
      </button>
      {isOpen && (
        <div className="flex flex-col absolute right-0 mt-2 bg-black text-slate-200 border border-solid border-gray-300 rounded-lg sm:w-36 w-28 shadow-md shadow-purple-300">
          <Link 
         activeClass="active"
         to="about-section"
         spy={true}
         smooth={true}
         offset={-70}
         duration={500}
        className="nav-link block px-4 py-2 cursor-pointer text-center">About</Link>
        <hr />
        <Link  activeClass="active"
          to="projects-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} className="nav-link block px-4 py-2 cursor-pointer text-center">Projects</Link>
          <hr />
        <Link  activeClass="active"
          to="contact-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} className="nav-link block px-4 py-2 cursor-pointer text-center">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default RightAlignedDropdown;

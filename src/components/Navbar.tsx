import React from 'react';
import { NavLink } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="text-[#003C43] bg-[#E3FEF7] shadow-lg  fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-[#003C43]  text-xl font-bold ">Ranjith Sai</span>
            {/* <span className="ml-2 text-xl font-bold text-gray-900">DevPortfolio</span> */}
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/"
              className={({ isActive }) =>
                `text-[#003C43] text-[#003C43]  hover:underline hover:after:duration-500 hover:after:delay-150 px-3 py-2 rounded-md text-sm font-medium 
                  ${isActive ? 'underline text-[#003C43] ' : ''} 
                  hover:after:content-[""] hover:after:block hover:after:h-[2px] hover:after:bg-indigo-600 
                  hover:after:w-0 hover:after:transition-all hover:after:duration-500 hover:after:delay-150 
                  hover:focus:after:w-full`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects"
              className={({ isActive }) =>
                `text-[#003C43] text-[#003C43]  hover:underline hover:after:transition-all hover:after:duration-500 hover:after:delay-150 px-3 py-2 rounded-md text-sm font-medium 
                  ${isActive ? 'underline text-[#003C43] ' : ''} 
                  hover:after:content-[""] hover:after:block hover:after:h-[2px] hover:after:bg-indigo-600 
                  hover:after:w-0 hover:after:transition-all hover:after:duration-500 hover:after:delay-150 
                  hover:focus:after:w-full`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) =>
                `text-[#003C43] text-[#003C43]  hover:underline px-3 py-2 rounded-md text-sm font-medium 
                  ${isActive ? 'underline text-[#003C43] ' : ''} 
                  hover:after:content-[""] hover:after:block hover:after:h-[2px] hover:after:bg-indigo-600 
                  hover:after:w-0 hover:after:transition-all hover:after:duration-500 hover:after:delay-150 
                  hover:focus:after:w-full`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/contact"
              className={({ isActive }) =>
                `text-[#003C43] text-[#003C43]  hover:underline px-3 py-2 rounded-md text-sm font-medium 
                  ${isActive ? 'underline text-[#003C43] ' : ''} 
                  hover:after:content-[""] hover:after:block hover:after:h-[2px] hover:after:bg-indigo-600 
                  hover:after:w-0 hover:after:transition-all hover:after:duration-500 hover:after:delay-150 
                  hover:focus:after:w-full`
              }
            >
              Contact
            </NavLink>
            <a
              href="/contact"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-900 hover:text-indigo-600 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-900 hover:text-indigo-600 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-900 hover:text-indigo-600 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-900 hover:text-indigo-600 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
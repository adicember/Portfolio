import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Title */}
          <div className="text-xl font-bold text-gray-800">Aditika Singh</div>

          {/* Centered Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-10 text-gray-700 font-medium">
              <Link to="/about" className="hover:text-blue-500">
                About Me
              </Link>
              <Link to="/skills" className="hover:text-blue-500">
                Skills
              </Link>
              <Link to="/projects" className="hover:text-blue-500">
                Projects
              </Link>
              <Link to="/know" className="hover:text-blue-500">
                Know Me More
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About Me
            </a>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
            <a href="#know" onClick={() => setIsOpen(false)}>
              Know Me More
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

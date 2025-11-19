"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { GlowingEffect } from "../glowing-effect";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      {/* Floating Navbar Box with GLow */}
      <div className="relative rounded-full p-[2px]">
        {/* Glowing Border */}
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <div
          className="backdrop-blur-lg bg-white/40 shadow-lg border border-white/40 
                     rounded-3xl px-6 py-3 flex items-center gap-10 
                     transition-all duration-300 relative z-10"
        >
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-gray-900 font-medium">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-fuchsia-400 hover:scale-110 transition-all duration-200 
                         hover:drop-shadow-[0_0_10px_#f0f]"
            >
              About Me
            </button>

            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-fuchsia-400 hover:scale-110 transition-all duration-200 
                         hover:drop-shadow-[0_0_10px_#f0f]"
            >
              Skills
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-fuchsia-400 hover:scale-110 transition-all duration-200 
                         hover:drop-shadow-[0_0_10px_#f0f]"
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection("know")}
              className="hover:text-fuchsia-400 hover:scale-110 transition-all duration-200 
                        hover:drop-shadow-[0_0_10px_#f0f]"
            >
              Know Me More
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 hover:scale-110 transition"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="md:hidden mt-3 bg-white/40 border border-white/50 
                     backdrop-blur-xl rounded-2xl py-4 px-6 shadow-lg 
                     flex flex-col gap-4"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-900 font-medium hover:text-blue-500 hover:scale-110 transition"
          >
            About Me
          </button>

          <button
            onClick={() => scrollToSection("skills")}
            className="text-gray-900 font-medium hover:text-blue-500 hover:scale-110 transition"
          >
            Skills
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-900 font-medium hover:text-blue-500 hover:scale-110 transition"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("know")}
            className="text-gray-900 font-medium hover:text-blue-500 hover:scale-110 transition"
          >
            Know Me More
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

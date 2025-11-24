"use client";

import React, { useState } from "react";
import { User, Cpu, FolderKanban, Mail } from "lucide-react";
import { GlowingEffect } from "../ui/glowing-effect";

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
      <div className="relative rounded-full p-[2px]">
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
          className="
            backdrop-blur-xl
            bg-[#0d0d0d]/40
            border border-white/10
            rounded-3xl 
            px-6 py-3
            flex items-center gap-10
            transition-all duration-300
            shadow-[0_0_15px_rgba(255,0,255,0.15)]
          "
        >
          {/* Desktop View */}
          <div className="hidden md:flex gap-10 font-medium">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-pink-400 transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_#ff1aff]"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("skills")}
              className="text-white/80 hover:text-pink-400 transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_#ff1aff]"
            >
              Skills
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="text-white/80 hover:text-pink-400 transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_#ff1aff]"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-white/80 hover:text-pink-400 transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_#ff1aff]"
            >
              Work Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/80 hover:text-pink-400 transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_#ff1aff]"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile View (Icons Only) */}
          <div className="flex md:hidden gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-pink-400 transition-all duration-200 hover:scale-125"
            >
              <User size={22} />
            </button>

            <button
              onClick={() => scrollToSection("skills")}
              className="text-white/80 hover:text-pink-400 transition-all duration-200 hover:scale-125"
            >
              <Cpu size={22} />
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="text-white/80 hover:text-pink-400 transition-all duration-200 hover:scale-125"
            >
              <FolderKanban size={22} />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/80 hover:text-pink-400 transition-all duration-200 hover:scale-125"
            >
              <Mail size={22} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

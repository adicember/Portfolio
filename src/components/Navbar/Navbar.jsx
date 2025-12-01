"use client";

import React, { useState } from "react";
import {
  User,
  Sparkles,
  FolderKanban,
  Briefcase,
  GraduationCap,
  Mail,
  Medal,
} from "lucide-react";

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

  // 🔥 Unified nav config for BOTH desktop & mobile
  const navItems = [
    { id: "about", label: "About", icon: <User size={22} /> },
    { id: "skills", label: "Skills", icon: <Sparkles size={18} /> },
    { id: "projects", label: "Projects", icon: <FolderKanban size={22} /> },
    {
      id: "work",
      label: "Work Experience",
      icon: <Briefcase size={18} />,
    },
    { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
    { id: "leadership", label: "Leadership", icon: <Medal size={18} /> },
    { id: "contact", label: "Contact", icon: <Mail size={22} /> },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center">
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
            px-10 py-4 
            flex items-center justify-center
            gap-10 md:gap-12
            transition-all duration-300
            shadow-[0_0_20px_rgba(255,0,255,0.18)]
            max-w-[90vw] 
            overflow-hidden
          "
        >
          {/* 🖥️ Desktop View */}
          <div className="hidden md:flex gap-8 lg:gap-10 font-medium whitespace-nowrap">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="
                  text-white/80 
                  hover:text-pink-400 
                  transition-all
                  duration-200 
                  hover:scale-110 
                  hover:drop-shadow-[0_0_8px_#ff1aff]
                  text-sm md:text-[15px] lg:text-base xl:text-[17px]
                  tracking-tight
                "
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* 📱 Mobile Icons */}
          <div className="flex md:hidden gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="
                  text-white/80 
                  hover:text-pink-400 
                  hover:scale-125
                "
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

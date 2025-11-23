import React from "react";
import { Vortex } from "../ui/vortex";
import { motion } from "framer-motion";
import Socialmedia from "./Socialmedia";

function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10"
    >
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={300}
        baseHue={270}
        className="w-full h-full flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto py-10"
      >
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4 mt-10 md:mt-0">

          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Hi, I'm <span className="text-pink-400">Aditika Singh!</span>
          </motion.h1>

          {/* Typewriter Role Animation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-gray-300 text-lg sm:text-lg max-w-md"
          >
            <span className="typing-text">Frontend Engineer</span>
          </motion.p>

          <div>
            <Socialmedia />
          </div>
        </div>

        {/* Right Side (Image If Needed Later) */}
        {/* 
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Adi Singh"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
          />
        </div> 
        */}
      </Vortex>
    </section>
  );
}

export default HeroSection;

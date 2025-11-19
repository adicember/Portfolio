import React from "react";
import { Vortex } from "../vortex";
import Socialmedia from "./Socialmedia";

function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={300}
        baseHue={270}
        className="w-full h-full flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto py-10"
      >
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4 mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-pink-400">Aditika Singh</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-md">
            A passionate developer focused on crafting clean, user-friendly
            experiences.
          </p>
          <div>
            <Socialmedia />
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center bg-slate-50 items-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Adi Singh"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
          />
        </div>
      </Vortex>
    </section>
  );
}

export default HeroSection;

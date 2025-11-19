import React from "react";
import { Vortex } from "../vortex";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 min-h-screen">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={300}
        baseHue={270}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        {/* Left Side - Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Hi, I’m <span className="">Aditika Singh</span>
          </h1>
          <p className="mt-4 text-gray-600">
            A passionate developer focused on crafting clean, user-friendly
            experiences.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Adi Singh"
            className="w-64 h-64 object-cover rounded-full shadow-md"
          />
        </div>
      </Vortex>
    </section>
  );
}

export default HeroSection;

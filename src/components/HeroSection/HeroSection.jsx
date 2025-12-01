import React, { useEffect, useState } from "react";
import { Vortex } from "../ui/vortex";
import { motion } from "framer-motion";
import Socialmedia from "./Socialmedia";
import { FileDown } from "lucide-react";
import CV from "../../Assets/pdf/Aditika_Singh_CV.pdf";
function HeroSection() {
  const [screenKey, setScreenKey] = useState(0);

  useEffect(() => {
    const update = () => {
      setScreenKey((prev) => prev + 1);
    };
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10"
    >
      <Vortex
        key={screenKey}
        backgroundColor="black"
        rangeY={800}
        particleCount={300}
        baseHue={270}
        className="w-full h-full flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto py-10"
      >
        {/* Left Side */}
        <div className="w-full flex flex-col items-center text-center gap-4 mt-10">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-300 text-lg sm:text-xl max-w-xl leading-relaxed flex"
          >
            <span>
              As a front-end engineer, I craft clean, modular, and scalable user
              interfaces using modern web technologies. I focus on usability,
              responsiveness, and performance to deliver seamless digital
              experiences.<span className="cursor-line">|</span>
            </span>

            {/* Cursor */}
          </motion.p>
          {/* <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="
    group
    w-fit
    bg-gradient-to-r from-pink-500 to-pink-600
    hover:from-pink-600 hover:to-pink-700
    text-white
    font-semibold
    rounded-2xl
    px-8 py-4
    flex items-center justify-center gap-2
    transition-all
    shadow-[0_0_25px_rgba(236,72,153,0.3)]
    hover:shadow-[0_0_35px_rgba(236,72,153,0.5)]
    mt-4
  "
          >
            Download CV
            <FileDown className="w-5 h-5 group-hover:scale-110 transition-all duration-300" />
          </a> */}
          <a
            href="/Aditika_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
    group
    w-fit
    bg-gradient-to-r from-pink-500 to-pink-600
    hover:from-pink-600 hover:to-pink-700
    text-white
    font-semibold
    rounded-2xl
    px-8 py-4
    flex items-center justify-center gap-2
    transition-all
    shadow-[0_0_25px_rgba(236,72,153,0.3)]
    hover:shadow-[0_0_35px_rgba(236,72,153,0.5)]
    mt-4
  "
          >
            Download CV
            <FileDown className="w-5 h-5 group-hover:scale-110 transition-all duration-300" />
          </a>
        </div>
      </Vortex>
    </section>
  );
}

export default HeroSection;

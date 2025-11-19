import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import SkillsSection from "../Skills/SkillsSection";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <Projects />
    </div>
  );
}

export default Home;

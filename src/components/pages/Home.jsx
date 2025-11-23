import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import SkillsSection from "../Skills/SkillsSection";
import Projects from "../Projects/Projects";
import KnowMeMore from "../KnowMeMore/KnowMeMore";
import ContactMe from "../ContactMe/ContactMe";
import WorkExperience from "../WorkExperience/WorkExperience";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <Projects />
      <WorkExperience />
      <ContactMe />
      {/* <KnowMeMore /> */}
    </div>
  );
}

export default Home;

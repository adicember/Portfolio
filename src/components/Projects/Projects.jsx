import React from "react";
import arogya from "../../Assets/img/Arogya.png";
import swachgyan from "../../Assets/img/Swachyan.png";
import ictv8 from "../../Assets/img/ICTv8.png";
import hackaversev2 from "../../Assets/img/Hackaverse.png";

const projectsData = [
  {
    title: "Arogya: PCOS Detection",
    description:
      "Arogya is a PCOS detection system that analyzes ovarian ultrasound images using a MobileNet deep learning model to classify whether a patient is affected or not.",
    image: arogya,
    tech: ["React JS", "Tailwind CSS", "Python"],
    link: "https://github.com/adicember/Arogya",
  },
  {
    title: "Swachgyan",
    description:
      "Swachgyan is a waste-management learning app built during the TechLeadHers fellowship, where it was the winning project. It teaches kids about waste segregation and recycling through games, quizzes, and monthly challenges using a fun, gamified approach.",
    image: swachgyan,
    tech: ["React JS", "Tailwind CSS", "Node JS"],
    link: "https://github.com/adicember/SwachgyanProject",
  },
  {
    title: "ICT v8",
    description:
      "Official website built for Prime IT Club’s ICT v8 2025 event, providing participants with event details, schedules, updates, and resources in a clean and accessible interface.",
    image: ictv8,
    tech: ["React JS", "Tailwind CSS", "Shadcn UI"],
    link: "https://github.com/primeitclub/ICT-V8/tree/main",
  },
  {
    title: "Hackaverse : Hack the Hassle",
    description:
      "Landing page for Hackaverse: Hack the Hassle, a comprehensive 2-day hackathon focused on solving real-life daily hassles through innovation and creativity.",
    image: hackaversev2,
    tech: ["React JS", "Tailwind CSS", "TypeScript"],
    link: "https://hackaversev2.primeitclub.com/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center bg-black px-6 py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
        Projects
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="
              group relative flex flex-col min-h-[520px]
              rounded-2xl overflow-hidden
              backdrop-blur-xl bg-white/5 
              border border-white/10
              shadow-[0px_0px_20px_rgba(255,255,255,0.05)]
              transition-all duration-500 ease-out
              hover:scale-[1.04]
              hover:-rotate-1
              hover:shadow-[0px_0px_35px_rgba(255,20,147,0.25)]
              hover:border-pink-500/40
            "
          >
            {/* Glassmorphism glow */}
            <div
              className="
                absolute inset-0 pointer-events-none 
                bg-gradient-to-br from-pink-500/10 to-transparent
                opacity-0 group-hover:opacity-100
                transition-all duration-700
              "
            />

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full h-44 object-cover
                transition-all duration-700 ease-out
                group-hover:scale-110 group-hover:brightness-110
              "
            />

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-grow text-white/90">
              {/* Top section */}
              <div>
                <h3
                  className="
                    text-xl font-semibold mb-3
                    transition-all duration-300
                    group-hover:text-pink-400
                    group-hover:translate-x-1
                  "
                >
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Bottom section */}
              <div>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3 py-1 
                        bg-white/10 backdrop-blur-md 
                        text-pink-300 text-xs 
                        rounded-md border border-white/20
                        transition-all duration-300
                        group-hover:bg-pink-500/20
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-6 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center justify-center
                      text-pink-400
                      transition-all duration-300
                      group-hover:text-pink-300
                      group-hover:translate-x-1
                      font-medium text-sm
                    "
                  >
                    View Project
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

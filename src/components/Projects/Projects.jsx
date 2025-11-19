import React from "react";

const projectsData = [
  {
    title: "Hackaverse : Genesis",
    description:
      "Landing Page for Hackaverse: Genesis, a comprehensive 2-day hackathon focused on innovation, creativity, and collaboration to develop novel solutions for meaningful transformation.",
    image: "https://via.placeholder.com/600x300",
    tech: ["React", "Tailwind", "TypeScript"],
    link: "https://github.com/adicember/hackaverse",
  },
  {
    title: "Web GIS Dashboard",
    description:
      "A full-featured GIS dashboard built with MapLibre, showing amenities, schools, hospitals, and custom layers with filtering options.",
    image: "https://via.placeholder.com/600x300",
    tech: ["React", "MapLibre", "API"],
    link: "#",
  },
  {
    title: "Board Generator App",
    description:
      "A React tool for generating multilingual metal boards with QR codes, logos, and print-ready formatting.",
    image: "https://via.placeholder.com/600x300",
    tech: ["React", "Tailwind", "QR Code"],
    link: "#",
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
            className="bg-[#0f0f0f] rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:scale-[1.02] transition flex flex-col min-h-[520px]"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-44 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              {/* Top section */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Bottom section */}
              <div>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800 text-teal-300 text-xs rounded-md border border-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

import React from "react";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl">
        {/* Mini Projects */}
        <div
          onClick={() => navigate("/mini")}
          className="bg-gray-100 hover:bg-blue-50 cursor-pointer rounded-2xl shadow-md flex items-center justify-center h-48 text-xl font-semibold text-gray-700 hover:shadow-lg transition-all duration-200"
        >
          Mini Projects
        </div>

        {/* Major Projects */}
        <div
          onClick={() => navigate("/major")}
          className="bg-gray-100 hover:bg-blue-50 cursor-pointer rounded-2xl shadow-md flex items-center justify-center h-48 text-xl font-semibold text-gray-700 hover:shadow-lg transition-all duration-200"
        >
          Major Projects
        </div>
      </div>
    </section>
  );
}

export default Projects;

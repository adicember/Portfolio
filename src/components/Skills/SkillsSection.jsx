import React from "react";

function SkillsSection() {
  const skills = ["HTML", "ReactJS", "Tailwind CSS", "MapLibre", "Storybook"];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl px-6 py-4 text-gray-700 font-medium hover:shadow-lg hover:-translate-y-1 transition-transform duration-200"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;

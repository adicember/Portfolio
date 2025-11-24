import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "ABC University",
      year: "2020 - Present",
      description: "Focused on software engineering, web development, and AI applications.",
    },
    {
      degree: "High School (+2) Science",
      school: "XYZ College",
      year: "2018 - 2020",
      description: "Majored in Physics, Chemistry, Mathematics, and Computer Science.",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Education
      </motion.h2>

      <div className="max-w-3xl w-full space-y-10">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-lg border border-white/20"
          >
            <h3 className="text-2xl font-semibold">{item.degree}</h3>
            <p className="text-lg text-gray-300">{item.school}</p>
            <p className="text-sm text-gray-400 mb-3">{item.year}</p>
            <p className="text-gray-300 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

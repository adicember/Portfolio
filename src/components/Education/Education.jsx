import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  MapPin,
  Calendar,
} from "lucide-react";

export default function Education() {
  const educationData = [
    {
      degree:
        "Bachelor of Science in Computer Science and Information Technology",
      school: "Prime College, Tribhuvan University",
      location: "Kathmandu, Nepal",
      year: "2021 - 2023",
    },
    {
      degree: "Higher Secondary Education (+2), Science Stream",
      school: "Little Angels' College",
      location: "Kathmandu, Nepal",
      year: "2017 - 2021",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-pink-500">Education</span>
          </h2>
        </div>
      </motion.div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-8 rounded-3xl backdrop-blur-lg border-2 border-pink-500/30 hover:border-pink-500/60 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="bg-pink-500 p-4 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-2xl text-left md:text-3xl font-bold mb-3 min-h-20 md:min-h-28 leading-snug">
                {item.degree}
              </h3>

              <div className="space-y-3 bg-black/40 p-6 rounded-2xl">
                <div className="flex items-center gap-3 text-gray-300 text-left">
                  <BookOpen className="w-5 h-5 text-pink-400" />
                  <span>{item.school}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-left">
                  <MapPin className="w-5 h-5 text-pink-400" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-left">
                  <Calendar className="w-5 h-5 text-pink-400" />
                  <span>{item.year}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

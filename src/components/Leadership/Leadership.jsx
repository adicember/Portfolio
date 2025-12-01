import React from "react";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Leadership() {
  const items = [
    {
      title: "Winner – Tech LeadHers Program 2024",
      desc: "Issued by Aaviyanta Foundation in collaboration with KMC Ward No. 17.",
    },
    {
      title: "Director – Prime IT Club",
      desc: "Led club activities, events, and student tech initiatives.",
    },
  ];

  return (
    <section
      id="leadership"
      className="py-20 px-6 md:px-16 text-white bg-black"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Leadership & Achievements
      </h2>

      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 p-5 rounded-xl
                       bg-gradient-to-br from-purple-900/30 to-pink-900/20
                       border border-pink-500/20 backdrop-blur-md
                       hover:border-pink-500/40 hover:scale-[1.01]
                       transition-all duration-300"
          >
            <Award className="w-7 h-7 text-pink-400 mt-1" />

            <div>
              <h3 className="text-lg font-semibold text-left">{item.title}</h3>
              <p className="text-white/70 text-sm mt-1 text-left">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

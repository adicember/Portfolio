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
      <h1 className="text-4xl font-bold text-pink-400 mb-16 drop-shadow-[0_0_15px_rgba(255,20,147,0.7)] text-center">
        Leadership & Achievements
      </h1>

      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            // initial={{ opacity: 0, x: -40 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true, margin: "-100px" }}
            // transition={{ duration: 0.6, delay: index * 0.15 }}
            className="
  relative overflow-hidden flex items-start gap-6 p-7 rounded-2xl
  bg-gradient-to-br from-purple-900/30 to-pink-900/20
  border border-pink-500/20 backdrop-blur-md
  transition-all duration-300

  hover:scale-[1.04] hover:-translate-y-1
  hover:border-pink-400

  before:absolute before:inset-0 before:rounded-2xl
  before:border-2 before:border-transparent
  before:transition-all before:duration-500
  hover:before:border-pink-400 hover:before:shadow-[0_0_28px_rgba(255,20,147,0.6)]

  after:absolute after:top-0 after:left-[-120%]
  after:w-full after:h-full after:bg-gradient-to-r
  after:from-transparent after:via-white/10 after:to-transparent
  after:skew-x-[-20deg] after:transition-all after:duration-700
  hover:after:left-[120%]
"
          >
            <Award className="w-7 h-7 text-pink-400 mt-1 flex-shrink-0" />

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

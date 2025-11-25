"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

function ContactMe() {
  return (
    <section id="contact" className="flex items-center justify-center px-6 bg-black text-white pt-44 pb-44">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          max-w-xl w-full 
          bg-white/5 
          backdrop-blur-2xl 
          border border-pink-500/20 
          rounded-3xl 
          p-10 
          shadow-[0_0_25px_rgba(255,50,180,0.3)]
        "
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center 
            bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400
            bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,50,200,0.4)]
          "
        >
          Contact Me
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-300 text-center mt-4 mb-10"
        >
          Open to new projects, drop a message anytime.
        </motion.p>

        {/* Icons Only Buttons */}
        <div className="flex items-center justify-center gap-6">
          <ContactIcon Icon={Mail} href="mailto:aditikasingh2001@gmail.com" delay={0} />

          <ContactIcon
            Icon={Linkedin}
            href="https://www.linkedin.com/in/aditikasingh/"
            delay={0.1}
          />

          <ContactIcon
            Icon={Github}
            href="https://github.com/adicember"
            delay={0.2}
          />
        </div>
      </motion.div>
    </section>
  );
}

/* Reusable Icon Card */
function ContactIcon({ Icon, href, delay }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      href={href}
      target="_blank"
      className="
        w-12 h-12 
        rounded-2xl 
        flex items-center justify-center
        bg-white/5 
        border border-pink-500/20
        shadow-[0_0_12px_rgba(255,50,200,0.25)]
        hover:shadow-[0_0_24px_rgba(255,50,200,0.45)]
        hover:bg-white/10
        transition-all
        text-pink-400
        backdrop-blur-md
      "
    >
      <Icon size={20} />
    </motion.a>
  );
}

export default ContactMe;

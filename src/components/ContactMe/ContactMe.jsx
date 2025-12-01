"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import emailjs from "emailjs-com";
function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted:", formData);
    emailjs
      .send(
        "service_pli345w", // Service ID
        "template_816v6nh", // Template ID
        {
          name: formData.name, // matches {{name}}
          email: formData.email, // matches {{email}}
          message: formData.message, // matches {{message}}
        },
        "26KkTs-3_uaJbxbGW" // Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          alert("Failed to send message.");
          console.error(err);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 bg-black text-white py-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Let's Connect Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="
              px-6 py-3 
              bg-pink-500/10 
              border border-pink-500/30 
              rounded-full 
              text-pink-400
              flex items-center gap-2
              hover:bg-pink-500/20
              transition-all
            "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Contact Me
          </motion.button>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-pink-400 text-left"
          >
            Let's Work Together
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-400 text-lg text-left leading-relaxed"
          >
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to drop me a message.
          </motion.p>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-3 text-gray-300"
          >
            <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-pink-400" />
            </div>
            <span>aditikasingh2001@gmail.com</span>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <SocialIcon Icon={Github} href="https://github.com/adicember" />
            <SocialIcon
              Icon={Linkedin}
              href="https://www.linkedin.com/in/aditikasingh/"
            />
          </motion.div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            bg-white/5 
            backdrop-blur-2xl 
            border border-gray-800
            rounded-3xl 
            p-8
            shadow-[0_0_50px_rgba(0,0,0,0.5)]
          "
        >
          <div className="space-y-6">
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="
                  w-full 
                  bg-black/40 
                  border border-gray-800
                  rounded-2xl 
                  px-6 py-4
                  text-white
                  placeholder-gray-500
                  focus:outline-none
                  focus:border-pink-500/50
                  transition-all
                "
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="
                  w-full 
                  bg-black/40 
                  border border-gray-800
                  rounded-2xl 
                  px-6 py-4
                  text-white
                  placeholder-gray-500
                  focus:outline-none
                  focus:border-pink-500/50
                  transition-all
                "
              />
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write a message..."
                rows="6"
                className="
                  w-full 
                  bg-black/40 
                  border border-gray-800
                  rounded-2xl 
                  px-6 py-4
                  text-white
                  placeholder-gray-500
                  focus:outline-none
                  focus:border-pink-500/50
                  transition-all
                  resize-none
                "
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              onClick={handleSubmit}
              className="
                w-full 
                bg-gradient-to-r from-pink-500 to-pink-600
                hover:from-pink-600 hover:to-pink-700
                text-white
                font-semibold
                rounded-2xl 
                px-8 py-4
                flex items-center justify-center gap-2
                transition-all
                shadow-[0_0_25px_rgba(236,72,153,0.3)]
                hover:shadow-[0_0_35px_rgba(236,72,153,0.5)]
              "
            >
              Send Message
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Social Icon Component */
function SocialIcon({ Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-12 h-12 
        rounded-full 
        flex items-center justify-center
        bg-pink-500/10 
        border border-pink-500/20
        hover:bg-pink-500/20
        hover:border-pink-500/40
        transition-all
        text-pink-400
      "
    >
      <Icon size={20} />
    </a>
  );
}

export default ContactMe;

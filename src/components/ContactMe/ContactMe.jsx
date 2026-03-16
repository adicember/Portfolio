"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import emailjs from "emailjs-com";

function ContactMe() {
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  /* ---------- Validation helpers ---------- */
  const getFieldError = (name, value) => {
    if (name === "name" && !value.trim()) return "Name is required";
    if (name === "email") {
      if (!value.trim()) return "Email is required";
      if (!emailRegex.test(value)) return "Please enter a valid email";
    }
    if (name === "message" && !value.trim()) return "Message is required";
    return "";
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    emailRegex.test(formData.email) &&
    formData.message.trim();

  /* ---------- Handlers ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Only show error while typing if the field was already touched
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: getFieldError(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: getFieldError(name, value) }));
  };

  const handleSubmit = () => {
    // Mark all fields as touched and compute errors
    const allTouched = { name: true, email: true, message: true };
    const allErrors = {
      name: getFieldError("name", formData.name),
      email: getFieldError("email", formData.email),
      message: getFieldError("message", formData.message),
    };

    setTouched(allTouched);
    setErrors(allErrors);

    if (!isFormValid) return;

    setLoading(true);
    emailjs
      .send(
        "service_pli345w",
        "template_816v6nh",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "26KkTs-3_uaJbxbGW",
      )
      .then(
        () => {
          setLoading(false);
          setToast("success");
          setFormData({ name: "", email: "", message: "" });
          setTouched({});
          setErrors({});
          setTimeout(() => setToast(null), 3500);
        },
        (err) => {
          console.error(err);
          setLoading(false);
          setToast("error");
          setTimeout(() => setToast(null), 3500);
        },
      );
  };

  /* ---------- Shared input classes ---------- */
  const inputClass = (name) => `
    w-full bg-black/40 border rounded-2xl px-6 py-4 text-white
    placeholder-gray-500 focus:outline-none transition-all resize-none
    ${
      errors[name] && touched[name]
        ? "border-pink-500/70 focus:border-pink-500"
        : "border-gray-800 focus:border-pink-500/50"
    }
  `;

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 bg-black text-white py-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ── Left Side ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-6 py-3 bg-pink-500/10 border border-pink-500/30 rounded-full
              text-pink-400 flex items-center gap-2 hover:bg-pink-500/20 transition-all"
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
          </button>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-pink-400 text-left"
          >
            Let's Work Together
          </motion.h2>

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

        {/* ── Right Side – Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-2xl border border-gray-800 rounded-3xl p-8
            shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <div className="space-y-4">
            {/* Name */}
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
                onBlur={handleBlur}
                placeholder="Your Name"
                className={inputClass("name")}
              />
              {touched.name && errors.name && (
                <p className="text-pink-400/80 text-sm mt-1.5 pl-1 text-left">
                  {errors.name}
                </p>
              )}
            </motion.div>

            {/* Email */}
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
                onBlur={handleBlur}
                placeholder="your.email@example.com"
                className={inputClass("email")}
              />
              {touched.email && errors.email && (
                <p className="text-pink-400/80 text-sm mt-1.5 pl-1 text-left">
                  {errors.email}
                </p>
              )}
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Write a message..."
                rows="6"
                className={inputClass("message")}
              />
              {touched.message && errors.message && (
                <p className="text-pink-400/80 text-sm mt-1.5 pl-1 text-left">
                  {errors.message}
                </p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.button
              onClick={handleSubmit}
              disabled={loading || !isFormValid}
              title={!isFormValid ? "Please fill in all fields correctly" : ""}
              className="
                w-full font-semibold rounded-2xl px-8 py-4
                flex items-center justify-center gap-2 transition-all
                text-white
                bg-gradient-to-r from-pink-500 to-pink-600
                shadow-[0_0_25px_rgba(236,72,153,0.3)]
                enabled:hover:from-pink-600 enabled:hover:to-pink-700
                enabled:hover:shadow-[0_0_35px_rgba(236,72,153,0.5)]
                disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
              "
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* ── Toast ── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="
              fixed bottom-10 left-1/2 -translate-x-1/2
              flex items-center gap-4 px-6 py-4 rounded-2xl
              backdrop-blur-xl bg-white/10 border border-pink-500/30
              shadow-[0_0_30px_rgba(236,72,153,0.3)] text-white z-50
            "
          >
            <div className="relative w-7 h-7">
              {toast === "success" ? (
                <motion.svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-pink-400"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.path
                    d="M5 13l4 4L19 7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              ) : (
                <span className="text-red-400 font-bold text-lg">!</span>
              )}
            </div>
            <p className="text-sm font-medium">
              {toast === "success"
                ? "Message sent successfully!"
                : "Failed to send message"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SocialIcon({ Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-12 h-12 rounded-full flex items-center justify-center
        bg-pink-500/10 border border-pink-500/20
        hover:bg-pink-500/20 hover:border-pink-500/40
        transition-all text-pink-400
      "
    >
      <Icon size={20} />
    </a>
  );
}

export default ContactMe;

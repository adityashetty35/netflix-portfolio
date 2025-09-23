import React from "react";
import { motion } from "framer-motion";
import "./ContactPage.css";

function HireMePage() {
  return (
    <motion.div
      className="hireme-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <div className="hireme-hero">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Let’s Work Together
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          I design and build scalable applications with Python, FastAPI, React,
          and cloud technologies.
        </motion.p>

        <div className="hireme-buttons">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn primary-btn"
          >
            View Resume
          </a>
          <a
            href="mailto:adityashetty35@gmail.com"
            className="btn secondary-btn"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Minimal Footer Contacts */}
      <footer className="hireme-footer">
        <a href="mailto:adityashetty35@gmail.com">Email</a>
        <a
          href="https://linkedin.com/in/aaditya-sangishetty-08b0b5215"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/adityashetty35"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a href="tel:+917977672964">Phone</a>
      </footer>
    </motion.div>
  );
}

export default HireMePage;

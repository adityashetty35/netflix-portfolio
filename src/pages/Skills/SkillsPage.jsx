import React from "react";
import { motion } from "framer-motion";
import "./SkillsPage.css";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function SkillsPage() {
  return (
    <motion.div
      className="skills-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="skills-title">Skills</h1>

      {/* Programming Languages */}
      <div className="skills-section">
        <h2 className="category-title">Programming Languages</h2>
        <motion.div className="skills-grid" variants={containerVariants}>
          {[
            { name: "Python", desc: "High-level Programming Language" },
            { name: "Java", desc: "Object-Oriented Language" },
            { name: "JavaScript", desc: "Web Scripting Language" },
          ].map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={cardVariants}
            >
              <div className="skill-icon">
                <svg width="40" height="40" viewBox="0 0 48 48">
                  <rect width="48" height="48" rx="8" fill="#1f1f1f" />
                  <text
                    x="50%"
                    y="55%"
                    fill="#e50914"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {skill.name.substring(0, 4)}
                  </text>
                </svg>
              </div>
              <h3>{skill.name}</h3>
              <p>{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Databases */}
      <div className="skills-section">
        <h2 className="category-title">Databases</h2>
        <motion.div className="skills-grid" variants={containerVariants}>
          {["MySQL", "Postgres", "MongoDB", "CRDB"].map((db) => (
            <motion.div key={db} className="skill-card" variants={cardVariants}>
              <div className="skill-icon">
                <svg width="40" height="40" viewBox="0 0 48 48">
                  <rect width="48" height="48" rx="8" fill="#1f1f1f" />
                  <text
                    x="50%"
                    y="55%"
                    fill="#e50914"
                    fontSize="10"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {db}
                  </text>
                </svg>
              </div>
              <h3>{db}</h3>
              <p>{db} Database</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Frameworks & Messaging */}
      <div className="skills-section">
        <h2 className="category-title">Frameworks & Messaging</h2>
        <motion.div className="skills-grid" variants={containerVariants}>
          {["FastAPI", "Spring", "RabbitMQ", "NSQ"].map((fw) => (
            <motion.div key={fw} className="skill-card" variants={cardVariants}>
              <div className="skill-icon">
                <svg width="40" height="40" viewBox="0 0 48 48">
                  <rect width="48" height="48" rx="8" fill="#1f1f1f" />
                  <text
                    x="50%"
                    y="55%"
                    fill="#e50914"
                    fontSize="9"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {fw}
                  </text>
                </svg>
              </div>
              <h3>{fw}</h3>
              <p>{fw} Framework</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* DevOps & Tools */}
      <div className="skills-section">
        <h2 className="category-title">DevOps & Tools</h2>
        <motion.div className="skills-grid" variants={containerVariants}>
          {["Docker", "Jenkins", "Git", "SVN"].map((tool) => (
            <motion.div
              key={tool}
              className="skill-card"
              variants={cardVariants}
            >
              <div className="skill-icon">
                <svg width="40" height="40" viewBox="0 0 48 48">
                  <rect width="48" height="48" rx="8" fill="#1f1f1f" />
                  <text
                    x="50%"
                    y="55%"
                    fill="#e50914"
                    fontSize="10"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {tool}
                  </text>
                </svg>
              </div>
              <h3>{tool}</h3>
              <p>DevOps Tool</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* AI / LLM */}
      <div className="skills-section">
        <h2 className="category-title">AI / LLM</h2>
        <motion.div className="skills-grid" variants={containerVariants}>
          {["Llama 3.1", "Mistral 7B", "Prompt"].map((ai) => (
            <motion.div key={ai} className="skill-card" variants={cardVariants}>
              <div className="skill-icon">
                <svg width="40" height="40" viewBox="0 0 48 48">
                  <rect width="48" height="48" rx="8" fill="#1f1f1f" />
                  <text
                    x="50%"
                    y="55%"
                    fill="#e50914"
                    fontSize="8"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {ai}
                  </text>
                </svg>
              </div>
              <h3>{ai}</h3>
              <p>AI / LLM Skill</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SkillsPage;

import React from "react";
import { motion } from "framer-motion";
import "./ProjectsPage.css";
import caseImg from "../../assets/projects/case.png";
import hrmsImg from "../../assets/projects/hrms.png";
import masking from "../../assets/projects/masking.png";
import summarize from "../../assets/projects/summarize.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ProjectsPage() {
  const projects = [
    {
      name: "Hoshi HRMS",
      desc: "Enterprise-grade HRMS solution handling 20k+ users. Built with FastAPI, NSQ, MySQL, and MongoDB.",
      img: hrmsImg,
      tags: ["FastAPI", "NSQ", "MySQL", "MongoDB"],
    },
    {
      name: "Entrust - Case Management",
      desc: "Medical & legal case management platform with scalable microservices architecture.",
      img: caseImg,
      tags: ["FastAPI", "React", "Redis", "Kong"],
    },
    {
      name: "Document Masking Bot",
      desc: "Deployed at HDFC & Toyota Finance. Sensitive data extraction + masking with 90%+ accuracy.",
      img: masking,
      tags: ["TensorFlow", "OCR", "Python"],
    },
    {
      name: "Document Summarizer Bot",
      desc: "LLM-powered summarizer bot that reduces review time by 60%.",
      img: summarize,
      tags: ["LLM", "FastAPI", "NLP"],
    },
  ];

  return (
    <motion.div
      className="projects-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="projects-title">Projects</h1>

      <motion.div className="projects-grid" variants={containerVariants}>
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            variants={cardVariants}
          >
            {/* Screenshot */}
            <div
              className="project-img"
              style={{ backgroundImage: `url(${proj.img})` }}
            ></div>

            {/* Details */}
            <div className="project-details">
              <h3>{proj.name}</h3>
              <p>{proj.desc}</p>
              <div className="project-tags">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ProjectsPage;

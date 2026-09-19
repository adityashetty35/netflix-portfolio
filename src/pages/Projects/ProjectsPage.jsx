import React from "react";
import { motion as Motion } from "framer-motion";
import "./ProjectsPage.css";
import caseImg from "../../assets/projects/case.svg";
import hrmsImg from "../../assets/projects/hrms.svg";
import masking from "../../assets/projects/masking.svg";
import summarize from "../../assets/projects/summarize.svg";

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
      name: "Hoshi HRMS Platform",
      desc: "Re-engineered a legacy HRMS into a multi-tenant platform for 400+ clients — payroll, attendance, and access control, plus rule, reporting, and workflow engines I built from scratch.",
      img: hrmsImg,
      tags: ["FastAPI", "MySQL", "MongoDB", "Redis", "NSQ", "MCP"],
    },
    {
      name: "Hoshi HRMS for Android",
      desc: "The React Native companion app bringing attendance, leave, and performance workflows to every employee's pocket. Live on Google Play.",
      img: hrmsImg,
      tags: ["Android", "React Native", "Google Play"],
      link: "https://play.google.com/store/apps/details?id=com.neuralit.myehrms",
    },
    {
      name: "Hoshi HRMS for iOS",
      desc: "The same HRMS experience, native to iOS — attendance, leave, and talent management on the go. Live on the App Store.",
      img: hrmsImg,
      tags: ["iOS", "React Native", "App Store"],
      link: "https://apps.apple.com/in/app/hoshi-hrms/id1432618231",
    },
    {
      name: "Entrust - Case Management",
      desc: "A microservices platform for legal and medical case teams, handling clients, documents, and evidence, with Stripe-powered billing built in.",
      img: caseImg,
      tags: ["FastAPI", "React", "Redis", "Kong"],
    },
    {
      name: "Document Masking Bot",
      desc: "An OCR and TensorFlow pipeline that finds and redacts sensitive data in financial documents automatically, running in production at HDFC and Toyota Finance with 90%+ accuracy.",
      img: masking,
      tags: ["TensorFlow", "OCR", "Python"],
    },
    {
      name: "Queryfic",
      desc: "A RAG-powered assistant that turns scattered organizational knowledge into natural-language answers — from ingestion and embeddings to retrieval and conversation.",
      img: summarize,
      tags: ["RAG", "LLM", "LangChain", "LlamaIndex", "FastAPI"],
    },
  ];

  return (
    <Motion.div
      className="projects-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="projects-title">Projects</h1>

      <Motion.div className="projects-grid" variants={containerVariants}>
        {projects.map((proj, idx) => {
          const Card = proj.link ? Motion.a : Motion.article;

          return (
            <Card
              key={idx}
              className="project-card"
              variants={cardVariants}
              {...(proj.link
                ? {
                    href: proj.link,
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": `Open ${proj.name}`,
                  }
                : {})}
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
            </Card>
          );
        })}
      </Motion.div>
    </Motion.div>
  );
}

export default ProjectsPage;

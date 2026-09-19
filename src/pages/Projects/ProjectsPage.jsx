import React from "react";
import { motion as Motion } from "framer-motion";
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
      name: "Hoshi HRMS Platform",
      desc: "Multi-tenant HRMS platform supporting 400+ enterprise clients, with payroll, attendance, leave, employee lifecycle, RBAC, SSO, reporting, workflows, and MCP integrations.",
      img: hrmsImg,
      tags: ["FastAPI", "MySQL", "MongoDB", "Redis", "NSQ", "MCP"],
    },
    {
      name: "Hoshi HRMS for Android",
      desc: "Employee and manager mobile access for attendance, leave, HRIS, performance, and talent workflows. Open the official Google Play listing.",
      img: hrmsImg,
      tags: ["Android", "React Native", "Google Play"],
      link: "https://play.google.com/store/apps/details?id=com.neuralit.myehrms",
    },
    {
      name: "Hoshi HRMS for iOS",
      desc: "Employee and manager mobile access for attendance, leave, HR workflows, performance, and talent management. Open the official App Store listing.",
      img: hrmsImg,
      tags: ["iOS", "React Native", "App Store"],
      link: "https://apps.apple.com/in/app/hoshi-hrms/id1432618231",
    },
    {
      name: "Entrust - Case Management",
      desc: "Microservices-based legal and medical case platform with APIs for cases, clients, documents, evidence, workflows, and Stripe billing.",
      img: caseImg,
      tags: ["FastAPI", "React", "Redis", "Kong"],
    },
    {
      name: "Document Masking Bot",
      desc: "Enterprise OCR and TensorFlow pipeline for identifying, extracting, and masking sensitive document data; deployed for HDFC and Toyota Finance with 90%+ field extraction accuracy.",
      img: masking,
      tags: ["TensorFlow", "OCR", "Python"],
    },
    {
      name: "Queryfic",
      desc: "RAG-based enterprise knowledge assistant with ingestion, chunking, embeddings, vector search, retrieval, LLM integration, and conversational APIs.",
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

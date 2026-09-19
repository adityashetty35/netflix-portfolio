import React from "react";
import { motion as Motion } from "framer-motion";
import "./SkillsPage.css";

const skillGroups = [
  { category: "Languages & Frontend", skills: ["Python", "Java", "JavaScript / TypeScript", "React", "React Native", "Vite"] },
  { category: "Backend Engineering", skills: ["FastAPI", "Flask", "REST APIs", "Microservices", "API Design", "Async Programming", "OAuth", "JWT"] },
  { category: "Distributed Systems & Data", skills: ["Redis", "NSQ", "RabbitMQ", "PostgreSQL", "MySQL", "MongoDB", "WebSockets", "Caching", "Event-Driven Systems"] },
  { category: "Applied AI", skills: ["LLM Integration", "MCP", "RAG", "OCR", "Document AI", "LangChain", "LlamaIndex", "Azure OpenAI", "Hugging Face"] },
  { category: "Cloud & Operations", skills: ["Docker", "Kubernetes", "GitHub Actions", "Linux", "Kong API Gateway", "Prometheus", "Grafana", "Graylog"] },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

function SkillsPage() {
  return (
    <Motion.div className="skills-page" initial="hidden" animate="visible" variants={containerVariants}>
      <h1 className="skills-title">Core Skills</h1>
      {skillGroups.map((group) => (
        <section className="skills-section" key={group.category}>
          <h2 className="category-title">{group.category}</h2>
          <Motion.div className="skills-grid" variants={containerVariants}>
            {group.skills.map((skill) => (
              <Motion.div key={skill} className="skill-card" variants={cardVariants}>
                <div className="skill-icon" aria-hidden="true"><svg width="40" height="40" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#1f1f1f" /><text x="50%" y="55%" fill="#e50914" fontSize="9" fontWeight="bold" textAnchor="middle">{skill.slice(0, 6)}</text></svg></div>
                <h3>{skill}</h3><p>{group.category}</p>
              </Motion.div>
            ))}
          </Motion.div>
        </section>
      ))}
    </Motion.div>
  );
}

export default SkillsPage;

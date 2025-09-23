import React from "react";
import { motion } from "framer-motion";
import { workExperienceData } from "./data";
import "./WorkExperiencePage.css";

function WorkExperiencePage() {
  return (
    <div className="work-page">
      <h1 className="work-title">📅 Work Experience</h1>

      <div className="timeline">
        {workExperienceData.map((item, index) => (
          <motion.div
            key={item.id}
            className={`timeline-container ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Center dot for timeline */}
            <div className="timeline-dot" />

            {/* Timeline card */}
            <div className="timeline-card">
              <div className="card-header">
                <h2>{item.role}</h2>
                <span className="timeline-date">{item.period}</span>
              </div>
              <h3>{item.company}</h3>
              <p className="tech">{item.tech}</p>
              <ul>
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperiencePage;

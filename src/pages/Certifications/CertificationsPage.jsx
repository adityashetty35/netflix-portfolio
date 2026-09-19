import React from "react";
import { motion as Motion } from "framer-motion";
import "./CertificationsPage.css";

const education = [
  { id: 1, degree: "Bachelor of Science in Computer Science", institution: "PVG College of Science & Technology", period: "2019 – 2022 · Mumbai", mark: "B.Sc" },
  { id: 2, degree: "Higher Secondary Education", institution: "S K Somaiya Junior College", period: "2018 – 2019 · Mumbai", mark: "HSC" },
];

function CertificationsPage() {
  return (
    <Motion.div className="certifications-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h1 className="certifications-title">Education</h1>
      <div className="cert-grid">{education.map((item, index) => (
        <Motion.article key={item.id} className="cert-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.1 }}>
          <div className="cert-icon education-icon">{item.mark}</div>
          <div className="cert-info"><h2>{item.degree}</h2><p className="issuer">{item.institution}</p><span className="cert-issued">{item.period}</span></div>
        </Motion.article>
      ))}</div>
    </Motion.div>
  );
}

export default CertificationsPage;

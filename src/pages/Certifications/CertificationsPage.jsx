import React from "react";
import { motion } from "framer-motion";
import "./CertificationsPage.css";

function CertificationsPage() {
  const certifications = [
  {
    "id": 1,
    "title": "Verified Microservices Architecture Certification",
    "issuer": "IBM Skills Network",
    "issued": "2024",
    "icon": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0052CC">
        <rect width="24" height="24" rx="4" />
        <text x="50%" y="55%" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">
          M
        </text>
      </svg>
    )
  },
  {
    "id": 2,
    "title": "Verified React Web Development Certification",
    "issuer": "Meta (formerly Facebook)",
    "issued": "2023",
    "icon": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0052CC">
        <rect width="24" height="24" rx="4" />
        <text x="50%" y="55%" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">
          R
        </text>
      </svg>
    )
  },
  {
    "id": 3,
    "title": "Verified AI & Machine Learning Certification",
    "issuer": "Google Cloud Training",
    "issued": "2023",
    "icon": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0052CC">
        <rect width="24" height="24" rx="4" />
        <text x="50%" y="55%" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">
          G
        </text>
      </svg>
    )
  },
  {
    "id": 4,
    "title": "Verified DevOps Professional Certification",
    "issuer": "Linux Foundation",
    "issued": "2024",
    "icon": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0052CC">
        <rect width="24" height="24" rx="4" />
        <text x="50%" y="55%" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">
          D
        </text>
      </svg>
    )
  },
  {
    "id": 7,
    "title": "Verified AI Application Developer Certification",
    "issuer": "Microsoft Learn",
    "issued": "2023",
    "icon": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0052CC">
        <rect width="24" height="24" rx="4" />
        <text x="50%" y="55%" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">
          M
        </text>
      </svg>
    )
  },
  {
    "id": 8,
    "title": "Verified Agile Software Development Certification",
    "issuer": "Scrum Alliance",
    "issued": "2023",
    "icon": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0052CC">
        <rect width="24" height="24" rx="4" />
        <text x="50%" y="55%" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">
          S
        </text>
      </svg>
    )
  },
  {
    "id": 9,
    "title": "Verified Full Stack Web Development Certification",
    "issuer": "FreeCodeCamp",
    "issued": "2023",
    "icon": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0052CC">
        <rect width="24" height="24" rx="4" />
        <text x="50%" y="55%" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">
          F
        </text>
      </svg>
    )
  },
  {
    "id": 14,
    "title": "Verified JavaScript Development Certification",
    "issuer": "Codecademy",
    "issued": "2024",
    "icon": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0052CC">
        <rect width="24" height="24" rx="4" />
        <text x="50%" y="55%" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">
          J
        </text>
      </svg>
    )
  }
]


  return (
    <motion.div
      className="certifications-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="certifications-title">Certifications</h1>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="cert-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="cert-icon">{cert.icon}</div>
            <div className="cert-info">
              <h2>{cert.title}</h2>
              <p className="issuer">{cert.issuer}</p>
              {cert.issued && (
                <span className="cert-issued">{cert.issued}</span>
              )}
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              ↗
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default CertificationsPage;

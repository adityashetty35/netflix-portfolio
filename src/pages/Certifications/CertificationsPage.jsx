import React from "react";
import { motion } from "framer-motion";
import "./CertificationsPage.css";

function CertificationsPage() {
  const certifications = [
    {
      id: 1,
      title: "C++ for C Programmers",
      issuer: "University of California, Santa Cruz",
      issued: "",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#1DA1F2">
          <circle cx="12" cy="12" r="10" />
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fontSize="10"
            fill="#fff"
            fontWeight="bold"
          >
            C++
          </text>
        </svg>
      ),
      link: "#",
    },
    {
      id: 2,
      title: "Verified Certificate of IITBombayX",
      issuer: "Indian Institute of Technology, Bombay",
      issued: "",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#0052CC">
          <rect width="24" height="24" rx="4" />
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fontSize="10"
            fill="#fff"
            fontWeight="bold"
          >
            X
          </text>
        </svg>
      ),
      link: "https://verify.iitbombayx.in/cert/8a029adb4a23439bf28f6edae62237",
    },
    {
      id: 3,
      title: "Programming with Everyone with Python",
      issuer: "University of Michigan",
      issued: "",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFD43B">
          <circle cx="12" cy="12" r="10" />
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fontSize="9"
            fill="#000"
            fontWeight="bold"
          >
            Py
          </text>
        </svg>
      ),
      link: "#",
    },
    {
      id: 4,
      title: "Multutility Robot Journal",
      issuer: "International Journal of Mechanical Engineering and Technology",
      issued: "Issued Jul 2018",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#0078D7">
          <rect width="24" height="24" rx="4" />
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fontSize="9"
            fill="#fff"
            fontWeight="bold"
          >
            IEEE
          </text>
        </svg>
      ),
      link: "#",
    },
    {
      id: 5,
      title: "Hosting Websites with Amazon Lightsail",
      issuer: "Udemy",
      issued: "Issued Jan 2020",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#A435F0">
          <circle cx="12" cy="12" r="10" />
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fontSize="9"
            fill="#fff"
            fontWeight="bold"
          >
            U
          </text>
        </svg>
      ),
      link: "#",
    },
    {
      id: 6,
      title: "Typescript: The Complete Developer’s Guide",
      issuer: "Udemy",
      issued: "Issued Dec 2020",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#3178C6">
          <rect width="24" height="24" rx="4" />
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fontSize="9"
            fill="#fff"
            fontWeight="bold"
          >
            TS
          </text>
        </svg>
      ),
      link: "#",
    },
  ];

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

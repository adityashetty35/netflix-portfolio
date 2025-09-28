import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { recruiterTopPicks, recruiterContinue } from "../../assets/data";

function AdventurerPage() {
  // Scroll helper for row arrows
  const scrollRow = (selector, direction) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const cardEl = el.querySelector(".scroll-card");
    const cardWidth = cardEl ? cardEl.clientWidth : 300;
    const gap = 12; // should match Section.css gap
    const amount = Math.round((cardWidth + gap) * 2);
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Aaditya Sangishetty - Software Developer"
        description="Software Developer with 3+ years of experience building scalable backend systems, AI-powered solutions, and LLM-driven products for finance, legal, medical, and enterprise domains. Skilled in designing microservices architectures, high-volume data ingestion pipelines, and AI-based document processing tools. Proven track record of reducing operational overhead through automation, improving system reliability, and delivering products used by large organizations and attorneys in the U.S. Adept at working across the stack with Python, FastAPI, React, and modern databases, while leveraging LLMs and machine learning to extract insights from unstructured data. Strong background in DevOps practices, API integrations, and leading backend development for multi-tenant platforms serving thousands of users."
        backgroundImage="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3Z6OW53ZTdoMnM4MWkxZGRmMnZ0eDJoZnlqYmx6Z3hhZHc0c2E0aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5kF1QQlD6tKobjO5lw/giphy.gif"
      />

      {/* Content Sections */}
      <main className="content container-fluid card-container">
        <Section
          title="Today's Top Picks for Adventurer"
          items={recruiterTopPicks}
          rowId="1"
          scrollRow={scrollRow}
        />
        <Section
          title="Continue Watching for Recruiter"
          items={recruiterContinue}
          rowId="2"
          scrollRow={scrollRow}
        />
      </main>
    </>
  );
}

export default AdventurerPage;

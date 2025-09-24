import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { recruiterTopPicks, recruiterContinue } from "../../assets/data";

function StalkerPage() {
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
        description="Passionate and results-driven developer with experience in building scalable, high-impact web applications using Python, FastAPI, React, and modern cloud technologies."
        backgroundImage="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdml6bnY1cHUybWU1c2dwbGJlZGFmeDA1czU3NWlmOTg2cXMyNzJjZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GCjIE9C9Eb9V6/giphy.gif"
      />

      {/* Content Sections */}
      <main className="content container-fluid card-container">
        <Section
          title="Today's Top Picks for Stalker"
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

export default StalkerPage;

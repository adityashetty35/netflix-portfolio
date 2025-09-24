import React from "react";
import "./Hero.css";

function Hero({ headline, description, backgroundImage }) {
  return (
    <header
      className="profile-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="profile-banner">
        <div className="banner-content">
          <h1 className="banner-headline">{headline}</h1>
          <p className="banner-description">{description}</p>

          <div className="banner-buttons">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="custom-btn resume-btn">
              ▶ Resume
            </a>
            <a
              href="https://in.linkedin.com/in/aaditya-sangishetty-08b0b5215"
              target="_blank"
              rel="noreferrer"
              className="custom-btn linkedin-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;

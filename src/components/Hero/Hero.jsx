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
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="custom-btn resume-btn"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                style={{ marginRight: "8px" }}
              >
                <path
                  d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                  fill="currentColor"
                />
              </svg>
              Resume
            </a>

            <a
              href="https://in.linkedin.com/in/aaditya-sangishetty-08b0b5215"
              target="_blank"
              rel="noreferrer"
              className="custom-btn linkedin-btn"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                style={{ marginRight: "8px" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                  fill="currentColor"
                />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;

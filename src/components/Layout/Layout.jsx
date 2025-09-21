import React, { useEffect, useState, useMemo } from "react";
import { Outlet, Link } from "react-router-dom";
import logoImg from "../../assets/logos/name.svg";
import profileImg from "../../assets/profiles/recruiter.png";
import "./Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  const [scrolled, setScrolled] = useState(false);

  // toggle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // content lists
  const topPicks = [
    "Skills",
    "Experience",
    "Certifications",
    "Projects",
    "Recommendation",
    "Contact Me",
  ];
  const continueWatching = ["Music", "Reading", "Contact Me"];

  // Stable seeds for the session — new on each page refresh
  const topPicksSeeds = useMemo(
    () => topPicks.map(() => Math.random().toString(36).slice(2)),
    []
  );
  const contSeeds = useMemo(
    () => continueWatching.map(() => Math.random().toString(36).slice(2)),
    []
  );

  // Only Picsum (seeded) for every card — smaller size for faster loads
  const getPicsumUrl = (seed, width = 1000, height = 562) =>
    `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;

  // Preload chosen Picsum images once (reduce visual pop-in)
  useEffect(() => {
    const urls = [];
    topPicksSeeds.forEach((s) => urls.push(getPicsumUrl(s)));
    contSeeds.forEach((s) => urls.push(getPicsumUrl(s)));
    urls.forEach((u) => {
      const img = new Image();
      img.src = u;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount (seeds are stable)

  // Scroll helper for rows
  const scrollRow = (selector, direction) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const cardEl = el.querySelector(".scroll-card");
    const cardWidth = cardEl ? cardEl.clientWidth : 300;
    const gap = 12; // should match CSS gap
    const amount = Math.round((cardWidth + gap) * 2); // scroll ~2 cards
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="layout">
      {/* Navbar */}
      <nav
        className={`navbar fixed-top navbar-expand-lg ${
          scrolled ? "scrolled" : ""
        }`}
        style={{
          backgroundColor: scrolled ? "rgba(20,20,20,0.95)" : "transparent",
          transition: "background-color 0.25s ease",
        }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" aria-label="Home">
            <img src={logoImg} alt="Logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="navbar-toggler-icon">
              <span />
              <span />
              <span />
            </div>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-3">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/work-experience" className="nav-link">
                  Professional
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/skills" className="nav-link">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/games" className="nav-link">
                  Games
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-me" className="nav-link">
                  Hire Me
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center navbar-right">
            <Link to="/">
              <img src={profileImg} alt="Profile" className="profile-icon" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header
        className="profile-page"
        style={{
          backgroundImage: `url("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif")`,
        }}
      >
        <div className="profile-banner">
          <div className="banner-content">
            <h1 className="banner-headline">
              Aaditya Sangishetty - Software Developer
            </h1>
            <p className="banner-description">
              Passionate and results-driven developer with experience in
              building scalable, high-impact web applications using Python,
              FastAPI, React, and modern cloud technologies.
            </p>

            <div className="banner-buttons">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="custom-btn resume-btn"
              >
                ▶ Resume
              </a>

              <a
                href="https://in.linkedin.com/in/aaditya-sangishetty-08b0b5215"
                className="custom-btn linkedin-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                {/* use currentColor so icon follows the button text color */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  role="img"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  aria-hidden="true"
                  style={{ display: "block" }}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                  />
                </svg>

                <span style={{ marginLeft: 8 }}>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="content container-fluid card-container">
        {/* Top Picks row */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Today's Top Picks for Recruiter</h2>
            <span className="see-all">›</span>
          </div>

          <div className="scroll-container">
            <button
              className="scroll-arrow left"
              aria-label="Scroll left"
              onClick={() => scrollRow(".scroll-row-1", "left")}
            >
              ‹
            </button>

            <div className="scroll-row scroll-row-1" role="list">
              {topPicks.map((item, idx) => {
                const imgUrl = getPicsumUrl(topPicksSeeds[idx], 1000, 562);
                return (
                  <div
                    key={idx}
                    className="scroll-card"
                    role="listitem"
                    style={{
                      backgroundImage: `url("${imgUrl}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="card-overlay">
                      <p>{item}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              className="scroll-arrow right"
              aria-label="Scroll right"
              onClick={() => scrollRow(".scroll-row-1", "right")}
            >
              ›
            </button>
          </div>
        </section>

        {/* Continue Watching row */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Continue Watching for Recruiter</h2>
            <span className="see-all">›</span>
          </div>

          <div className="scroll-container">
            <button
              className="scroll-arrow left"
              aria-label="Scroll left"
              onClick={() => scrollRow(".scroll-row-2", "left")}
            >
              ‹
            </button>

            <div className="scroll-row scroll-row-2" role="list">
              {continueWatching.map((item, idx) => {
                const imgUrl = getPicsumUrl(contSeeds[idx], 1000, 562);
                return (
                  <div
                    key={idx}
                    className="scroll-card"
                    role="listitem"
                    style={{
                      backgroundImage: `url("${imgUrl}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="card-overlay">
                      <p>{item}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              className="scroll-arrow right"
              aria-label="Scroll right"
              onClick={() => scrollRow(".scroll-row-2", "right")}
            >
              ›
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Layout;

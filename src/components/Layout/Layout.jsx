import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logoImg from "../../assets/logos/name.svg";
import profileImg from "../../assets/profiles/recruiter.png";
import "./Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("ScrollY:", window.scrollY); // ✅ log every scroll event
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="layout">
      {/* Navbar */}
      <nav
        className={`navbar fixed-top navbar-expand-lg ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-fluid">
          {/* ✅ Brand (logo) */}
          <Link to="/" className="navbar-brand" aria-label="Home">
            <img src={logoImg} alt="Logo" />
          </Link>

          {/* ✅ Hamburger toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="navbar-toggler-icon"></div>
          </button>

          {/* ✅ Nav links */}
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

          {/* ✅ Right-side profile */}
          <div className="d-flex align-items-center navbar-right">
            <Link to="/">
              <img src={profileImg} alt="Profile" className="profile-icon" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="profile-page"
        style={{
          backgroundImage: `url("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif")`,
        }}
      >
        <div className="profile-banner">
          <div className="banner-content">
            <h1 className="banner-headline">
              Aditya Sangishetty — Software Developer
            </h1>
            <p className="banner-description">
              Passionate and results-driven developer with experience in
              building scalable, high-impact web applications using Python,
              FastAPI, React, and modern cloud technologies. I’ve worked on
              large-scale projects serving thousands of users, driving
              integrations, and optimizing performance for real-world systems.
            </p>
            <div className="banner-buttons">
              <a
                href="/resume.pdf"
                className="custom-btn resume-btn"
                target="_blank"
                rel="noreferrer"
              >
                ▶ Resume
              </a>

              <a
                href="https://linkedin.com"
                className="custom-btn linkedin-btn"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  aria-hidden="true"
                  className="icon"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="content container-fluid mt-4">
        <Outlet />
      </main>

      <div
        style={{ height: "2000px", background: "linear-gradient(black, gray)" }}
      ></div>

      <footer className="footer text-center py-3">
        <p>© {new Date().getFullYear()} Aditya Shetty | All rights reserved</p>
      </footer>
    </div>
  );
}

export default Layout;

import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logoImg from "../../assets/logos/name.svg";
import profileImg from "../../assets/profiles/recruiter.png";
import "./Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="layout">
      {/* Navbar */}
      <nav
        className={`navbar fixed-top navbar-expand-lg ${
          scrolled ? "scrolled" : ""
        }`}
        style={{
          backgroundColor: scrolled ? "#000000" : "transparent",
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
              <div />
              <div />
              <div />
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

      {/* Page Content */}
      <Outlet />
    </div>
  );
}

export default Layout;

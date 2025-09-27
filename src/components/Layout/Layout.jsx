import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import logoImg from "../../assets/logos/name.svg";
import recruiterImg from "../../assets/profiles/recruiter.png";
import developerImg from "../../assets/profiles/developer.png";
import stalkerImg from "../../assets/profiles/stalker.png";
import adventurerImg from "../../assets/profiles/adventurer.png";
import "./Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [profileImage, setProfileImage] = useState(recruiterImg);
  const [selectedPage, setSelectedPage] = useState("recruiter");
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    switch (location.pathname) {
      case "/recruiter":
        setProfileImage(recruiterImg);
        setSelectedPage("recruiter");
        break;
      case "/developer":
        setProfileImage(developerImg);
        setSelectedPage("developer");
        break;
      case "/stalker":
        setProfileImage(stalkerImg);
        setSelectedPage("stalker");
        break;
      case "/adventurer":
        setProfileImage(adventurerImg);
        setSelectedPage("adventurer");
        break;
      default:
        setProfileImage(recruiterImg);
        setSelectedPage("recruiter");
    }
  }, [location.pathname]);

  const handleProfileClick = () => navigate("/");
  const handleHomeClick = () => {
    navigate(`/${selectedPage}`);
    setMenuOpen(false);
  };

  return (
    <div className="layout">
      <nav
        className={`navbar fixed-top navbar-expand-lg ${
          scrolled ? "scrolled" : ""
        }`}
        style={{
          backgroundColor: scrolled ? "#000000" : "transparent",
          transition: "background-color 0.25s ease",
        }}
      >
        <div className="container-fluid align-items-center">
          {/* Logo */}
          <button
            onClick={() => navigate(`/${selectedPage}`)}
            className="navbar-brand"
            aria-label="Logo"
            style={{ border: "none", background: "transparent", padding: 0 }}
          >
            <img src={logoImg} alt="Logo" />
          </button>

          {/* Right: Hamburger + Profile */}
          <div className="navbar-actions d-flex align-items-center ms-auto">
            <button
              className="navbar-toggler me-2"
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="navbar-toggler-icon"></div>
            </button>

            <button
              onClick={handleProfileClick}
              className="profile-btn"
              aria-label="Profile"
            >
              <img src={profileImage} alt="Profile" className="profile-icon" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu for Mobile */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ×
        </button>
        <ul className="sidebar-nav">
          <li>
            <button onClick={handleHomeClick} className="nav-link">
              Home
            </button>
          </li>
          <li>
            <Link
              to="/work-experience"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Professional
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact-me"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      <Outlet />
    </div>
  );
}

export default Layout;

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
  const handleHomeClick = () => navigate(`/${selectedPage}`);

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
          {/* Left: Logo → go to selected profile */}
          <button
            onClick={() => navigate(`/${selectedPage}`)}
            className="navbar-brand"
            aria-label="Logo"
            style={{ border: "none", background: "transparent", padding: 0 }}
          >
            <img src={logoImg} alt="Logo" />
          </button>

          {/* Right row: Hamburger + Profile */}
          <div className="navbar-actions d-flex align-items-center ms-auto order-2 order-lg-3">
            <button
              className="navbar-toggler me-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
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

          {/* Collapsible menu */}
          <div
            className="collapse navbar-collapse order-3 order-lg-2"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-lg-3">
              <li className="nav-item">
                <button
                  onClick={handleHomeClick}
                  className="nav-link btn-link"
                  style={{ border: "none", background: "transparent" }}
                >
                  Home
                </button>
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
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;

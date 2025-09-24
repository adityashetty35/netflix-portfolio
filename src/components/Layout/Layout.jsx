import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import logoImg from "../../assets/logos/logo-2.428ef53f18dcf64df8df.svg";
import recruiterImg from "../../assets/profiles/recruiter.png";
import developerImg from "../../assets/profiles/developer.png";
import stalkerImg from "../../assets/profiles/stalker.png";
import adventurerImg from "../../assets/profiles/adventurer.png";
import "./Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [profileImage, setProfileImage] = useState(recruiterImg); // Default profile image
  const [selectedPage, setSelectedPage] = useState("recruiter"); // Track selected page (default to recruiter)
  
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Use navigate to programmatically navigate

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update profile image and selected page based on the current route
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
        setProfileImage(recruiterImg); // Default to recruiter on other pages
        setSelectedPage("recruiter");
    }
  }, [location.pathname]); // Runs whenever the location changes

  // Handle click on the Home icon (navigate to the selected page)
  const handleHomeClick = () => {
    // Redirect to the selected page when clicking on Home
    navigate(`/${selectedPage}`);
  };

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
            {/* On clicking Home icon, navigate to the selected page */}
            <button onClick={handleHomeClick} style={{ border: "none", background: "transparent" }}>
              <img src={profileImage} alt="Profile" className="profile-icon" />
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <Outlet />
    </div>
  );
}

export default Layout;

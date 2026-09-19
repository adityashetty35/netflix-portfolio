import React from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import "./WhosWatching.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

import recruiterImg from "../../assets/profiles/recruiter.png";
import developerImg from "../../assets/profiles/developer.png";
import stalkerImg from "../../assets/profiles/stalker.png";
import adventurerImg from "../../assets/profiles/adventurer.png";

function WhosWatching() {
  const navigate = useNavigate();

  const profiles = [
    { name: "Recruiter", img: recruiterImg, path: "/recruiter" },
    { name: "Developer", img: developerImg, path: "/developer" },
    { name: "Stalker", img: stalkerImg, path: "/stalker" },
    { name: "Adventurer", img: adventurerImg, path: "/adventurer" },
  ];

  return (
    <Motion.div
      className="whos-watching"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Who’s Watching?
      </Motion.h1>

      <div className="profiles-container">
        {profiles.map((profile) => (
          <Motion.div
            key={profile.name}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProfileCard
              name={profile.name}
              image={profile.img}
              onClick={() => navigate(profile.path)}
            />
          </Motion.div>
        ))}
      </div>
    </Motion.div>
  );
}

export default WhosWatching;

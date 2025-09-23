import React from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="whos-watching">
      <h1>Who’s Watching?</h1>
      <div className="profiles-container">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.name}
            name={profile.name}
            image={profile.img}
            onClick={() => navigate(profile.path)}
          />
        ))}
      </div>
    </div>
  );
}

export default WhosWatching;

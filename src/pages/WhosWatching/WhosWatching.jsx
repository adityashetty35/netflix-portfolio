import React from "react";
import { useNavigate } from "react-router-dom";
import "./WhosWatching.css";
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
    <div className="whos-watching text-center">
      <h1 className="mb-5">Who’s Watching?</h1>
      <div className="profiles-container">
        {profiles.map((profile, index) => (
          <div
            className="profile-card"
            key={index}
            onClick={() => navigate(profile.path)}
          >
            <img src={profile.img} alt={profile.name} />
            <p>{profile.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhosWatching;

import React from "react";
import "./WhosWatching.css";
import recruiterImg from "../../assets/profiles/recruiter.png";
import developerImg from "../../assets/profiles/developer.png";
import stalkerImg from "../../assets/profiles/stalker.png";
import adventurerImg from "../../assets/profiles/adventurer.png";

function WhosWatching() {
  const profiles = [
    { name: "Recruiter", img: recruiterImg },
    { name: "Developer", img: developerImg },
    { name: "Stalker", img: stalkerImg },
    { name: "Adventurer", img: adventurerImg },
  ];

  return (
    <div className="whos-watching text-center">
      <h1 className="mb-5">Who’s Watching?</h1>
      <div className="profiles-container">
        {profiles.map((profile, index) => (
          <div className="profile-card" key={index}>
            <img
              src={profile.img}
              alt={profile.name}
              className="img-fluid rounded"
            />
            <p>{profile.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhosWatching;

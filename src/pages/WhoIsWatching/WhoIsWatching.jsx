import React from "react";
import "./WhoIsWatching.css"; // custom styles

const avatars = [
  { name: "Recruiter", color: "bg-primary" },
  { name: "Developer", color: "bg-secondary" },
  { name: "Stalker", color: "bg-danger" },
  { name: "Adventurer", color: "bg-warning" },
];

export default function WhoIsWatching() {
  return (
    <div className="who-container text-center text-white">
      <h1 className="mb-5">Who's Watching?</h1>

      <div className="d-flex justify-content-center gap-4 flex-wrap">
        {avatars.map((a) => (
          <div key={a.name} className="avatar-card">
            <div className={`avatar-box ${a.color}`}></div>
            <p className="mt-2">{a.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

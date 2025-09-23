import React from "react";
import "./ProfileCard.css";

function ProfileCard({ name, image, onClick }) {
  return (
    <div
      className="profile-card"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyPress={(e) => e.key === "Enter" && onClick()}
    >
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default ProfileCard;

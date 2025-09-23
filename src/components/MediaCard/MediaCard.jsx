import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./MediaCard.css";

function MediaCard({ id, title, imgUrl, path }) {
  const navigate = useNavigate();
  const { profile } = useParams() || {}; // optional, fallback if inside nested route

  return (
    <div
      className="scroll-card"
      onClick={() => navigate(path || `/${profile || "recruiter"}/${title.toLowerCase().replace(/\s+/g, "-")}`)}
      style={{
        backgroundImage: `url("${imgUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card-overlay">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default MediaCard;

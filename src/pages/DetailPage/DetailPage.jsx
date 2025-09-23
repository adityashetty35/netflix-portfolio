import React from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css";

// Import data (you can centralize later if you have many profiles)
import { recruiterTopPicks, recruiterContinue } from "../../assets/data";

function DetailPage() {
  const { profile, section } = useParams();

  // Normalize section param (e.g., "contact-me" -> "Contact Me")
  const sectionTitle = section.replace(/-/g, " ").toLowerCase();

  // Lookup content based on profile
  let content;
  if (profile === "recruiter") {
    const allItems = [...recruiterTopPicks, ...recruiterContinue];
    content = allItems.find(
      (item) => item.title.toLowerCase() === sectionTitle
    );
  }

  if (!content) {
    return (
      <div className="detail-page">
        <h1>Not Found</h1>
        <p>No content available for {profile}/{section}</p>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <h1>{content.details.headline}</h1>
      <p>{content.details.description}</p>
      <div className="detail-image">
        <img src={content.imgUrl} alt={content.title} />
      </div>
    </div>
  );
}

export default DetailPage;

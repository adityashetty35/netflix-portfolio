import React from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailPage.css";
import { findCard } from "../../assets/data";

function DetailPage() {
  const { profile, section } = useParams();
  const content = findCard(profile, section);

  if (!content?.details) {
    return (
      <div className="detail-page">
        <h1>Not Found</h1>
        <p>
          No content available for {profile}/{section}
        </p>
        <Link to={`/${profile ?? "recruiter"}`}>Back to browsing</Link>
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
      <Link to={content.path}>Open {content.title}</Link>
    </div>
  );
}

export default DetailPage;

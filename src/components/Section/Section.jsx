import React from "react";
import MediaCard from "../MediaCard/MediaCard";
import "./Section.css";

function Section({ title, items, rowId }) {
  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
      </div>

      <div className="scroll-container">
        <div className={`scroll-row scroll-row-${rowId}`} role="list">
          {items.map((item) => (
            <MediaCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section;

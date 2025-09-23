import React from "react";
import MediaCard from "../MediaCard/MediaCard";
import "./Section.css";

function Section({ title, items, rowId, scrollRow }) {
  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <span className="see-all">›</span>
      </div>

      <div className="scroll-container">
        <button className="scroll-arrow left" onClick={() => scrollRow(`.scroll-row-${rowId}`, "left")}>
          ‹
        </button>

        <div className={`scroll-row scroll-row-${rowId}`} role="list">
          {items.map((item) => (
            <MediaCard key={item.id} {...item} />
          ))}
        </div>

        <button className="scroll-arrow right" onClick={() => scrollRow(`.scroll-row-${rowId}`, "right")}>
          ›
        </button>
      </div>
    </section>
  );
}

export default Section;

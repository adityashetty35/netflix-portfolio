import React, { useRef } from "react";
import MediaCard from "../MediaCard/MediaCard";
import "./Section.css";

function Section({ title, items }) {
  const rowRef = useRef(null);

  const scrollRow = (direction) => {
    const row = rowRef.current;
    if (!row) return;

    const card = row.querySelector(".scroll-card");
    const gap = 12; // matches the gap in Section.css
    const step = ((card?.clientWidth ?? 300) + gap) * 2;

    row.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
      </div>

      <div className="scroll-container">
        <button
          type="button"
          className="scroll-arrow left"
          aria-label={`Scroll ${title} backwards`}
          onClick={() => scrollRow("left")}
        >
          ‹
        </button>

        <div className="scroll-row" ref={rowRef} role="list">
          {items.map((item) => (
            <MediaCard key={item.id} {...item} />
          ))}
        </div>

        <button
          type="button"
          className="scroll-arrow right"
          aria-label={`Scroll ${title} forwards`}
          onClick={() => scrollRow("right")}
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default Section;

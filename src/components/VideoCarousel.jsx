import { useState } from "react";
import { hightlightsSlides } from "../constants";
import "./VideoCarousel.css";

const chapters = [
  { title: "A17 Pro", subtitle: "The story underneath.", poster: "chip.jpeg" },
  { title: "Titanium", subtitle: "Texture. With character.", poster: "explore2.jpg" },
  { title: "Camera", subtitle: "A different perspective.", poster: "explore1.jpg" },
  { title: "Action button", subtitle: "A detail worth a closer look.", poster: "hero.jpeg" },
];

export default function VideoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const chapter = chapters[activeIndex];
  const slide = hightlightsSlides[activeIndex];

  function selectChapter(index) {
    setActiveIndex(index);
    setVideoError(false);
  }

  return (
    <div className="feature-player">
      <div className="feature-chapters" role="group" aria-label="Choose a highlight film">
        {chapters.map((item, index) => (
          <button type="button" key={item.title} aria-pressed={index === activeIndex} aria-controls="feature-film" onClick={() => selectChapter(index)}>
            <span className="feature-chapter-number">0{index + 1}</span>
            <span>{item.title}</span>
            <span className="feature-chapter-arrow" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <div className="feature-stage">
        <div className="feature-stage-heading" aria-live="polite">
          <p className="editorial-eyebrow">IN FOCUS / 0{activeIndex + 1}</p>
          <h3>{chapter.subtitle}</h3>
          <p>Choose a chapter. Press play. Take a closer look.</p>
        </div>
        <video id="feature-film" key={slide.id} controls muted playsInline preload="metadata" poster={`/assets/images/${chapter.poster}`} aria-label={`${chapter.title} highlight film`} onError={() => setVideoError(true)}>
          <source src={slide.video} type="video/mp4" />
          Your browser cannot play this video. <a href={slide.video}>Open the highlight film.</a>
        </video>
        {videoError && <p className="media-load-error" role="alert">This highlight could not be loaded. <a href={slide.video}>Open the video directly.</a></p>}
      </div>
      <div className="feature-player-footer"><span>0{activeIndex + 1} / 04 <span>SUPPLIED IPHONE 15 PRO FILMS</span></span><a href="/store">Explore the details ↗</a></div>
    </div>
  );
}

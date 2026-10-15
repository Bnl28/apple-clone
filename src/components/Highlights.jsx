import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="home-editorial home-highlights"
      aria-labelledby="highlights-title"
    >
      <div>
        <div className="home-section-heading">
          <div><p className="editorial-eyebrow">THE DETAILS / IN MOTION</p><h2 id="highlights-title">Get the highlights.<br /><span>Stay for the details.</span></h2></div>
          <div className="highlight-external-links">
            <a
              href="https://www.youtube.com/watch?v=ZiP1l7jlIIA&t=3243s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch the film: iPhone 15 Pro introduction in Apple's launch event (opens in a new tab)"
              className="highlight-link"
            >
              Watch the film
              <img src={watchImg} alt="" className="ml-2" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=ZiP1l7jlIIA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch the event: Apple September 12, 2023 (opens in a new tab)"
              className="highlight-link"
            >
              Watch the event
              <img src={rightImg} alt="" className="ml-2" />
            </a>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;

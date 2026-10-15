import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);

  useGSAP(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to("#hero", { opacity: 1, duration: reducedMotion ? 0 : 0.8 });
    gsap.to("#cta", { opacity: 1, duration: reducedMotion ? 0 : 0.8 });
  });

  return (
    <section className="upgraded-hero">
      <div className="hero-stage">
        <p className="editorial-eyebrow">A COOLER PERSPECTIVE / IPHONE 15 PRO</p>
        <h1 id="hero" className="hero-title">
          iPhone 15 Pro
        </h1>
        <p className="hero-subtitle">Precision in every detail.<br /><span>Reframed in a cooler light.</span></p>
        <div className="hero-film">
          <video aria-label="iPhone 15 Pro titanium product film" autoPlay loop muted playsInline={true} key={videoSrc} poster="/assets/images/hero.jpeg" controls>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="hero-upgraded-actions"
      >
        <a
          href="/store"
          className="upgrade-cta"
        >
          Explore the Store ↗
        </a>

        <a href="#highlights" className="hero-secondary-link">Watch the highlights ↓</a>
      </div>
      <p className="hero-demo-note">Unofficial design demo. Not affiliated with Apple. Nothing is for sale.</p>
    </section>
  );
};

export default Hero;

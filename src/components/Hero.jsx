import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
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

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) videoRef.current?.pause();
  }, [reducedMotion]);

  useEffect(() => {
    document.title = "Apple Clone | iPhone Showcase";
  }, []);

  useGSAP(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to("#hero", { opacity: 1, duration: reducedMotion ? 0 : 0.8 });
    gsap.to("#cta", { opacity: 1, duration: reducedMotion ? 0 : 0.8 });
  });

  return (
    <section className="upgraded-hero iphone-hero" aria-labelledby="hero">
      <div className="hero-stage">
        <div className="hero-topline"><p className="editorial-eyebrow">THE PRO EDIT / 01</p><span>DESIGN. IN A DIFFERENT LIGHT.</span></div>
        <p className="editorial-eyebrow">A COOLER PERSPECTIVE / IPHONE 15 PRO</p>
        <h1 id="hero" className="hero-title">
          iPhone 15 <span>Pro.</span>
        </h1>
        <p className="hero-subtitle">Precision in every detail.<br /><span>Reframed in a cooler light.</span></p>
        <div className="hero-film">
          <video ref={videoRef} aria-label="iPhone 15 Pro titanium product film" autoPlay={!reducedMotion} loop muted playsInline={true} key={videoSrc} poster="/assets/images/hero.jpeg" controls onError={() => setVideoError(true)}>
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="hero-film-caption"><span>IPHONE 15 PRO / TITANIUM</span><span>SUPPLIED PRODUCT FILM <span aria-hidden="true">↗</span></span></div>
          {videoError && <p className="media-load-error" role="alert">The product film could not be loaded. <a href={videoSrc}>Open the video directly.</a></p>}
        </div>
        <div className="hero-detail-strip" aria-label="Collection highlights">
          <span><strong>01</strong> Titanium in focus</span>
          <span><strong>02</strong> A closer perspective</span>
          <span><strong>03</strong> Colour, reimagined</span>
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

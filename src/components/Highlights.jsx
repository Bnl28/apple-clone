import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0, delay: 2 });
    gsap.to(".highlight-link", {
      opacity: 1,
      y: 4,
      duration: 1,
      stagger: 0.25,
      delay: 2,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-full overflow-hidden h-full common-padding bg-black"
    >
      <div className="flex flex-col gap-6 md:gap-8 ">
        <div className="mb-12 w-full  md:items-start md:flex md:flex-row flex flex-col items-start gap-3 justify-between ">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap md:flex-row  items-end gap-5">
            <a
              href="https://www.youtube.com/watch?v=ZiP1l7jlIIA&t=3243s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch the film: iPhone 15 Pro introduction in Apple's launch event (opens in a new tab)"
              className="highlight-link text-blue-400 hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20 gap-2"
            >
              Watch the film
              <img src={watchImg} alt="" className="ml-2" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=ZiP1l7jlIIA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch the event: Apple September 12, 2023 (opens in a new tab)"
              className="highlight-link text-blue-400 hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20 gap-2"
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

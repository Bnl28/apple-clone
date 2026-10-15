import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Store from "./components/Store";
import { useState } from "react";
import "./Upgrade.css";

function App() {
  const isStore = window.location.pathname.replace(/\/$/, "") === "/store";
  const [colourTreatment, setColourTreatment] = useState("cool");

  return (
    <main className="bg-black upgraded-site" data-colour={colourTreatment}>
      <Navbar isStore={isStore} />
      <div className="appearance-bar">
        <p>APPLE CLONE <span>/ Independent visual showcase</span></p>
        <div className="appearance-options" role="group" aria-label="Image colour treatment">
          <span>Image tone</span>
          <button type="button" aria-pressed={colourTreatment === "cool"} onClick={() => setColourTreatment("cool")}>Cool cyan</button>
          <button type="button" aria-pressed={colourTreatment === "original"} onClick={() => setColourTreatment("original")}>Original</button>
        </div>
        <p className="colour-disclosure">Colour treatment is illustrative. Select Original to view the supplied image colours.</p>
      </div>
      {isStore ? <Store /> : <>
        <Hero />
        <section className="home-editorial" aria-labelledby="home-details-title">
          <div className="home-section-heading"><div><p className="editorial-eyebrow">MATERIAL / FORM / PERSPECTIVE</p><h2 id="home-details-title">Closer to the details.<br /><span>Further from ordinary.</span></h2></div><a href="/store">Explore all seven previews ↗</a></div>
          <div className="home-editorial-grid">
            <a className="home-detail-card home-detail-large" href="/store"><img src="/assets/images/explore1.jpg" alt="Close-up of the iPhone 15 Pro camera enclosure" width="768" height="819" loading="lazy" /><div><p className="editorial-eyebrow">01 / PERSPECTIVE</p><h3>A new angle on familiar.</h3><span>Explore the camera design ↗</span></div></a>
            <a className="home-detail-card" href="/store"><img src="/assets/images/explore2.jpg" alt="Brushed titanium side buttons on iPhone 15 Pro" width="1028" height="684" loading="lazy" /><div><p className="editorial-eyebrow">02 / MATERIAL</p><h3>Texture with character.</h3><span>Get closer to titanium ↗</span></div></a>
            <a className="home-detail-card home-chip-card" href="/store"><img src="/assets/images/chip.jpeg" alt="Apple A17 Pro chip graphic" width="360" height="360" loading="lazy" /><div><p className="editorial-eyebrow">03 / INSIDE</p><h3>The story underneath.</h3><span>Discover A17 Pro ↗</span></div></a>
          </div>
        </section>
        <Highlights />
        <section className="home-closing"><p className="editorial-eyebrow">A COLLECTION WORTH A CLOSER LOOK</p><h2>Find your perspective.</h2><a className="upgrade-cta" href="/store">Explore the Store ↗</a><p>Unofficial design demo. Not affiliated with Apple. No products are for sale.</p></section>
      </>}
    </main>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Store from "./components/Store";
import { useState } from "react";
import "./Upgrade.css";
import InformationPage from "./components/InformationPage";

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const isStore = path === "/store";
  const informationPage = path === "/mac" ? "Mac" : path === "/support" ? "Support" : null;
  const [colourTreatment, setColourTreatment] = useState("cool");

  return (
    <main className="bg-black upgraded-site" data-colour={colourTreatment}>
      <Navbar activePage={isStore ? "Store" : informationPage || "iPhone"} />
      <div className="appearance-bar">
        <p>APPLE CLONE <span>/ Independent visual showcase</span></p>
        <div className="appearance-options" role="group" aria-label="Image colour treatment">
          <span>Image tone</span>
          <button type="button" aria-pressed={colourTreatment === "cool"} onClick={() => setColourTreatment("cool")}>Cool cyan</button>
          <button type="button" aria-pressed={colourTreatment === "original"} onClick={() => setColourTreatment("original")}>Original</button>
        </div>
        <p className="colour-disclosure">Colour treatment is illustrative. Select Original to view the supplied image colours.</p>
      </div>
      {isStore ? <Store /> : informationPage ? <InformationPage page={informationPage} /> : <>
        <Hero />
        <section className="home-editorial iphone-editorial" aria-labelledby="home-details-title">
          <div className="home-section-heading"><div><p className="editorial-eyebrow">MATERIAL / FORM / PERSPECTIVE</p><h2 id="home-details-title">Closer to the details.<br /><span>Further from ordinary.</span></h2></div><a href="/store">Explore all seven previews ↗</a></div>
          <div className="home-editorial-grid">
            <a className="home-detail-card home-detail-large" href="/store"><img src="/assets/images/explore1.jpg" alt="Close-up of the iPhone 15 Pro camera enclosure" width="768" height="819" loading="lazy" /><div><p className="editorial-eyebrow">01 / PERSPECTIVE</p><h3>A new angle on familiar.</h3><span>Explore the camera design ↗</span></div></a>
            <a className="home-detail-card" href="/store"><img src="/assets/images/explore2.jpg" alt="Brushed titanium side buttons on iPhone 15 Pro" width="1028" height="684" loading="lazy" /><div><p className="editorial-eyebrow">02 / MATERIAL</p><h3>Texture with character.</h3><span>Get closer to titanium ↗</span></div></a>
            <a className="home-detail-card home-chip-card" href="/store"><img src="/assets/images/chip.jpeg" alt="Apple A17 Pro chip graphic" width="360" height="360" loading="lazy" /><div><p className="editorial-eyebrow">03 / INSIDE</p><h3>The story underneath.</h3><span>Discover A17 Pro ↗</span></div></a>
          </div>
        </section>
        <section className="home-material-story" aria-labelledby="material-title">
          <div className="material-story-copy"><p className="editorial-eyebrow">THE MATERIAL STUDY / TITANIUM</p><h2 id="material-title">Less ordinary.<br /><span>More elemental.</span></h2><p>Brushed edges. Sculpted details. A familiar silhouette, seen in a different light.</p><a href="/store">Explore the material story ↗</a></div>
          <img src="/assets/images/hero.jpeg" alt="Titanium wordmark behind the slender side profile of iPhone 15 Pro" width="2000" height="600" loading="lazy" />
          <div className="material-story-caption"><span>01 / THE PROFILE</span><span>COLOUR IS A CREATIVE TREATMENT, NOT A PRODUCT FINISH.</span></div>
        </section>
        <Highlights />
        <section className="home-editorial home-finish-study" aria-labelledby="finish-title">
          <div className="home-section-heading"><div><p className="editorial-eyebrow">FOUR COLOUR STUDIES / ONE NEW PERSPECTIVE</p><h2 id="finish-title">Find your shade.<br /><span>Set a different mood.</span></h2></div><a href="/store">View the full collection ↗</a></div>
          <div className="finish-study-grid">
            {[{ image: "blue.jpg", name: "Blue", tone: "blue" }, { image: "black.jpg", name: "Graphite", tone: "graphite" }, { image: "white.jpg", name: "Silver", tone: "silver" }, { image: "yellow.jpg", name: "Sand", tone: "sand" }].map((finish) => <a className={`finish-study-card finish-${finish.tone}`} href="/store" key={finish.name}><div className="finish-phone-art"><img src={`/assets/images/${finish.image}`} alt={`${finish.name} abstract wallpaper study in an illustrative landscape phone frame`} width="768" height="1664" loading="lazy" /><img src="/assets/images/frame.png" alt="" className="finish-phone-frame" width="1392" height="680" loading="lazy" /></div><div><span className="finish-swatch" aria-hidden="true" /><h3>{finish.name}</h3><span aria-hidden="true">↗</span></div></a>)}
          </div>
          <p className="finish-study-note">Abstract wallpaper studies, not photographs of exterior phone finishes. Image tone is illustrative.</p>
        </section>
        <section className="home-closing"><p className="editorial-eyebrow">A COLLECTION WORTH A CLOSER LOOK</p><h2>Find your perspective.</h2><a className="upgrade-cta" href="/store">Explore the Store ↗</a><p>Unofficial design demo. Not affiliated with Apple. No products are for sale.</p></section>
        <footer className="home-footer"><a className="store-brand" href="/">Apple Clone</a><span>An independent visual showcase.</span><nav aria-label="Footer navigation"><a href="/store">Store</a><a href="/mac">Mac</a><a href="/support">Support</a></nav></footer>
      </>}
    </main>
  );
}

export default App;

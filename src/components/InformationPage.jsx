import { useEffect, useState } from "react";

const supportTopics = [
  {
    title: "Where can I get help with my Mac or iPhone?",
    text: "This independent showcase cannot diagnose devices or access Apple accounts. Use Apple's official support website for product help, repair options, and account assistance.",
    href: "https://support.apple.com/",
    link: "Visit official Apple Support",
  },
  {
    title: "Can I purchase a product here?",
    text: "No. Apple Clone is a portfolio design demo. There is no checkout, reservation, payment collection, warranty service, or order tracking. Product images and illustrations are for visual exploration only.",
  },
  {
    title: "Why do the images look different?",
    text: "Cool cyan applies a visual colour treatment. Use the Original button above to see the supplied colours. The treatment does not represent a new Apple product finish, and selections reset when you navigate or reload.",
  },
  {
    title: "Does this site collect my account details?",
    text: "There are no login, payment, or contact forms on these pages. Never enter an Apple Account password here. Hosting providers may process technical request information to deliver and protect the website.",
    href: "https://vercel.com/legal/privacy-policy",
    link: "Read the hosting provider's privacy policy",
  },
];

export default function InformationPage({ page }) {
  const isMac = page === "Mac";
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    document.title = `Apple Clone | ${page}`;
  }, [page]);

  return (
    <div className={`concept-store premium-store information-page${isMac ? " mac-showcase" : ""}`}>
      {!isMac && <><div className="store-notice">Unofficial design demo. Not affiliated with Apple. No products are for sale.</div>
      <section className="store-intro store-width">
        <div>
          <p className="store-eyebrow">APPLE CLONE / {isMac ? "MAC EXPLORATION" : "HELP & INFORMATION"}</p>
          <h1>{isMac ? "Room to think." : "A little clarity."}<br /><span>{isMac ? "Space to create." : "Right this way."}</span></h1>
          <p>{isMac ? "Real MacBook photography. A closer look at the details. Discover a different perspective on a familiar workspace." : "Find your way around the showcase, or reach the right place for real product support."}</p>
        </div>
      </section></>}
      {isMac ? <>
        <section className="upgraded-hero" aria-labelledby="mac-title">
          <div className="hero-stage">
            <p className="editorial-eyebrow">A COOLER PERSPECTIVE / MACBOOK PRO</p>
            <h1 id="mac-title" className="hero-title">MacBook <span>Pro.</span></h1>
            <p className="hero-subtitle">Room for your next idea.<br /><span>Reframed in a cooler light.</span></p>
            <div id="mac-film" className="hero-film mac-hero-film">
              <video controls playsInline autoPlay muted loop preload="metadata" poster="/assets/images/macbook-magsafe-poster.jpg" onError={() => setVideoError(true)} aria-label="Archival demonstration of an original MagSafe plug disconnecting and reconnecting to a MacBook" aria-describedby="mac-film-description">
                <source src="/assets/videos/macbook-magsafe.mp4" type="video/mp4" />
                <source src="/assets/videos/macbook-magsafe.webm" type="video/webm" />
                Your browser cannot play this video. <a href="/assets/videos/macbook-magsafe.mp4">Download the MacBook demonstration</a>.
              </video>
              {videoError && <p role="alert">The video could not be loaded. <a href="/assets/videos/macbook-magsafe.mp4" download>Download the clip to play it in another player.</a></p>}
              <p id="mac-film-description">Original MagSafe in motion / silent archival clip by Gerolsteiner91 / 320 × 240. Not a current-model feature demo or an official Apple film.</p>
            </div>
            <div className="hero-detail-strip" aria-label="Collection highlights"><span><strong>01</strong> Form in focus</span><span><strong>02</strong> A closer perspective</span><span><strong>03</strong> Details in motion</span></div>
          </div>
          <div className="hero-upgraded-actions"><a className="upgrade-cta" href="#mac-details-title">Explore Mac ↓</a><a className="hero-secondary-link" href="#mac-highlights">Watch the highlights ↓</a></div>
          <p className="hero-demo-note">Unofficial design demo. Not affiliated with Apple. Nothing is for sale.</p>
        </section>
        <section className="home-editorial" aria-labelledby="mac-details-title">
          <div className="home-section-heading"><div><p className="editorial-eyebrow">MATERIAL / FORM / PERSPECTIVE</p><h2 id="mac-details-title">Closer to the details.<br /><span>More room for possibility.</span></h2></div><a href="#mac-highlights">Explore the highlights ↓</a></div>
          <div className="home-editorial-grid">
            <a className="home-detail-card home-detail-large mac-photo-card" href="/assets/images/macbook-pro-2021.jpg"><img src="/assets/images/macbook-pro-2021.jpg" alt="Open silver 2021 14-inch MacBook Pro" width="1920" height="1440" loading="lazy" /><div><p className="editorial-eyebrow">01 / PERSPECTIVE / 2021 MODEL</p><h3>A fresh window on familiar.</h3><span>View the full photograph ↗</span></div></a>
            <a className="home-detail-card mac-photo-card" href="/assets/images/macbook-pro-retina.jpg"><img src="/assets/images/macbook-pro-retina.jpg" alt="2016 MacBook Pro Retina keyboard, trackpad, and display" width="1920" height="1570" loading="lazy" /><div><p className="editorial-eyebrow">02 / FORM / 2016 MODEL</p><h3>Space to create.</h3><span>Explore the Retina photograph ↗</span></div></a>
            <a className="home-detail-card" href="#mac-film"><img src="/assets/images/macbook-magsafe-poster.jpg" alt="Original MagSafe connector beside a MacBook" width="320" height="240" loading="lazy" /><div><p className="editorial-eyebrow">03 / IN MOTION / ARCHIVE</p><h3>A magnetic little moment.</h3><span>Return to the film ↑</span></div></a>
          </div>
        </section>
        <section id="mac-highlights" className="home-editorial mac-highlights" aria-labelledby="mac-highlights-title">
          <div className="home-section-heading"><div><p className="editorial-eyebrow">A DIFFERENT POINT OF VIEW</p><h2 id="mac-highlights-title">Get the highlights.</h2></div><a href="#mac-film">Watch the detail film ↑</a></div>
          <div className="mac-highlight-panel"><img className="mac-product-image" src="/assets/images/macbook-pro-retina.jpg" alt="Angled view of the 2016 MacBook Pro Retina" width="1920" height="1570" loading="lazy" /><div><p className="editorial-eyebrow">DESIGN / UP CLOSE</p><h3>A familiar shape.<br /><span>A new perspective.</span></h3><p>Explore the keyboard, trackpad, and aluminium enclosure through licensed MacBook photography. Older models, shown as a visual study.</p><a className="upgrade-cta" href="https://www.apple.com/mac/" target="_blank" rel="noopener noreferrer">Official Apple Mac website (new tab) ↗</a></div></div>
        </section>
        <section className="home-closing"><p className="editorial-eyebrow">A COLLECTION WORTH A CLOSER LOOK</p><h2>Find your next perspective.</h2><a className="upgrade-cta" href="/store">Explore the Store ↗</a><p>Unofficial design demo. Not affiliated with Apple. No products are for sale.</p></section>
        <details className="store-width mac-media-credits">
          <summary>Media credits &amp; licences</summary>
          <p><a href="https://commons.wikimedia.org/wiki/File:A_2021_14-inch_Silver_MacBook_Pro.jpg" target="_blank" rel="noopener noreferrer">2021 MacBook Pro — Oops4321 (source, new tab)</a> and <a href="https://commons.wikimedia.org/wiki/File:MacBook_Pro_Retina_001.jpg" target="_blank" rel="noopener noreferrer">MacBook Pro Retina 001 — SimonWaldherr (source, new tab)</a>: <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0 (new tab)</a>.</p>
          <p><a href="https://commons.wikimedia.org/wiki/File:MagSafe_on_a_MacBook.ogv" target="_blank" rel="noopener noreferrer">MagSafe on a MacBook — Gerolsteiner91 (source, new tab)</a>: <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0 (new tab)</a>. WebM rendition from Wikimedia Commons, also converted to MP4; poster extracted from the clip.</p>
          <p>Photos are resized Commons renditions with an optional illustrative CSS colour treatment. Adapted photo presentations are shared under CC BY-SA 4.0; the converted video and extracted poster retain CC BY-SA 3.0. Select Original above to remove the colour treatment. These older models do not represent the current Mac lineup. The creators do not endorse this showcase.</p>
        </details>
      </> : <>
        <section className="store-width" aria-labelledby="support-visual-title">
          <div className="support-visual">
            <div className="support-visual-copy"><p className="store-eyebrow">A GOOD PLACE TO START</p><h2 id="support-visual-title">Less searching.<br /><span>More understanding.</span></h2><p>Explore the demo, understand the imagery, or find official help for your device.</p><a className="upgrade-cta" href="#support-topics-title">Find your answer ↓</a></div>
            <img src="/assets/images/explore1.jpg" alt="Detail of the iPhone 15 Pro camera housing and titanium edge" width="768" height="819" fetchPriority="high" />
            <span className="support-visual-label">DETAILS MAKE THE DIFFERENCE / 01</span>
          </div>
        </section>
        <section className="store-width support-content" aria-labelledby="support-topics-title">
        <p className="store-eyebrow">THE ESSENTIALS / 4 USEFUL ANSWERS</p>
        <h2 id="support-topics-title">Useful answers. <span>No guesswork.</span></h2>
        <div className="support-faq">
          {supportTopics.map((topic, index) => <details key={topic.title} open={index === 0}><summary>{topic.title}</summary><p>{topic.text}</p>{topic.href && <a href={topic.href} target="_blank" rel="noopener noreferrer">{topic.link} (new tab) ↗</a>}</details>)}
        </div>
        <div className="support-shortcuts"><a className="upgrade-cta" href="/store">Browse the Store ↗</a><a href="/mac">Explore Mac ↗</a><a href="/">Explore iPhone ↗</a></div>
      </section></>}
      <footer className="store-footer store-width"><a className="store-brand" href="/">Apple Clone</a><span>Independent design demo. Not official Apple support.</span><a href="/store">Store</a><a href="/mac">Mac</a><a href="/">iPhone</a><a href="/support">Support</a></footer>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import "./Store.css";

const categories = ["All", "Phones", "Computers", "Audio", "Wearables"];
const products = [
  { id: "one", category: "Phones", name: "Phone concept", tag: "YOUR EVERYDAY, REIMAGINED", description: "A considered phone concept with a luminous glacier finish.", art: "phone", tone: "glacier", detail: "An edge-to-edge screen, a sculpted camera enclosure, and soft metallic colours. This original concept explores a calmer approach to the everyday phone." },
  { id: "air", category: "Computers", name: "Notebook concept", tag: "SPACE FOR BIG IDEAS", description: "A lightweight notebook concept for wherever inspiration lands.", art: "laptop", tone: "violet", detail: "A slim notebook silhouette with an expansive display and a quiet violet palette. This design study puts focus and creative space first." },
  { id: "wave", category: "Audio", name: "Headphone concept", tag: "FIND YOUR FREQUENCY", description: "Over-ear headphones imagined for your own little world.", art: "audio", tone: "peach", detail: "Generous ear cushions and a continuous headband create an approachable audio concept. Warm peach finishes bring a playful note to the collection." },
  { id: "orbit", category: "Wearables", name: "Watch concept", tag: "MAKE EVERY MOMENT YOURS", description: "A wrist-sized companion with a fresh perspective.", art: "watch", tone: "mint", detail: "A rounded display and a simple woven-style band form this wearable concept. This is a visual exploration, not a medical or activity-tracking device." },
];

function ProductArt({ type, tone }) {
  return <div className={`product-art art-${type} tone-${tone}`} aria-hidden="true"><div className="device"><div className="device-display" /><div className="device-detail" /></div></div>;
}

export default function Store() {
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const dialogRef = useRef(null);
  const visibleProducts = products.filter((product) => category === "All" || product.category === category);

  useEffect(() => {
    document.title = "Apple Clone | Concept Store";
  }, []);

  function openProduct(product) {
    setSelectedProduct(product);
    setShowPrivacy(false);
    dialogRef.current.showModal();
  }

  function openPrivacy() {
    setSelectedProduct(null);
    setShowPrivacy(true);
    dialogRef.current.showModal();
  }

  return (
    <div className="concept-store">
      <a className="store-skip" href="#store-products">Skip to collection</a>
      <div className="store-notice">Apple Clone — unofficial design demo. Not affiliated with Apple. No products are for sale.</div>
      <section className="store-intro store-width">
        <div><p className="store-eyebrow">APPLE CLONE / THE CONCEPT COLLECTION</p><h1>Good design.<br /><span>A different kind of everyday.</span></h1><p>Explore a small world of thoughtfully imagined technology.</p></div>
        <a className="store-intro-note" href="#about-store"><span className="store-note-symbol" aria-hidden="true">?</span><span>New around here?<br /><strong>Get to know the collection ↗</strong></span></a>
      </section>
      <nav className="store-categories store-width" aria-label="Product categories">
        {categories.map((item, index) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}><span className={`category-symbol category-${index}`} aria-hidden="true">{["✳", "▯", "▱", "◖", "◷"][index]}</span>{item}</button>)}
      </nav>
      <section id="store-products" className="store-collection store-width">
        <div className="store-section-heading"><h2>The collection. <span>Fresh ideas, familiar possibilities.</span></h2><p aria-live="polite">{visibleProducts.length} {visibleProducts.length === 1 ? "concept" : "concepts"}</p></div>
        <div className="store-product-grid">
          {visibleProducts.map((product) => <button type="button" className={`store-product tone-${product.tone}`} key={product.id} onClick={() => openProduct(product)} aria-label={`Explore ${product.name}`}><span className="store-eyebrow">{product.tag}</span><h3>{product.name}</h3><p>{product.description}</p><ProductArt type={product.art} tone={product.tone} /><span className="store-product-bottom">Explore the concept <span aria-hidden="true">↗</span></span></button>)}
        </div>
      </section>
      <section className="store-width store-values">
        <h2>A little more intention. <span>In every detail.</span></h2>
        <div className="store-value-grid"><article><span aria-hidden="true">01</span><h3>Designed, not duplicated.</h3><p>Independent branding, original device illustrations, and a point of view all our own.</p></article><article><span aria-hidden="true">02</span><h3>Explore at your pace.</h3><p>No checkout countdowns, no reservations, and no purchases. Just room to look around.</p></article><article><span aria-hidden="true">03</span><h3>A lighter footprint online.</h3><p>No advertising scripts, analytics, contact forms, or cookies are added by this Store page.</p></article></div>
      </section>
      <section id="about-store" className="store-width store-about"><div><p className="store-eyebrow">ABOUT APPLE CLONE</p><h2>Made for curiosity.<br /><span>Not your shopping bag.</span></h2></div><div><p>This Store is a portfolio design exercise. Every illustrated device is fictional: specifications, availability, warranties, and delivery are not offered. No payment or personal information is requested.</p><p>Apple Clone is an independent, unofficial demo and is not affiliated with Apple. Mac, iPhone, and Support in the navigation open official Apple websites, whose own privacy policies apply.</p><button type="button" className="store-text-button" onClick={openPrivacy}>Read the privacy note ↗</button></div></section>
      <footer className="store-footer store-width"><a className="store-brand" href="/">Apple Clone</a><span>Unofficial design demo. Not affiliated with Apple.</span><button type="button" onClick={openPrivacy}>Privacy note</button><a href="/">Back to iPhone showcase ↗</a></footer>
      <dialog className="store-dialog" ref={dialogRef} aria-labelledby="store-dialog-title" onClick={(event) => { if (event.target !== event.currentTarget) return; const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialogRef.current.close(); }}>
        <button className="store-dialog-close" type="button" aria-label="Close details" onClick={() => dialogRef.current.close()}>×</button>
        <p className="store-eyebrow">{showPrivacy ? "TRANSPARENCY FIRST" : "APPLE CLONE / DESIGN CONCEPT"}</p>
        <h2 id="store-dialog-title">{showPrivacy ? "Your visit, explained." : selectedProduct?.name}</h2>
        {showPrivacy ? <><p>This Store page adds no analytics, advertising scripts, cookies, browser storage, or personal-data forms. Category selections and product previews stay in temporary page memory and reset when the page reloads.</p><p>The site is hosted by Vercel. Like other hosting providers, it may process technical request information such as IP addresses and server logs to deliver and secure the site. This is not a claim that hosting involves no data processing.</p><p>External Apple and YouTube links take you to third-party sites with their own privacy practices. No external embeds or third-party requests are needed to display the Store artwork.</p><a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel privacy policy (new tab) ↗</a></> : selectedProduct && <><ProductArt type={selectedProduct.art} tone={selectedProduct.tone} /><p>{selectedProduct.detail}</p><p className="store-disclaimer">Fictional design concept. Not for sale. No technical specifications or performance claims are implied.</p></>}
      </dialog>
    </div>
  );
}

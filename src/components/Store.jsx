import { useEffect, useRef, useState } from "react";
import "./Store.css";

const categories = ["All", "Design", "Performance", "Camera", "Finishes"];
const products = [
  { id: "titanium", category: "Design", name: "A closer look at titanium.", tag: "THE MATERIAL STORY", description: "Explore the texture, the edges, and the details.", image: "explore2.jpg", alt: "Close-up of the titanium side and buttons of iPhone 15 Pro", detail: "This close-up highlights the brushed finish and side-button design in the supplied iPhone 15 Pro photography." },
  { id: "chip", category: "Performance", name: "Meet A17 Pro.", tag: "UNDER THE SURFACE", description: "A different perspective on the chip inside.", image: "chip.jpeg", alt: "Apple A17 Pro chip graphic", detail: "The supplied A17 Pro graphic gives the processor its own place in this visual collection. This demo does not provide benchmarks or performance guarantees." },
  { id: "camera", category: "Camera", name: "Every angle has a story.", tag: "THROUGH THE LENS", description: "Get closer to the camera design.", image: "explore1.jpg", alt: "Close-up of the rear camera lenses on iPhone 15 Pro", detail: "Explore the camera housing, lens rings, and metallic edge through the supplied close-up image. This is product photography, not a sample photo taken with the camera." },
  ...[
    { id: "natural", name: "Natural Titanium", image: "yellow.jpg" },
    { id: "blue", name: "Blue Titanium", image: "blue.jpg" },
    { id: "white", name: "White Titanium", image: "white.jpg" },
    { id: "black", name: "Black Titanium", image: "black.jpg" },
  ].map((finish) => ({ ...finish, category: "Finishes", tag: "THE FINISH COLLECTION", description: "A screen-inspired colour study.", alt: `${finish.name} abstract iPhone wallpaper in a landscape phone frame`, framed: true, detail: `A visual study using the supplied ${finish.name} wallpaper and phone-frame image. The wallpaper is not a photograph of the phone's exterior finish; colours are illustrative and vary by display.` })),
];

function ProductArt({ product }) {
  return (
    <div className={`store-photo ${product.framed ? "store-photo-framed" : `store-photo-${product.id}`}`}>
      <img src={`/assets/images/${product.image}`} alt={product.alt} loading="lazy" decoding="async" width={product.framed ? 768 : product.id === "chip" ? 360 : product.id === "camera" ? 768 : 1028} height={product.framed ? 1664 : product.id === "chip" ? 360 : product.id === "camera" ? 819 : 684} />
      {product.framed && <img className="store-phone-frame" src="/assets/images/frame.png" alt="" loading="lazy" decoding="async" width="1392" height="680" />}
    </div>
  );
}

export default function Store() {
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const dialogRef = useRef(null);
  const visibleProducts = products.filter((product) => category === "All" || product.category === category);

  useEffect(() => {
    document.title = "Apple Clone | iPhone Collection";
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
        <div><p className="store-eyebrow">APPLE CLONE / IPHONE COLLECTION</p><h1>Store.<br /><span>Take a closer look at Pro.</span></h1><p>Discover the materials, camera details, and colours of iPhone 15 Pro.</p></div>
        <a className="store-intro-note" href="#about-store"><span className="store-note-symbol" aria-hidden="true">?</span><span>New around here?<br /><strong>Get to know the collection ↗</strong></span></a>
      </section>
      <section className="store-width store-hero" aria-label="iPhone 15 Pro titanium showcase">
        <div className="store-hero-panel">
          <div className="store-hero-copy"><p className="store-eyebrow">IPHONE 15 PRO / A VISUAL EXPLORATION</p><h2>Pro, from a<br /><span>different angle.</span></h2><a href="#store-products">Explore the collection <span aria-hidden="true">↗</span></a></div>
          <img src="/assets/images/hero.jpeg" alt="Side profile of iPhone 15 Pro over a textured Titanium wordmark" width="2000" height="600" fetchPriority="high" />
        </div>
      </section>
      <nav className="store-categories store-width" aria-label="Product categories">
        {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}><span className="category-symbol" aria-hidden="true"><img src={`/assets/images/${{ All: "hero.jpeg", Design: "explore2.jpg", Performance: "chip.jpeg", Camera: "explore1.jpg", Finishes: "blue.jpg" }[item]}`} alt="" width="70" height="62" loading="lazy" /></span>{item}</button>)}
      </nav>
      <section id="store-products" className="store-collection store-width">
        <div className="store-section-heading"><h2>The collection. <span>Details worth exploring.</span></h2><p aria-live="polite">{visibleProducts.length} {visibleProducts.length === 1 ? "preview" : "previews"}</p></div>
        <div className="store-product-grid">
          {visibleProducts.map((product) => <button type="button" className="store-product store-photo-card" key={product.id} onClick={() => openProduct(product)} aria-label={`Explore ${product.name}`}><span className="store-eyebrow">{product.tag}</span><h3>{product.name}</h3><p>{product.description}</p><ProductArt product={product} /><span className="store-product-bottom">View the details <span aria-hidden="true">↗</span></span></button>)}
        </div>
      </section>
      <section className="store-width store-values">
        <h2>A little more intention. <span>In every detail.</span></h2>
        <div className="store-value-grid"><article><span aria-hidden="true">01</span><h3>Details, up close.</h3><p>Supplied iPhone photography, original page styling, and room to explore the little things.</p></article><article><span aria-hidden="true">02</span><h3>Explore at your pace.</h3><p>No checkout countdowns, no reservations, and no purchases. Just room to look around.</p></article><article><span aria-hidden="true">03</span><h3>A lighter footprint online.</h3><p>No advertising scripts, analytics, contact forms, or cookies are added by this Store page.</p></article></div>
      </section>
      <section id="about-store" className="store-width store-about"><div><p className="store-eyebrow">ABOUT APPLE CLONE</p><h2>Made for curiosity.<br /><span>Not your shopping bag.</span></h2></div><div><p>This Store is a portfolio design exercise featuring supplied iPhone 15 Pro images. Apple names and product imagery belong to their respective rights holders. No sales, availability, warranties, or delivery are offered. No payment or personal information is requested.</p><p>Apple Clone is an independent, unofficial demo and is not affiliated with Apple. Mac, iPhone, and Support in the navigation open official Apple websites, whose own privacy policies apply.</p><button type="button" className="store-text-button" onClick={openPrivacy}>Read the privacy note ↗</button></div></section>
      <footer className="store-footer store-width"><a className="store-brand" href="/">Apple Clone</a><span>Unofficial design demo. Not affiliated with Apple.</span><button type="button" onClick={openPrivacy}>Privacy note</button><a href="/">Back to iPhone showcase ↗</a></footer>
      <dialog className="store-dialog" ref={dialogRef} aria-labelledby="store-dialog-title" onClick={(event) => { if (event.target !== event.currentTarget) return; const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialogRef.current.close(); }}>
        <button className="store-dialog-close" type="button" aria-label="Close details" onClick={() => dialogRef.current.close()}>×</button>
        <p className="store-eyebrow">{showPrivacy ? "TRANSPARENCY FIRST" : "APPLE CLONE / IPHONE COLLECTION"}</p>
        <h2 id="store-dialog-title">{showPrivacy ? "Your visit, explained." : selectedProduct?.name}</h2>
        {showPrivacy ? <><p>This Store page adds no analytics, advertising scripts, cookies, browser storage, or personal-data forms. Category selections and product previews stay in temporary page memory and reset when the page reloads.</p><p>The site is hosted by Vercel. Like other hosting providers, it may process technical request information such as IP addresses and server logs to deliver and secure the site. This is not a claim that hosting involves no data processing.</p><p>External Apple and YouTube links take you to third-party sites with their own privacy practices. No external embeds or third-party requests are needed to display the Store artwork.</p><a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel privacy policy (new tab) ↗</a></> : selectedProduct && <><ProductArt product={selectedProduct} /><p>{selectedProduct.detail}</p><p className="store-disclaimer">Unofficial visual showcase. Not for sale. Product names and images belong to their respective rights holders.</p></>}
      </dialog>
    </div>
  );
}

# Apple Clone — Black, Blue & Violet

Visual customization of the supplied `Apple_Website_Clone-main` React/Vite project for Bnl28.

- Repository: https://github.com/Bnl28/apple-clone
- Existing deployment: https://bnl-studio.vercel.app (may not include the latest repository updates).
- This repository is not yet connected to a separate Vercel deployment.

## Scope

The supplied hero and highlight videos are retained within a shared premium black, electric-blue, and violet visual design. The homepage has a gradient editorial hero, framed product film, collection highlight strip, larger camera/material/chip feature cards, and working Store calls to action instead of a pretend purchase button and unverified pricing.

The latest homepage refresh adds a cinematic film frame, titanium image story, four framed wallpaper studies, and footer navigation. All media uses the supplied local assets; wallpaper studies are explicitly distinguished from exterior finishes. The highlights player has four labelled, keyboard-accessible chapter buttons and native video controls instead of the old animated carousel. Chapters load on selection and do not start automatically or advance unexpectedly; the hero loops muted unless reduced motion is enabled. Media load failures show an explicit message and a direct video link.

All four pages provide an Image tone control: Cool cyan applies a non-destructive CSS treatment to product images and the homepage hero video; Original removes it. Source photographs are unchanged. The treatment is illustrative, not an accurate representation of exterior product colours. This setting lives only in page memory, resets on reload, and is also applied to Store preview dialogs. Video highlights and the archival Mac clip retain their original colours.

All main navigation links open internal pages in the same tab: Store (`/store`), Mac (`/mac`), iPhone (`/`), and Support (`/support`). The current page is identified with `aria-current`. Mac features locally hosted Creative Commons MacBook photos and a user-controlled archival MagSafe clip, with visible source and licence credits. Support has a photographic introduction, expandable FAQs, and explicitly labelled official resources. No support, login, or payment data is collected. Vercel rewrites support direct visits and refreshes for each internal route.

The Mac page mirrors the iPhone homepage layout: large gradient product title, framed muted looping video with native controls, three-item highlight strip, an editorial image-card grid, a highlights panel, and a closing Store link. Mac photographs link to their full local images; film links return to the video hero. The archival clip remains clearly labelled and is not represented as an Apple promotional film. Its original resolution is limited, so the hero keeps it contained rather than stretching it across the entire page.

Required Mac media attribution is retained in a compact "Media credits & licences" disclosure near the footer, collapsed by default and expandable with mouse or keyboard.

## Concept Store

The Store's premium theme uses black surfaces with electric-blue/violet gradients, a larger editorial hero, pill-shaped category filters, and a two-column collection of larger image cards (one column on mobile). The All view leads with a full-width titanium image feature. Navigation, buttons, and colour accents are coordinated across all four pages. Image tone selection remains available throughout.

Broad Store layout patterns were reviewed against Apple's official Store: a category-navigation strip, editorial spotlight, help shortcuts, and quick links. This adaptation uses original layout styling and copy, not Apple's page code or new marketing media. The Mac shortcut uses an original illustrated notebook; iPhone uses the supplied photography. Mac, iPhone, and Support shortcuts navigate internally; Colour studies filters the collection to Finishes, and All previews resets the filter. No prices, trade-in offers, specialist services, checkout, or current-lineup claims are implied.

The `/store` page uses original copy and layout styling under the requested Apple Clone project name, with the owner's supplied iPhone 15 Pro photography replacing the initial concept illustrations. A Titanium hero, material and camera close-ups, A17 Pro graphic, and four framed wallpaper studies form the collection. Filters cover Design, Performance, Camera, and Finishes. Wallpaper previews are explicitly distinguished from exterior product photographs.

The Store prominently identifies itself as an unofficial, non-affiliated demo; nothing is for sale. Category filters and product-detail dialogs work without a backend, and the Vercel rewrite supports direct visits and refreshes. Images are hosted locally; their rights remain with the respective rights holders. The Store adds no analytics, cookies, storage, contact forms, checkout, or external artwork requests. Its privacy note explains hosting logs and third-party links instead of claiming that hosting involves no data processing. No claim of legal compliance certification is made.

"Watch the film" opens the iPhone 15 Pro introduction chapter (54:03) in Apple's official September 12, 2023 event video, since the standalone film is no longer publicly accessible. "Watch the event" opens the full official event. Both are keyboard-accessible links opening YouTube in a new tab; videos are not copied or hosted by this project.

The source folder in Downloads is unchanged. This Desktop copy is the deployable project.

## Run

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

## Build and deploy

```sh
npm run build
npm run preview
```

Vercel uses the Vite framework, `npm run build`, and the `dist` output directory, configured in `vercel.json`.

## Attribution and rights

### Mac media

- `public/assets/images/macbook-pro-2021.jpg`: [A 2021 14-inch Silver MacBook Pro](https://commons.wikimedia.org/wiki/File:A_2021_14-inch_Silver_MacBook_Pro.jpg), Oops4321, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- `public/assets/images/macbook-pro-retina.jpg`: [MacBook Pro Retina 001](https://commons.wikimedia.org/wiki/File:MacBook_Pro_Retina_001.jpg), SimonWaldherr, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- `public/assets/videos/macbook-magsafe.webm`: [MagSafe on a MacBook](https://commons.wikimedia.org/wiki/File:MagSafe_on_a_MacBook.ogv), Gerolsteiner91, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), Wikimedia Commons VP9 WebM rendition.

Photos are resized Wikimedia renditions; the optional CSS colour treatment changes their presentation, not the saved files. Adapted photo presentations are offered under CC BY-SA 4.0. The original WebM rendition is retained as a fallback; `macbook-magsafe.mp4` is a local H.264 conversion for browser compatibility, and `macbook-magsafe-poster.jpg` is an extracted frame. Both retain CC BY-SA 3.0. The video is silent with a native resolution of 320 × 240, displayed at up to 560 pixels wide in the hero. It demonstrates an older original MagSafe connector, not a current Mac feature or an official promotional film. Native playback controls and a visible load-error message with a download link are provided. The photographs show 2021 and 2016 models; the page does not claim they are the latest lineup. Credits and licence links are visible on the Mac page. No creator endorsement is implied. All media is served locally without third-party embeds.

This is an adaptation of the project supplied by the owner, not a claim of original authorship of the supplied code or media. The owner confirmed permission to modify and publicly publish the supplied project and images. No upstream license or author information was included in the supplied template README; this adaptation does not grant rights to those materials or remove any included notices. Apple and iPhone names and product media belong to their respective rights holders. This showcase is not affiliated with or endorsed by Apple and does not process purchases.

The original project uses React, Vite, Tailwind CSS, and GSAP.

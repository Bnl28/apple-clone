# iPhone website — Black & Cyan

Colour-only customization of the supplied `Apple_Website_Clone-main` React/Vite project for Bnl28.

- Live site: https://bnl-studio.vercel.app
- Repository: https://github.com/Bnl28/bnl-studio

## Scope

The supplied hero, video highlights, copy, and GSAP animations are preserved. The palette uses black page backgrounds, cyan accents, cool-toned typography, and matching carousel progress colours.

The responsive Store, Mac, iPhone, and Support navigation links open the matching official Apple pages in new tabs, with `noopener noreferrer` protection and accessible new-tab labels. All four remain visible on mobile, with cyan hover, keyboard focus, and pressed states. They do not change the showcase content or imply that this site is an official Apple site.

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

This is an adaptation of the project supplied by the owner, not a claim of original authorship of the supplied code or media. The owner confirmed permission to modify and publicly publish the supplied project and images. No upstream license or author information was included in the supplied template README; this adaptation does not grant rights to those materials or remove any included notices. Apple and iPhone names and product media belong to their respective rights holders. This showcase is not affiliated with or endorsed by Apple and does not process purchases.

The original project uses React, Vite, Tailwind CSS, and GSAP.

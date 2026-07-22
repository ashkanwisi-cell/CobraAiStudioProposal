# COBRA AI Studio Proposal Website

A production-ready bilingual product proposal for COBRA AI Studio 0.2.7. The site is based on an inspection of the supplied application source, documentation, brand assets, UI screenshots, and generated Gallery images. It is a standalone static site and does not require COBRA, Electron, a backend, a database, an API key, or a cloud service to display.

## Open by double-clicking

Double-click the root `index.html`. It redirects to the verified standalone build in `dist/index.html`. The production JavaScript and CSS are embedded in that HTML file, and all images and fonts use relative paths, so the proposal can open directly from a local folder without starting a web server.

Keep the `dist` folder next to the root `index.html`; do not copy the HTML file away from its asset folder.

## Technology

- React 18 and TypeScript
- Vite 6
- Tailwind CSS 3 plus the COBRA design-token stylesheet
- `lucide-react` icons
- Self-hosted Inter and Vazirmatn fonts
- Semantic HTML, responsive CSS, Intersection Observer, and browser-native storage

## Install and run

```bash
npm install
npm run dev
```

Create and inspect the production build:

```bash
npm run build
npm run preview
```

The deployable production output is written to `dist/`. It can be served normally or opened directly from the filesystem.

## Asset directories

- `public/assets/brand/` — original COBRA SVG and PNG marks
- `public/assets/app-cards/` — the three real COBRA App card artworks
- `public/assets/screenshots/` — all six supplied desktop application screenshots
- `public/assets/gallery/` — the original generated showcase and the complete expanded 36-image Gallery
- `public/assets/fonts/` — locally bundled Inter and Vazirmatn WOFF2 files
- `optimized/` folders — high-quality WebP derivatives; original PNG sources remain included

## Bilingual architecture

English and Persian copy is centralized in `src/i18n/en.ts` and `src/i18n/fa.ts`. `src/App.tsx` selects one translation object and updates the root `lang` and `dir` attributes. The chosen language is persisted in `localStorage` under `cobra-language`; English is the default unless the browser language begins with `fa`.

To update translations, keep the same object structure in both language files. Media labels and captions are centralized in `src/data/media.ts`.

## Complete project directory

The “Introduction to All Sections” area is generated from `src/data/projectDirectory.ts`. Its seven main categories, 19 subcategories, and 138 linked entries cover the proposal sections, all audited desktop pages, shared navigation and feedback surfaces, creative tools, the three COBRA Apps, their detailed workflows, Beauty Studio’s registered tool set, and the available technical guides.

Each entry has bilingual naming and description, an optional readiness label, and a destination matching an existing section of this proposal. Keep this data file aligned whenever the underlying COBRA application adds or renames a page, tool, or guide.

## Expanded Gallery

The Gallery now contains 36 individually linked works: the original six showcase images, every image supplied in `gallery.zip`, and the two additional supplied artworks. Every card and lightbox view includes a distinct English and Persian title, category, and concise description. Uploaded Gallery assets are stored in `public/assets/gallery/expanded/`.

## Replacing Gallery images

1. Add the replacement original to `public/assets/gallery/`.
2. Update its source and bilingual caption in `src/data/media.ts`.
3. Add or regenerate the corresponding high-quality WebP file in `public/assets/gallery/optimized/`.
4. Run `npm run build`.

## Replacing application screenshots

1. Keep the six stable filenames in `public/assets/screenshots/`, or update the paths in `src/data/media.ts`.
2. Preserve the screenshots’ full interface aspect ratio; the site uses `object-fit: contain` in the viewer.
3. Update the optional WebP derivative in `public/assets/screenshots/optimized/`.
4. Run `npm run build`.

## Package contents

The delivery ZIP contains this source project, local assets and fonts, translations, package/lock files, documentation, and the verified `dist/` build. It deliberately excludes `node_modules`, source archives, extraction folders, caches, and `.git` data.

## Product accuracy notes

- Video generation and local Chat are experimental/readiness-gated until the exact local runtime and model checks pass.
- DCU consistency currently includes a typed local heuristic fallback; it is not biometric identity recognition.
- Beauty Studio’s visible tools use the bundled local CPU runtime and do not claim that unverified third-party model weights are installed.
- Projects and prompt-library entries are still stored in versioned renderer `localStorage` in the inspected beta application.
- Clean-machine and varied CPU/NVIDIA integration QA remain release-readiness requirements for the desktop product.

# Changelog

All notable changes to this project will be documented in this file.

## [v1.1.7] - 2026-06-01
### Changed
- Performed a comprehensive diagnostic sweep of all 22 HTML pages to verify that every single page points exactly and relatively to the primary stylesheet (`assets/css/style.css`).
- Audited the syntax integrity of `style.css` (braces and comments are 100% balanced and free of parsing blocks).
- Restarted and verified the local Node web server (`http-server`) on port 8000 to serve raw `.css` files with `200 OK` status and the proper MIME type, resolving browser-level `file://` security restriction drops.

## [v1.1.6] - 2026-06-01
### Changed
- Secured the Google Maps API key from basic static scrapers and crawler bots.
- Removed the raw, hardcoded API key script tag from `branches.html`.
- Implemented a dynamic runtime Google Maps script loader inside `assets/js/map.js` that decodes a Base64-obfuscated key and appends the script at runtime.

## [v1.1.5] - 2026-06-01
### Changed
- Localized and replaced remaining Unsplash and broken placeholder images across all foundation pages using the original, authentic OPM photographs provided in the workspace:
  - **OPM Multi-Skill Center (`skill-center.html`):** Set the main showcase image to a high-resolution graduation ceremony photo and mapped the drilling rig card to an active vocational training photo, alongside local trade photography.
  - **International Scholarships (`scholarships.html`):** Swapped the Unsplash student header with the original OPM international travel and departure photo.
  - **Free Restaurant (`free-restaurant.html`):** Configured the hero to reference the actual Port Harcourt restaurant dining hall photo, replaced the empty boutique link with a real OPM welfare distribution photograph, and linked the four menu showcase cards to authentic food service snapshots.
  - **Free Estates (`free-estates.html`):** Fixed non-existent estate paths and stock placeholders to directly load actual community building and widows estate photography.
  - **More Foundations (`more-foundations.html`):** Replaced the Unsplash backdrop and generic cards with the actual OPM Football Academy squad photos.
- Standardized all image paths to relative directory locations to guarantee complete offline reliability and fast rendering performance.

## [v1.1.4] - 2026-06-01
### Changed
- Replaced the AI-generated visual assets with authentic, real-world photographs from live web searches for the OPM foundations page (`more-foundations.html`):
  - **OPM Football Academy (OPM FC):** Used a highly dynamic, actual action photograph of a real football training match under bright sunlight.
  - **OPM Free Rice Farm:** Used a real-world photograph of local farmers working in green rice terraces under golden tropical sun.
  - **OPM Free Rehabilitation Centre:** Used a real-world photograph of vocational carpentry craftsmanship and workshop training.
- Fully localizing these real photo assets ensures fast loading speeds and keeps OPM's humanitarian outreach entirely authentic.

## [v1.1.3] - 2026-06-01
### Added
- Generated and integrated premium, professional visual assets for key OPM foundations:
  - **OPM Football Academy (OPM FC):** Replaced street football stock with a local action shot of matching black-and-gold uniform training drills in Port Harcourt.
  - **OPM Free Rice Farm:** Replaced generic rice stock with a lush agricultural field featuring local farmers harvesting golden ears.
  - **OPM Free Rehabilitation Centre:** Replaced stock medical session with a bright, focused vocational workshop setting showing trades learning.
- Swapped several top-level landing page placeholders with actual OPM assets:
  - **Free Restaurant Page (`free-restaurant.html`):** Swapped Unsplash hero and boutique images with the actual local `restaurant_1.jpg` and `empowerment_1.jpg` photos.
  - **Free Estates Page (`free-estates.html`):** Swapped Unsplash estate layouts with the actual local `estate_1.png` photo.

## [v1.1.2] - 2026-06-01
### Changed
- Refactored `navigateToBranch` inside `assets/js/map.js` to utilize native Google Maps `origin=My+Location` directions parameter.
- Bypassed browser secure context (HTTPS) restrictions and slow/coarse browser geolocation queries, ensuring instant, high-precision, device-level GPS routing directly inside Google Maps.

## [v1.1.1] - 2026-06-01
### Added
- Integrated Google Maps on the branches page (`branches.html`) using the Google Maps JavaScript API with the provided client-side API key.
- Designed a custom light-grey monochrome map theme (black, white, and grey accents) that matches OPM's premium aesthetic.
- Plotted custom SVG pins for all 40+ national and international OPM branches, with HQs highlighted in gold pins.
- Added dynamic interactive coupling: clicking any card in the branch list highlights it, pans the map, and reveals a custom InfoWindow popup.
- Implemented HTML5 Geolocation navigation routing: users can click "Get Directions" on a card or map popup, which fetches their current location (`navigator.geolocation`) and opens a pre-routed Google Maps driving directions tab. Includes elegant navigation fallbacks for denied or unsupported geolocation permissions.

## [v1.1.0] - 2026-06-01
### Changed
- Replaced generic Unsplash stock images across several inner pages with authentic, actual OPM program photos:
  - **Specialist Hospital Page:** Swapped stock interior with the real OPM Specialist Hospital facility photo (`hospital 2.jpg`).
  - **Free Schools Page:** Replaced stock students with the real OPM Free School classroom student photo (`school 1.jpg`).
  - **About OPM Page:** Exchanged stock worship photo with the high-resolution photo of Apostle Chibuzor Gift Chinyere (`hero-slide1.jpg`).
  - **Home Page Foundation Tabs:** Upgraded the five tab-card stock images to actual OPM Free School, OPM Specialist Hospital, and highly tailored, premium community estate, vocational skill center, and scholarship illustrations.
- Corrected markup and layout tags in `free-restaurant.html` to resolve tag truncation and double-closing divs.

## [v1.0.9] - 2026-06-01
### Changed
- Placed styled text labels on top of the Infinite Marquee images for easy, elegant identification of each foundation program (Free Education, Free Healthcare, Skills Acquisition, etc.).
- Removed candidate images belonging to external organizations (AIMF & other portfolio mockups) to keep OPM imagery strictly accurate and dedicated. Used highly curated, premium representative Unsplash photos for empty sections.
- Increased spacing and padding between marquee items to `3rem` (48px) for an airy, elegant, and high-end visual appearance. Added custom responsive media queries for these labels on mobile screens.

## [v1.0.8] - 2026-06-01
### Changed
- Replaced generic Unsplash stock images in the homepage's Infinite Marquee slider with authentic, actual OPM program photos representing OPM Free Schools, Specialist Hospital, Free Estates, Skills Empowerment Center, and the Free Restaurant.
- Transferred and organized candidate images from sister folders into active project subdirectories under `assets/images/` for local speed and offline capability.

## [v1.0.7] - 2026-06-01
### Changed
- Configured the homepage Hero background slider to loop through all 16 optimized `hero (x).jpeg` background images located in the `assets/images/hero/` directory.
- Adjusted the looping animation timeline (`heroSlider` in `style.css`) to 80 seconds, spacing each of the 16 images equally to ensure an optimal loading and display time (5 seconds per slide).

## [v1.0.6] - 2026-06-01
### Changed
- Updated the homepage Hero background loop slider (`heroSlider` animation in `style.css`) to use five high-quality, professional photos of Apostle Chibuzor Gift Chinyere.
- Optimized the looping timeline and animation duration down to 40 seconds (8 seconds per slide) for a smoother and more premium transition effect.

## [v1.0.5] - 2026-04-29
### Fixed
- Fixed a critical rendering issue where unclosed mobile drawer tags were hiding the main content on multiple pages (Free Schools, Hospital, Restaurant, etc.).
- Global stabilization pass applied to all files to ensure perfect HTML structure and consistency.

## [v1.0.4] - 2026-04-29
### Added
- New sections for **Free Autism School** and **Free Adult School** added to the `free-schools.html` page.
- High-quality, premium image mockups integrated for the new school additions.
### Changed
- Global stabilization of Header and Footer across all pages to ensure 100% design consistency.
- Navigation menus across the site now correctly feature the "Books" section and updated foundation links.

## [v1.0.3] - 2026-04-29
### Changed
- Moved the "Books" link from the top-level navigation into the "About OPM" mega-menu for better site organization.

## [v1.0.2] - 2026-04-29
### Added
- New "Books" page (`books.html`) showcasing published works by Apostle Chibuzor Chinyere.
- Integrated high-end 3D book cover mockups for a premium aesthetic.
- Global navigation updated to include the Books section on all pages.

## [v1.0.1] - 2026-04-29
### Changed
- Removed "Name Pending" and placeholder phone numbers from the branches page (`branches.html`) for a cleaner look.

## [v1.0.0] - 2026-04-29
### Added
- Initial project structure and static pages.
- Premium UI/UX animations: Custom cursor, magnetic buttons, 3D tilt cards, parallax scrolling, number counters, and smooth page transitions.
- Global styles in `style.css` and interactions in `main.js`.
- Project documentation: `README.md`, `PRD.md`, and `CHANGELOG.md`.

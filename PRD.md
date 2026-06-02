# Product Requirements Document (PRD) - Omega Power Ministries Website

## 1. Purpose
The OPM Worldwide website serves as the digital front-door for **Omega Power Ministries**. It must:
- Communicate the mission, vision, and ministries of OPM.
- Provide fast, intuitive navigation to information about schools, hospitals, skill centers, and events.
- Offer a premium, engaging user experience that reflects the high-quality design standards of modern web portals.

## 2. Scope
- **Pages**: Home, About, Foundations (tabbed grid), Events, Branches, Media, Give, News, etc.
- **Interactivity**: Custom cursor, magnetic buttons, 3D tilt, parallax, counters, page transitions, infinite marquee, hover animations.
- **No server-side logic** - pure static site hosted on any web server or CDN.

## 3. Functional Requirements
- **FR-001**: Sticky header that changes style after scroll.
- **FR-002**: Mobile navigation drawer with animated hamburger.
- **FR-003**: Scroll-reveal animations for sections (`.reveal`).
- **FR-004**: Custom circular cursor that follows the mouse and expands on interactive elements.
- **FR-005**: Magnetic button effect for buttons (`.btn`).
- **FR-006**: Number counters that animate from 0 to target on scroll.
- **FR-007**: Smooth page-transition fade effect.
- **FR-008**: Parallax effect for elements with `.parallax`.
- **FR-009**: 3D tilt for cards using Vanilla-Tilt.
- **FR-010**: Infinite image marquee with pause-on-hover.

## 4. Non-Functional Requirements
- **Performance**: Compress assets, use CSS variables, and minimal JS.
- **Accessibility**: Semantic HTML, alt text for images.
- **Responsive**: Breakpoints at 768px and 1024px.

## 5. Versioning
- `VERSION.txt` holds the current semantic version.
- Every change increments version and updates `CHANGELOG.md`.

/* Replace the existing Barlow Condensed import at the TOP */
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&display=swap');

/* ---------- ARCHIVES FOUNDATION ---------- */

:root {
  color-scheme: dark;
  --color-background: #101014;
  --color-text: #f4f0e9;
  --color-muted: #aaa5b5;
  --color-accent: #c6b4ff;
  --page-padding: clamp(20px, 4vw, 64px);
  --transition-smooth: 350ms ease;
}

/* ---------- RESET ---------- */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  margin: 0;
  min-height: 100%;
  background: var(--color-background);
  color: var(--color-text);
  font-family: "Barlow Condensed", sans-serif;
}

::selection {
  background: var(--color-accent);
  color: var(--color-background);
}

/* ---------- ARCHIVES HEADER ---------- */

.archives-header {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 0px var(--page-padding);
  min-height: 150px;
  position: relative;
  z-index: 1;
  transform: translateY(-21px);
}

.archives-logo img {
  transform: translateX(25px);
  display: block;
  width: 65px;
  height: 65px;
  object-fit: contain;
  filter: brightness(0) saturate(100%) invert(82%) sepia(13%) saturate(1044%) hue-rotate(211deg) brightness(103%) contrast(101%);
}

.archives-logo:hover img {
  filter: brightness(0) saturate(100%) invert(82%) sepia(13%) saturate(1044%) hue-rotate(211deg) brightness(135%) contrast(101%);
  transition: filter 250ms ease;
}

.archives-logo {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  flex-shrink: 0;
}

.archives-logo-flashlight {
  position: absolute;
  top: 50%;
  left: calc(50% + 25px);
  width: 240px;
  height: 240px;
  transform: translate(-50%, -50%);
  pointer-events: none;

  background: radial-gradient(
    ellipse 65px 65px at center,
    rgba(220, 210, 255, 0.18) 0%,
    rgba(190, 175, 255, 0.09) 35%,
    rgba(155, 140, 225, 0.03) 65%,
    transparent 100%
  );

  opacity: 0;
  transition: opacity 350ms ease;
}

.archives-divider {
  width: 2px;
  height: 20px;
  flex-shrink: 0;
  background: rgba(230, 222, 252, 0.65);
}

.archives-title {
  color: #e6defc;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 15px;
  font-weight: 700;
}



/* ---------- ARCHIVES SELECTOR ---------- */

.archives-selector {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: 10;
}

.archives-selector-active {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 24px;
  background: #fff;
  color: #101014;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.06em;
}

/* ---------- GAMES SECTION ---------- */

.archives-games {
  padding: 50px var(--page-padding) 0;
  position: relative;
  z-index: 1;
}

.archives-section-heading {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}

.archives-section-heading h2 {
  margin: 0;
  color: var(--color-text);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0;
}

.archives-section-heading span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 3px 10px;

  color: #e6defc;
  background: #38365d;
  border: none;
  border-radius: 8px;

  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
}

/* ---------- GAME CARDS ---------- */

.archives-game-card {
  position: relative;
  display: block;
  width: 100%;
  min-width: 0;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 12px;
  color: inherit;
  text-decoration: none;
  background: #1b1a22;
}

.archives-game-card:hover .archives-game-image img {
  filter: brightness(1.08);
}

.archives-game-card:hover .archives-game-info::before {
  opacity: 0.08;
}

.archives-game-image {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #1b1a22;
}

.archives-game-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 250ms ease;
}

.archives-game-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 20%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  padding: 10px 16px;
  background: rgba(16, 16, 24, 0.85);
  color: #e6defc;
  isolation: isolate;
}

.archives-game-info::before {
  content: "";
  position: absolute;
  inset: 0;
  background: white;
  opacity: 0;
  transition: opacity 250ms ease;
  z-index: -1;
  pointer-events: none;
}


.archives-game-info h3 {
  margin: 0;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 21px;
  font-weight: 800;
  letter-spacing: 0;
}

.archives-game-info span {
  color: rgba(230, 222, 252, 0.65);
  font-family: "Barlow Condensed", sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.archives-game-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  width: 100%;
}

/* ---------- ARCHIVES MOUSE LIGHT ---------- */

.archives-mouse-light {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background: radial-gradient(
    circle var(--light-radius, 85vmax)
      at var(--light-x, 50%) var(--light-y, 50%),
    rgba(220, 210, 255, var(--light-core, 0.28)) 0%,
    rgba(190, 175, 255, var(--light-inner, 0.20)) 25%,
    rgba(155, 140, 225, var(--light-middle, 0.11)) 55%,
    rgba(120, 105, 190, var(--light-outer, 0.04)) 78%,
    transparent 100%
  );

  opacity: var(--light-opacity, 0.10);
  transition: opacity 900ms ease;
}

@media (pointer: coarse) {
  .archives-mouse-light {
    display: none;
  }
}


/* ========================================
   ARCHIVES — SPLIT-SCREEN NAVIGATION
======================================== */

/* ---------- MENU BUTTON ---------- */

#menu-toggle {
  position: fixed;
  top: 30px;
  right: var(--page-padding);
  z-index: 300;
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--color-text);
  cursor: pointer;
  transition: transform var(--transition-smooth), color var(--transition-smooth);
}

#menu-toggle span {
  display: block;
  width: 25px;
  height: 2px;
  background: currentColor;
  transition: transform var(--transition-smooth), width var(--transition-smooth);
}

#menu-toggle:hover {
  color: var(--color-accent);
}

#menu-toggle:hover span:nth-child(2) {
  width: 17px;
}

/* ---------- SPLIT-SCREEN OVERLAY ---------- */

#navigation-overlay {
  position: fixed;
  inset: 0;
  z-index: 150;
  display: grid;
  grid-template-columns: 60% 40%;
  background: transparent;
  color: var(--color-text);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 400ms ease, visibility 400ms ease;
}

#navigation-overlay.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.navigation-image-panel {
  position: relative;
  min-width: 0;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 16, 24, 0.65);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-right: 1px solid rgba(198, 180, 255, 0.22);
}

.navigation-image-logo {
  display: block;
  width: clamp(160px, 28vw, 360px);
  height: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.navigation-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  padding: 0 7% 28px;
  background: #11111f;
}

/* ---------- NAVIGATION BRAND ---------- */

.navigation-brand {
  position: relative;
  min-height: 150px;
  display: flex;
  align-items: center;
  gap: 18px;
  flex-shrink: 0;
  padding: 30px 0;
  padding-right: 48px;
  color: #e6defc;
  font-size: 15px;
  font-weight: 700;
}

.navigation-brand-logo {
  position: relative;
  white-space: nowrap;
  font-size: 14px;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: filter 250ms ease;
}

.navigation-brand-logo:hover {
  filter: brightness(1.35);
}

.navigation-brand-logo img {
  display: block;
  width: 65px;
  height: 65px;
  object-fit: contain;
  transform: translateX(5px);
  filter: brightness(0) saturate(100%) invert(82%) sepia(13%) saturate(1044%) hue-rotate(211deg) brightness(103%) contrast(101%);
}

.navigation-brand-divider {
  width: 2px;
  height: 20px;
  flex-shrink: 0;
  background: rgba(230, 222, 252, 0.65);
}

.navigation-brand-name {
  min-width: 0;
}

.navigation-logo-flashlight {
  position: absolute;
  top: 50%;
  left: 37px;
  width: 240px;
  height: 240px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  background: radial-gradient(
    ellipse 65px 65px at center,
    rgba(220, 210, 255, 0.18) 0%,
    rgba(190, 175, 255, 0.09) 35%,
    rgba(155, 140, 225, 0.03) 65%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 350ms ease;
}

/* ---------- SCROLLABLE NAVIGATION LINKS ---------- */

.navigation-menu-scroll {
  flex: 0 1 70%;
  height: 70%;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%);
  scrollbar-width: none;
}

.navigation-menu-scroll::-webkit-scrollbar {
  display: none;
}

.navigation-links {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
  padding: 20px 0 36px;
}

.navigation-links a {
  display: block;
  max-width: 100%;
  padding: 2px 0;
  color: #8170aa;
  font-family: "Barlow Condensed", sans-serif;
  font-size: clamp(44px, 4.5vw, 68px);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.035em;
  overflow-wrap: anywhere;
  text-decoration: none;
  transition: color 250ms ease, transform 250ms ease;
}

.navigation-links a[data-page="home"] {
  color: #c084ff;
}

.navigation-links a.is-active:not([data-page="home"]) {
  color: #b9a0ff;
}

.navigation-links a:hover {
  transform: translateX(6px);
}

.navigation-links a:hover:not([data-page="home"]) {
  color: #e2d5ff;
}

/* ---------- LANGUAGE FOOTER ---------- */


.navigation-footer {
  display: flex;
  align-items: center;
  align-self: flex-start;
  flex-shrink: 0;
  gap: 12px;

  padding-top: 75px;
  color: var(--color-text);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.12em;
}

.language-globe {
  display: inline-flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  line-height: 1;
}

.language-globe svg {
  display: block;
  width: 19px;
  height: 19px;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.language-name {
  font-size: 15px;
}

.language-arrow {
  position: relative;
  display: inline-block;
  width: 12px;
  height: 10px;
  margin-left: 2px;
  font-size: 23px;
  line-height: 1;
  transform: translateY(3px);
}

.language-arrow::before,
.language-arrow::after {
  content: "";
  position: absolute;
  top: 3px;
  width: 7px;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
}

.language-arrow::before {
  left: 0;
  transform: rotate(-45deg);
}

.language-arrow::after {
  right: 0;
  transform: rotate(45deg);
}


/* ---------- MENU BUTTON TO X ---------- */

body.menu-open {
  overflow: hidden;
}

body.menu-open #menu-toggle {
  top: 28px;
  right: var(--page-padding);
  width: 52px;
  height: 52px;
  padding: 0;
  gap: 0;
  border-radius: 50%;
  background: #292943;
  color: #c9b8ff;
}

body.menu-open #menu-toggle:hover {
  background: #383653;
  color: #f4f0ff;
}

body.menu-open #menu-toggle span {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 19px;
  height: 2.5px;
  margin: 0;
  border-radius: 2px;
  background: currentColor;
  transform-origin: center;
  transition: transform 350ms ease, opacity 200ms ease;
}

body.menu-open #menu-toggle span:nth-child(1) {
  opacity: 1;
  transform: translate(-50%, -50%) rotate(45deg);
}

body.menu-open #menu-toggle span:nth-child(2) {
  opacity: 0;
  transform: translate(-50%, -50%) scaleX(0);
}

body.menu-open #menu-toggle span:nth-child(3) {
  opacity: 1;
  transform: translate(-50%, -50%) rotate(-45deg);
}

/* ---------- RESPONSIVE NAVIGATION ---------- */

@media (max-width: 700px) {
  #navigation-overlay {
    grid-template-columns: 34% 66%;
  }

  .navigation-panel {
    padding: 0 18px 22px;
  }

  .navigation-brand {
    min-height: 125px;
    gap: 9px;
    padding-right: 42px;
    font-size: 12px;
  }

  .navigation-brand-logo {
    font-size: 10px;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .navigation-links a {
    font-size: clamp(21px, 5vw, 32px);
  }

  body.menu-open #menu-toggle {
    top: 16px;
    right: 16px;
    width: 44px;
    height: 44px;
  }

  .navigation-footer {
    gap: 7px;
    font-size: 12px;
  }
}

@media (max-width: 600px) {
  #navigation-overlay {
    padding-top: 90px;
  }

  .navigation-links {
    gap: 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  #navigation-overlay,
  #navigation-overlay *,
  #menu-toggle,
  #menu-toggle span {
    transition-duration: 0.01ms !important;
  }
}

/* ---------- HIDE HOMEPAGE LOGO RULES ---------- */

body.menu-open .archives-logo {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

/* ---------- NAVIGATION FLASHLIGHT POSITION ---------- */

#navigation-overlay #flashlight {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

#navigation-overlay .navigation-image-panel,
#navigation-overlay .navigation-panel {
  position: relative;
  z-index: 1;
}

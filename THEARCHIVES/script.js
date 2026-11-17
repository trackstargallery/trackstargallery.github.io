document.addEventListener("DOMContentLoaded", () => {

  // ----------------------------------------
  // ARCHIVES LOGO FLASHLIGHT
  // ----------------------------------------

  const archivesLogo = document.querySelector(".archives-logo");
  const archivesLogoFlashlight = document.querySelector(".archives-logo-flashlight");

  if (archivesLogo && archivesLogoFlashlight) {
    archivesLogo.addEventListener("mouseenter", () => {
      archivesLogoFlashlight.style.opacity = "1";
    });

    archivesLogo.addEventListener("mouseleave", () => {
      archivesLogoFlashlight.style.opacity = "0";
    });
  }

  // ----------------------------------------
  // ARCHIVES — SMOOTH MOUSE FLASHLIGHT
  // ----------------------------------------

  const archivesLight = document.querySelector(".archives-mouse-light");

  if (archivesLight && window.matchMedia("(pointer: fine)").matches) {

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    let currentX = targetX;
    let currentY = targetY;

    let targetBrightness = 0.20;
    let currentBrightness = targetBrightness;

    let currentRadius = 85;
    let targetRadius = 85;

    let currentRings = [0.28, 0.20, 0.11, 0.04];
    let targetRings = [0.28, 0.20, 0.11, 0.04];

    let animationFrame = null;

    function animateArchivesLight() {
      const positionEase = 0.009;
      const brightnessEase = 0.035;
      const ringEase = 0.025;

      currentX += (targetX - currentX) * positionEase;
      currentY += (targetY - currentY) * positionEase;

      currentBrightness +=
        (targetBrightness - currentBrightness) * brightnessEase;

      currentRadius += (targetRadius - currentRadius) * ringEase;

      currentRings = currentRings.map((value, index) =>
        value + (targetRings[index] - value) * ringEase
      );

      archivesLight.style.setProperty("--light-x", `${currentX}px`);
      archivesLight.style.setProperty("--light-y", `${currentY}px`);
      archivesLight.style.setProperty("--light-opacity", currentBrightness.toFixed(3));
      archivesLight.style.setProperty("--light-radius", `${currentRadius}vmax`);
      archivesLight.style.setProperty("--light-core", currentRings[0].toFixed(3));
      archivesLight.style.setProperty("--light-inner", currentRings[1].toFixed(3));
      archivesLight.style.setProperty("--light-middle", currentRings[2].toFixed(3));
      archivesLight.style.setProperty("--light-outer", currentRings[3].toFixed(3));

      const stillMoving =
        Math.abs(targetX - currentX) > 0.15 ||
        Math.abs(targetY - currentY) > 0.15 ||
        Math.abs(targetBrightness - currentBrightness) > 0.002 ||
        Math.abs(targetRadius - currentRadius) > 0.1 ||
        currentRings.some(
          (value, index) => Math.abs(targetRings[index] - value) > 0.002
        );

      if (stillMoving) {
        animationFrame = requestAnimationFrame(animateArchivesLight);
      } else {
        animationFrame = null;
      }
    }

    function startAnimation() {
      if (animationFrame === null) {
        animationFrame = requestAnimationFrame(animateArchivesLight);
      }
    }

    window.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") return;

      targetX = event.clientX;
      targetY = event.clientY;

      const overControl = event.target.closest(
        "a, button, [role='button']"
      );

      const overGameCard = event.target.closest(".archives-game-card");

      targetBrightness = overGameCard
       ? 0.195 
       : overControl 
        ? 0.75 
        : 0.20;

      targetRings = overGameCard
        ? [0.48, 0.34, 0.20, 0.09]
        : [0.28, 0.20, 0.11, 0.04];

      targetRadius = overControl ? 105 : 85;

      startAnimation();
    });

    window.addEventListener("focus", startAnimation);
  }


  // ----------------------------------------
  // ARCHIVES — NAVIGATION MENU
  // ----------------------------------------

  const menuToggle = document.getElementById("menu-toggle");
  const navigationOverlay = document.getElementById("navigation-overlay");

  if (menuToggle && navigationOverlay) {

    const navigationLinks = navigationOverlay.querySelectorAll(
      ".navigation-links a"
    );

    function openMenu() {
      navigationOverlay.classList.add("is-open");
      navigationOverlay.removeAttribute("inert");
      navigationOverlay.setAttribute("aria-hidden", "false");

      menuToggle.setAttribute("aria-expanded", "true");
      menuToggle.setAttribute("aria-label", "Close navigation menu");

      document.body.classList.add("menu-open");

      const firstLink = navigationOverlay.querySelector(
        ".navigation-links a"
      );

      if (firstLink) firstLink.focus();
    }

    function closeMenu({ restoreFocus = true } = {}) {
      navigationOverlay.classList.remove("is-open");
      navigationOverlay.setAttribute("aria-hidden", "true");
      navigationOverlay.setAttribute("inert", "");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");

      document.body.classList.remove("menu-open");

      if (restoreFocus) menuToggle.focus();
    }

    menuToggle.addEventListener("click", () => {
      const isOpen = navigationOverlay.classList.contains("is-open");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        navigationOverlay.classList.contains("is-open")
      ) {
        closeMenu();
      }
    });

    navigationLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu({ restoreFocus: false });
      });
    });

    // Navigation logo flashlight
    const navigationBrandLogo = navigationOverlay.querySelector(
      ".navigation-brand-logo"
    );

    const navigationLogoFlashlight = navigationOverlay.querySelector(
      ".navigation-logo-flashlight"
    );

    if (navigationBrandLogo && navigationLogoFlashlight) {
      navigationBrandLogo.addEventListener("mouseenter", () => {
        navigationLogoFlashlight.style.opacity = "1";
      });

      navigationBrandLogo.addEventListener("mouseleave", () => {
        navigationLogoFlashlight.style.opacity = "0";
      });
    }
  }

});

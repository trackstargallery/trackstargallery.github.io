
/* ========================================
   VIRTUAL PHOTOGRAPHY — MAIN SCRIPT
======================================== */

document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const home = document.getElementById("home");
  const homeLogo = document.getElementById("home-logo");
  const menuToggle = document.getElementById("menu-toggle");
  const navigationOverlay = document.getElementById("navigation-overlay");

  let menuIsOpen = false;

  // ----------------------------------------
  // 1. LOADING SCREEN
  // ----------------------------------------

  function finishLoading() {
    if (!loadingScreen) return;

    loadingScreen.classList.add("is-hidden");
    loadingScreen.setAttribute("aria-hidden", "true");
  }

  // Wait until the page has loaded, then reveal it.
  // The timeout also gives the loading screen a moment
  // to feel intentional instead of disappearing instantly.

    if (document.readyState === "complete") {
    window.setTimeout(finishLoading, 5000);
  } else {
    window.addEventListener("load", () => {
      window.setTimeout(finishLoading, 5000);
    }, { once: true });
  }

  // Safety fallback: never leave visitors stuck loading.
  window.setTimeout(finishLoading, 10000);


  // ----------------------------------------
  // 2. NAVIGATION MENU
  // ----------------------------------------

  function openMenu() {
    if (!navigationOverlay || !menuToggle) return;

    menuIsOpen = true;

    navigationOverlay.classList.add("is-open");
    navigationOverlay.removeAttribute("inert");
    navigationOverlay.setAttribute("aria-hidden", "false");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation menu");

    document.body.classList.add("menu-open");

    // Move keyboard focus into the open menu.
    const firstLink = navigationOverlay.querySelector("a");

    if (firstLink) {
      firstLink.focus();
    }
  }

  function closeMenu({ restoreFocus = true } = {}) {
    if (!navigationOverlay || !menuToggle) return;

    menuIsOpen = false;

    navigationOverlay.classList.remove("is-open");
    navigationOverlay.setAttribute("aria-hidden", "true");
    navigationOverlay.setAttribute("inert", "");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");

    document.body.classList.remove("menu-open");

    if (restoreFocus) {
      menuToggle.focus();
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      if (menuIsOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }


  // ----------------------------------------
  // 3. HOME LOGO / RESET
  // ----------------------------------------

  function returnHome(event) {
    if (event) event.preventDefault();

    closeMenu({ restoreFocus: false });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    // Future slideshow and game-selection state
    // will also reset here when those features exist.
  }

  if (homeLogo) {
    homeLogo.addEventListener("click", returnHome);
  }

  const navigationBrandLogo = document.querySelector(".navigation-brand-logo");

  if (navigationBrandLogo) {
    navigationBrandLogo.addEventListener("click", returnHome);
  }

  const navigationLogoFlashlight = document.querySelector(".navigation-logo-flashlight");

  if (navigationBrandLogo && navigationLogoFlashlight) {
  navigationBrandLogo.addEventListener("mouseenter", () => {
    navigationLogoFlashlight.style.opacity = "1";
  });

  navigationBrandLogo.addEventListener("mouseleave", () => {
    navigationLogoFlashlight.style.opacity = "0";
  });
  }


  // ----------------------------------------
  // 4. KEYBOARD SUPPORT
  // ----------------------------------------

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuIsOpen) {
      closeMenu();
    }
  });


  // ----------------------------------------
  // 5. NAVIGATION DESTINATIONS
  // ----------------------------------------

  if (navigationOverlay) {
    navigationOverlay.querySelectorAll("[data-page]").forEach((link) => {
      link.addEventListener("click", (event) => {
        const destination = link.dataset.page;

        // Home is the only destination implemented so far.
        if (destination === "home") {
          event.preventDefault();
          returnHome();
          return;
        }

        // Other pages will be connected when we build them.
        event.preventDefault();

        closeMenu({ restoreFocus: false });

        console.log(
          `The "${destination}" page will be implemented later.`
        );
      });
    });
  }

  // ----------------------------------------
  // 6. RANDOM HOMEPAGE SLIDESHOW
  // ----------------------------------------

  const slideshow = document.getElementById("hero-slideshow");

    const images = [
    { src: "images/Horizon1.jpg", game: "Horizon", cover: "title-covers/HorizonTitle.jpg" },
    { src: "images/Horizon3.jpg", game: "Horizon", cover: "title-covers/HorizonTitle.jpg" },
    { src: "images/Horizon4.2.jpg", game: "Horizon", cover: "title-covers/HorizonTitle.jpg" },
    { src: "images/Horizon5.jpg", game: "Horizon", cover: "title-covers/HorizonTitle.jpg" },
    { src: "images/Horizon6.jpg", game: "Horizon", cover: "title-covers/HorizonTitle.jpg" },
    { src: "images/Horizon7.jpg", game: "Horizon", cover: "title-covers/HorizonTitle.jpg" },
    { src: "images/Horizon8.jpg", game: "Horizon", cover: "title-covers/HorizonTitle.jpg" },
    { src: "images/Horizon9.jpg", game: "Horizon", cover: "title-covers/HorizonTitle.jpg" },
    { src: "images/Horizon11.jpg", game: "Horizon", cover: "title-covers/HorizonTitle.jpg" },
    { src: "images/Horizon12.jpg", game: "Horizon", cover: "title-covers/HorizonTitle.jpg" },
    { src: "images/Horizon13.jpg", game: "Horizon", cover: "title-covers/HorizonTitle.jpg" },
    { src: "images/Horizon14.jpg", game: "Horizon", cover: "title-covers/HorizonTitle.jpg" },

    { src: "images/Wolverine1.jpg", game: "Wolverine", cover: "title-covers/WolvTitle.jpg" },
    { src: "images/Wolverine2.jpg", game: "Wolverine", cover: "title-covers/WolvTitle.jpg" },
    { src: "images/Wolverine3.jpg", game: "Wolverine", cover: "title-covers/WolvTitle.jpg" },
    { src: "images/Wolverine5.jpg", game: "Wolverine", cover: "title-covers/WolvTitle.jpg" },
    { src: "images/Wolverine6.jpg", game: "Wolverine", cover: "title-covers/WolvTitle.jpg" },
    { src: "images/Wolverine7.1.jpg", game: "Wolverine", cover: "title-covers/WolvTitle.jpg" }
  ];

  let currentImageIndex = -1;

  function showNextImage() {
    if (!slideshow || images.length === 0) return;

    let nextIndex;

    if (images.length === 1) {
      nextIndex = 0;
    } else {
      do {
        nextIndex = Math.floor(Math.random() * images.length);
      } while (nextIndex === currentImageIndex);
    }

    const nextImage = new Image();
    nextImage.alt = "";
    nextImage.setAttribute("aria-hidden", "true");

    nextImage.onload = () => {
      const previousImage = slideshow.querySelector("img.is-current");

      slideshow.appendChild(nextImage);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          nextImage.classList.add("is-current");
        });
      });

      if (previousImage) {
        previousImage.classList.remove("is-current");

        setTimeout(() => previousImage.remove(), 1500);
      }

      currentImageIndex = nextIndex;
      const gameCover = document.getElementById("game-cover-image");

      if (gameCover) {
        gameCover.src = images[nextIndex].cover;
        gameCover.alt = images[nextIndex].game + " game cover";
      }
    };

    nextImage.onerror = () => {
      console.error("Could not load image:", images[nextIndex]);
    };

    nextImage.src = images[nextIndex].src;
  }

  // Title cover toggle — OFF by default on every page load.
  const coverToggle = document.getElementById("cover-visibility-toggle");
  const gameCover = document.getElementById("game-cover");

  if (coverToggle && gameCover) {
    gameCover.hidden = true;
    coverToggle.setAttribute("aria-pressed", "false");

    function setCoverVisibility(isVisible) {
      gameCover.hidden = !isVisible;
      coverToggle.setAttribute("aria-pressed", String(isVisible));

      const label = isVisible
        ? "Hide game title cover"
        : "Show game title cover";

      coverToggle.setAttribute("aria-label", label);
      coverToggle.setAttribute("title", label);
    }

    coverToggle.addEventListener("click", () => {
      setCoverVisibility(gameCover.hidden);
    });
  }



  showNextImage();
  setInterval(showNextImage, 8000);

  // ----------------------------------------
  // 7. SMOOTH MOUSE FLASHLIGHT
  // ----------------------------------------

  const homePage = document.getElementById("home");

  if (homePage && window.matchMedia("(pointer: fine)").matches) {
  const flashlight = navigationOverlay?.querySelector("#flashlight");

    // Target position follows the mouse.
    // Current position eases toward the target.
    const navRect = navigationOverlay.getBoundingClientRect();

    let targetX = navRect.width / 2;
    let targetY = navRect.height / 2;
    let currentX = targetX;
    let currentY = targetY;

    let targetBrightness = 0.20;
    let currentBrightness = targetBrightness;
    let currentRadius = 85;
    let targetRadius = 85;

    let currentRings = [0.28, 0.20, 0.11, 0.04];
    let targetRings = [0.28, 0.20, 0.11, 0.04];
    let animationFrame = null;

    
    function animateFlashlight() {
    // Keep your favourite mouse-following delay!
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

    flashlight.style.setProperty("--light-x", `${currentX}px`);
    flashlight.style.setProperty("--light-y", `${currentY}px`);
    flashlight.style.setProperty("--light-opacity", currentBrightness.toFixed(3));
    flashlight.style.setProperty("--light-radius", `${currentRadius}vmax`);
    flashlight.style.setProperty("--light-core", currentRings[0].toFixed(3));
    flashlight.style.setProperty("--light-inner", currentRings[1].toFixed(3));
    flashlight.style.setProperty("--light-middle", currentRings[2].toFixed(3));
    flashlight.style.setProperty("--light-outer", currentRings[3].toFixed(3));

    const stillMoving =
        Math.abs(targetX - currentX) > 0.15 ||
        Math.abs(targetY - currentY) > 0.15 ||
        Math.abs(targetBrightness - currentBrightness) > 0.002 ||
        Math.abs(targetRadius - currentRadius) > 0.1 ||
        currentRings.some(
        (value, index) => Math.abs(targetRings[index] - value) > 0.002
        );

    if (stillMoving) {
        animationFrame = requestAnimationFrame(animateFlashlight);
    } else {
        animationFrame = null;
    }
    }


    function startAnimation() {
      if (animationFrame === null) {
        animationFrame = requestAnimationFrame(animateFlashlight);
      }
    }

    window.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") return;

      const navRect = navigationOverlay.getBoundingClientRect();

      targetX = event.clientX - navRect.left;
      targetY = event.clientY - navRect.top;

      const overControl = event.target.closest(
      "a, button, [role='button']"
      );

    // Gradually brighten and expand all rings over controls.
    targetBrightness = overControl ? 0.75 : 0.20;

    targetRings = overControl
    ? [0.48, 0.34, 0.20, 0.09]
    : [0.28, 0.20, 0.11, 0.04];

    targetRadius = overControl ? 105 : 85;

      startAnimation();
    });

    // Don't reset the light on pointerleave or window blur.
    // It remains where it was last seen, including during Alt-Tab.

    window.addEventListener("focus", startAnimation);
  }

  // ----------------------------------------
  // 8. LIVE UTC CLOCK
  // ----------------------------------------

  const utcTime = document.getElementById("utc-time");
  const utcDate = document.getElementById("utc-date");

  function updateUTCClock() {
    const now = new Date();

    if (utcTime) {
      utcTime.textContent = new Intl.DateTimeFormat("en-GB", {
        timeZone: "UTC",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }).format(now);
    }

    if (utcDate) {
      utcDate.textContent = new Intl.DateTimeFormat("en-GB", {
        timeZone: "UTC",
        day: "2-digit",
        month: "short",
        year: "numeric"
      }).format(now);
    }
  }

  updateUTCClock();
  setInterval(updateUTCClock, 1000);

  // ----------------------------------------
  // FOUNDATION READY
  // ----------------------------------------

  console.log("Virtual Photography website initialized.");
});

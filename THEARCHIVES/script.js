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

});
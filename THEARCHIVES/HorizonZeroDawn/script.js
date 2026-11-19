/* ========================================
   HORIZON ZERO DAWN — GALLERY SCRIPT
======================================== */

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

  // Update photograph counters independently
  const updateCounters = () => {

    document.querySelectorAll(".gallery-category").forEach(section => {

      const photoGrid = section.querySelector(".archives-photo-grid");
      const counter = section.querySelector(".archives-image-counter");

      if (!photoGrid || !counter) return;

      counter.textContent =
        photoGrid.querySelectorAll(".archives-photo-card").length;

    });

  };

    updateCounters();

    // Highlight the category currently being viewed
  const categoryTabs = document.querySelectorAll(".category-tab");
  const categorySections = document.querySelectorAll(".gallery-category");

  const updateActiveCategory = () => {

    const marker = window.innerHeight * 0.35;

    categorySections.forEach(section => {

      const rect = section.getBoundingClientRect();

      if (rect.top <= marker && rect.bottom > marker) {

        categoryTabs.forEach(tab => {

          tab.classList.toggle(
            "active",
            tab.getAttribute("href") === `#${section.id}`
          );

        });

      }

    });

  };

  window.addEventListener("scroll", updateActiveCategory);
  updateActiveCategory();

  // Download each category as its own ZIP
  const downloadButtons = document.querySelectorAll(".download-all");

  downloadButtons.forEach(button => {

    button.addEventListener("click", async () => {

      const section = button.closest(".gallery-category");
      const photoGrid = section?.querySelector(".archives-photo-grid");

      if (!photoGrid) return;

      const category = section.id;

      if (!photoGrid) return;

      const photographs = photoGrid.querySelectorAll(
        ".archives-photo-card img"
      );

      if (photographs.length === 0) return;

      if (typeof JSZip === "undefined") {
        alert("The ZIP library could not be loaded. Please refresh the page.");
        return;
      }

      const originalText = button.textContent;

      button.disabled = true;
      button.textContent = "PREPARING ZIP...";

      try {

        const zip = new JSZip();
        const usedNames = new Set();

        for (let index = 0; index < photographs.length; index++) {

          const image = photographs[index];

          const response = await fetch(image.src);

          if (!response.ok) {
            throw new Error(`Could not download photograph ${index + 1}`);
          }

          const imageBlob = await response.blob();

          let filename = image.dataset.filename ||
            decodeURIComponent(
              new URL(image.src).pathname.split("/").pop()
            );

          filename = filename.split("/").pop();

          // Prevent duplicate filenames
          const dotIndex = filename.lastIndexOf(".");
          const extension = dotIndex > 0
            ? filename.slice(dotIndex)
            : "";

          const baseName = dotIndex > 0
            ? filename.slice(0, dotIndex)
            : filename;

          let uniqueName = filename;
          let duplicate = 2;

          while (usedNames.has(uniqueName)) {
            uniqueName = `${baseName}_${duplicate}${extension}`;
            duplicate++;
          }

          usedNames.add(uniqueName);

          zip.file(uniqueName, imageBlob);

          button.textContent =
            `ADDING PHOTOGRAPHS ${index + 1}/${photographs.length}`;

        }

        const zipBlob = await zip.generateAsync({
          type: "blob",
          compression: "STORE"
        });

        const zipUrl = URL.createObjectURL(zipBlob);
        const downloadLink = document.createElement("a");

        const zipName = category === "day-n-nite"
          ? "Day-N-Nite.zip"
          : "HorizonZeroDawn-Screenshots.zip";

        downloadLink.href = zipUrl;
        downloadLink.download = zipName;

        document.body.appendChild(downloadLink);
        downloadLink.click();
        downloadLink.remove();

        setTimeout(() => URL.revokeObjectURL(zipUrl), 1000);

      } catch (error) {

        console.error("ZIP download failed:", error);
        alert("Something went wrong while creating the ZIP file.");

      } finally {

        button.disabled = false;
        button.textContent = originalText;

      }

    });

  });

});
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const fallbackImages = document.querySelectorAll("img[data-fallback-image]");

function activateTab(tabId) {
  document.body.dataset.theme = tabId;

  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === tabId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  tabPanels.forEach((panel) => {
    const isActive = panel.id === tabId;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateTab(button.dataset.tab);
  });
});

fallbackImages.forEach((image) => {
  const frame = image.closest(".source-image");

  function updateImageState() {
    const isLoaded = image.complete && image.naturalWidth > 0;
    frame.classList.toggle("is-loaded", isLoaded);
    frame.classList.toggle("is-missing", !isLoaded);
  }

  image.addEventListener("load", updateImageState);
  image.addEventListener("error", updateImageState);
  updateImageState();
});

activateTab("home");

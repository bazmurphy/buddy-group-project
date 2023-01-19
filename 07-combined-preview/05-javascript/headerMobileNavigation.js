function openMobileNavigation() {
  document.querySelector(".header-mobile-overlay-container").style.height = "100%";
}

function closeMobileNavigation() {
  document.querySelector(".header-mobile-overlay-container").style.height = "0%";
}

export function addMobileNavigationEventListeners() {
  document.querySelector(".header-nav-mobile-circle").addEventListener("click", openMobileNavigation);
  document.querySelector(".header-mobile-overlay-close-button").addEventListener("click", closeMobileNavigation);
}
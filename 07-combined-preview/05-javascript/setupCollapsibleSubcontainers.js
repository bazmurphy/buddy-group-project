function toggleSubcontainersVisibility(selectors) {
  let toggle = false;
  selectors.forEach(selector => {
    const element = document.querySelector(selector);
    toggle ? element.classList.replace("visible-false", "visible-true") : element.classList.replace("visible-true", "visible-false");
    toggle = !toggle;
  })
}

export function setupCollapsibleSubcontainers(target, subContainers) {
  document.querySelector(target).addEventListener("click", () => toggleSubcontainersVisibility(subContainers));
}
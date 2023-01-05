function toggleDisplayNoneAndGrid(selectors) {
  selectors.forEach(selector => {
    const element = document.querySelector(selector);
    const computedStyleOfElement = getComputedStyle(element);
    const displayProperty = computedStyleOfElement.display;
    displayProperty === "none" ? element.style.display = "grid" : element.style.display = "none";
  })
}

document.querySelector(".water-section-two-subcontainer").addEventListener("click", () => toggleDisplayNoneAndGrid([".water-section-two-collapsible-subcontainer-one"]));
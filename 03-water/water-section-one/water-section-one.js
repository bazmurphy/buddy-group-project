function toggleDisplayNoneAndGrid(selectors) {
  selectors.forEach(selector => {
    const element = document.querySelector(selector);
    const computedStyleOfElement = getComputedStyle(element);
    const displayProperty = computedStyleOfElement.display;
    displayProperty === "none" ? element.style.display = "grid" : element.style.display = "none";
  })
}

document.querySelector(".water-section-one-subcontainer").addEventListener("click", () => toggleDisplayNoneAndGrid([".water-section-one-collapsible-subcontainer-one", ".water-section-one-collapsible-subcontainer-two", ".water-section-one-collapsible-subcontainer-three", ".water-section-one-collapsible-subcontainer-four"]));
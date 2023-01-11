function toggleDisplayNoneAndGrid(selectors) {
  let toggle = false;
  selectors.forEach(selector => {
    const element = document.querySelector(selector);
    // const computedStyleOfElement = getComputedStyle(element);
    // const displayProperty = computedStyleOfElement.display;
    toggle ? element.style.display = "grid" : element.style.display = "none";
    toggle = !toggle;
  })
}

export default function(){
  document.querySelector(".water-section-one-subcontainer")
  .addEventListener("click", () => {
    toggleDisplayNoneAndGrid([
      ".water-section-one-collapsible-subcontainer-one", 
      ".water-section-one-collapsible-subcontainer-two", 
      ".water-section-one-collapsible-subcontainer-three", 
      ".water-section-one-collapsible-subcontainer-four"
    ]
  )
});
}
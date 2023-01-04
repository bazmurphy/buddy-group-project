function toggleDisplayNoneAndGrid(selectors) {
  selectors.forEach(selector => {
    const element = document.querySelector(selector);
    // console.log(element);
    const computedStyleOfElement = getComputedStyle(element);
    // console.log(computedStyleOfElement);
    const displayProperty = computedStyleOfElement.display;
    // console.log(displayProperty);
    displayProperty === "none" ? element.style.display = "grid" : element.style.display = "none";
  })
}

const boxOne = document.querySelector(".box-one");
boxOne.addEventListener("click", () => toggleDisplayNoneAndGrid([".box-two", ".box-three", ".box-four"]));

// const boxTwo = document.querySelector(".box-two");
// console.log(boxTwo);
// console.log(boxTwo.style)
// console.log(boxTwo.style.display)
// ^ why is this an empty string?
// because style is associated with the INLINE styles on the element (not ones set by CSS or JS)

// const computedStyles = window.getComputedStyle(boxTwo);
// console.log(computedStyles.getPropertyValue("display"))
// ^ this shows the correct value

// https://stackoverflow.com/questions/6338217/get-a-css-value-with-javascript
// "The element.style property lets you know only the CSS properties that were defined as inline in that element (programmatically, or defined in the style attribute of the element), you should get the computed style."
// https://stackoverflow.com/questions/39679753/javascript-document-getelementbyidel-style-display-returns-empty-string-but
const titleElement = document.querySelector(".title");
const infoOneElement = document.querySelector(".info-one");
const infoTwoElement = document.querySelector(".info-two");
const infoThreeElement = document.querySelector(".info-three");

function getPaddingCSS(selector) {
  const element = window.getComputedStyle(document.querySelector(selector), null);
  return `element: ${selector}\npadding top: ${element.paddingTop} right: ${element.paddingRight} bottom: ${element.paddingBottom} left: ${element.paddingLeft}`;
}

function getRowGapCSS(selector) {
  const element = window.getComputedStyle(document.querySelector(selector), null);
  return `element: ${selector}\nrow-gap: ${element.rowGap}`
}

function changeTitleAndInfo() {
  if (window.innerWidth < 500) {
    titleElement.innerText = "Mobile 0-499px";
    infoOneElement.innerText = getPaddingCSS(".container")
    infoTwoElement.innerText = getPaddingCSS(".subcontainer");
    infoThreeElement.innerText = getRowGapCSS(".subcontainer");
  } else if (window.innerWidth < 900) {
    titleElement.innerText = "Tablet 500-899px";
    infoOneElement.innerText = getPaddingCSS(".container");
    infoTwoElement.innerText = getPaddingCSS(".subcontainer");
    infoThreeElement.innerText = getRowGapCSS(".subcontainer");
  } else {
    titleElement.innerText = "Desktop 900px+";
    infoOneElement.innerText = getPaddingCSS(".container");
    infoTwoElement.innerText = getPaddingCSS(".subcontainer");
    infoThreeElement.innerText = getRowGapCSS(".subcontainer");
  }
}

window.addEventListener("load", changeTitleAndInfo);
window.addEventListener("resize", changeTitleAndInfo);
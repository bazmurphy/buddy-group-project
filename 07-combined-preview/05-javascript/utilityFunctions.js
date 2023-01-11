async function fetchComponent(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    return html;
  } catch (error) {
    (error) => console.log("fetchComponent function Error :", error);
  }
}

function addToDom(html, targetLocation) {
  const parser = new DOMParser();
  const importedHTML = parser.parseFromString(html, "text/html");
  const importedComponent = importedHTML.querySelector("body").children[0];

  if (targetLocation === "header" || targetLocation === "footer") {
    document.querySelector(targetLocation).replaceWith(importedComponent);
  } else if (targetLocation === "main") {
    document.querySelector(targetLocation).appendChild(importedComponent);
  } else {
    console.log(`addDom function Error`);
  }
} 

export async function fetchAndAddComponentsToDom(components) {
  for (let component of components) { 
    console.log(component);
    const html = await fetchComponent(component[0]);
    addToDom(html, component[1]);
  }
}


function toggleDisplayNoneAndGrid(selectors) {
  let toggle = false;
  selectors.forEach(selector => {
    const element = document.querySelector(selector);
    toggle ? element.style.display = "grid" : element.style.display = "none";
    toggle = !toggle;
  });
}

// parameters:
// string - eventElement - element that has the event Listener - example ".water-section-one-subcontainer"
// array of strings - collapsibleElements - elements that display or hide - example [".water-section-one-collapsible-subcontainer-one", ".water-section-one-collapsible-subcontainer-two", ".water-section-one-collapsible-subcontainer-three", ".water-section-one-collapsible-subcontainer-four"]
export function addCollapsibleElements(eventElement, collapsibleElements) {
  document.querySelector(eventElement).addEventListener("click", () => toggleDisplayNoneAndGrid(collapsibleElements));
}
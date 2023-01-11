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
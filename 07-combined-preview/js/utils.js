async function fetchComponent(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    return html;
  } catch (error) {
    (error) => console.log("Failed", error);
  }
}

function addToDome(html, targetLocation) {
  const parser = new DOMParser();
  const importedHTML = parser.parseFromString(html, "text/html");
  const importedComponent = importedHTML.querySelector("body").children[0];
  if (targetLocation !== "main") {
    document.querySelector(targetLocation).replaceWith(importedComponent);
  } else {
    document.querySelector(targetLocation).appendChild(importedComponent);
  }
}

export async function addComponentsArray(components) {
  for (let component of components) {
    const html = await fetchComponent(component[0]);
    addToDome(html, component[1]);
  }
}

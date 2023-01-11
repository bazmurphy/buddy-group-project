const components = [
  ["../../00-overall/02-header/header.html", "header"],
  ["../../03-water/water-hero/water-hero.html", "main"],
  ["../../03-water/water-section-one/water-section-one.html", "main"],
  ["../../03-water/water-section-two/water-section-two.html", "main"],
  ["../../03-water/water-section-three/water-section-three.html", "main"],
  ["../../03-water/water-section-four/water-section-four.html", "main"],
  ["../../03-water/water-section-five/water-section-five.html", "main"],
  ["../../03-water/water-section-six/water-section-six.html", "main"],
  ["../../00-overall/04-footer/footer.html", "footer"],
];

async function fetchComponentAndAdd(url, targetLocation) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const parser = new DOMParser();
    const importedHTML = parser.parseFromString(html, "text/html");
    const importedComponent = importedHTML.querySelector("body").children[0];
    if (targetLocation !== "main") {
      document.querySelector(targetLocation).replaceWith(importedComponent);
    } else {
      document.querySelector(targetLocation).appendChild(importedComponent);
    }
  } catch (error) {
    (error) => console.log("Failed", error)
  }
}

async function addComponentsArray() {
  for (let component of components) {
    await fetchComponentAndAdd(component[0], component[1]);
  }
}
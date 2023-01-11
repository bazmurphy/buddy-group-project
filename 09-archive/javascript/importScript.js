const scripts = [
  "../../03-water/water-section-one/water-section-one.js",
  "../../03-water/water-section-two/water-section-two.js",
  "../../03-water/water-section-three/water-section-three.js",
  "../../03-water/water-section-five/water-section-five.js",
  "../../03-water/water-section-six/water-section-six.js",
];

async function addScriptsArray() {
  for (let script of scripts) {
    const scriptElement = document.createElement("script");
    scriptElement.src = script;
    document.body.appendChild(scriptElement);
  }
}
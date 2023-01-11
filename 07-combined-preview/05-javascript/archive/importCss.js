const stylesheets = [
  "../../00-overall/00-global-styles/global-styles.css",
  "../../00-overall/02-header/header.css",
  "../../00-overall/04-footer/footer.css",
  "../../03-water/water-hero/water-hero.css",
  "../../03-water/water-section-one/water-section-one.css",
  "../../03-water/water-section-two/water-section-two.css",
  "../../03-water/water-section-three/water-section-three.css",
  "../../03-water/water-section-four/water-section-four.css",
  "../../03-water/water-section-five/water-section-five.css",
  "../../03-water/water-section-six/water-section-six.css",
];

async function addStylesheetsArray() {
  for (let stylesheet of stylesheets) {
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = stylesheet;
    document.head.appendChild(linkElement);
  }
}
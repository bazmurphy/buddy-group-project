import { fetchAndAddComponentsToDom } from '../05-javascript/utilityFunctions.js';

const homeComponents = [
    ["../../00-overall/02-header/header.html", "header"],
    ["../../01-home/home-hero/home-hero.html", "main"],
    ["../../01-home/home-section-one/home-section-one.html", "main"],
    // ["../../01-home/home-section-two/home-section-two.html", "main"],
    // ["../../01-home/home-section-three/home-section-three.html", "main"],
    ["../../01-home/home-section-four/home-section-four.html", "main"],
    ["../../00-overall/04-footer/footer.html", "footer"],
  ];

async function initialise(){
  await fetchAndAddComponentsToDom(homeComponents);
}

initialise();
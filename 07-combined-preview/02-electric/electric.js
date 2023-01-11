import { fetchAndAddComponentsToDom } from '../05-javascript/utilityFunctions.js';

const electricComponents = [
    ["../../00-overall/02-header/header.html", "header"],
    ["../../02-electric/electric-hero/electric-hero.html", "main"],
    ["../../02-electric/electric-section-one/electric-section-one.html", "main"],
    ["../../02-electric/electric-section-two/electric-section-two.html", "main"],
    ["../../02-electric/electric-section-three/electric-section-three.html", "main"],
    ["../../02-electric/electric-section-four/electric-section-four.html", "main"],
    ["../../00-overall/04-footer/footer.html", "footer"],
  ];

async function initialise(){
  await fetchAndAddComponentsToDom(electricComponents);
}

initialise();
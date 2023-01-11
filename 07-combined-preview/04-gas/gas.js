import { fetchAndAddComponentsToDom } from '../05-javascript/utilityFunctions.js';

const gasComponents = [
    ["../../00-overall/02-header/header.html", "header"],
    ["../../04-gas/gas-hero/gas-hero.html", "main"],
    ["../../04-gas/gas-section-one/gas-section-one.html", "main"],
    ["../../04-gas/gas-section-two/gas-section-two.html", "main"],
    ["../../04-gas/gas-section-three/gas-section-three.html", "main"],
    ["../../04-gas/gas-section-four/gas-section-four.html", "main"],
    ["../../04-gas/gas-section-five/gas-section-five.html", "main"],
    ["../../04-gas/gas-section-six/gas-section-six.html", "main"],
    ["../../00-overall/04-footer/footer.html", "footer"],
  ];

async function initialise(){
  await fetchAndAddComponentsToDom(gasComponents);
}

initialise();
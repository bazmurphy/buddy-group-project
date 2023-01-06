import {addComponentsArray} from '../../../js/utils.js'
import initExpandSomething from '../../03-water/water-section-one/water-section-one.js'

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

async function init(){
    await addComponentsArray(components)
    initExpandSomething();
}

init()
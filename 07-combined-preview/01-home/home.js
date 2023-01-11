import { homeComponents } from "./../05-javascript/homeComponents.js";
import { fetchAndAddComponentsToDom } from './../05-javascript/fetchAndAddComponentsToDom.js';

console.log(homeComponents);

async function initialise(){
  await fetchAndAddComponentsToDom(homeComponents);
}

initialise();
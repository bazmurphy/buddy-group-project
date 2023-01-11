import { gasComponents } from "./../05-javascript/gasComponents.js";
import { fetchAndAddComponentsToDom } from './../05-javascript/fetchAndAddComponentsToDom.js';

console.log(gasComponents);

async function initialise(){
  await fetchAndAddComponentsToDom(gasComponents);
}

initialise();
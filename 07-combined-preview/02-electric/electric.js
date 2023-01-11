import { electricComponents } from './../05-javascript/electricComponents.js';
import { fetchAndAddComponentsToDom } from './../05-javascript/fetchAndAddComponentsToDom.js';

console.log(electricComponents);

async function initialise(){
  await fetchAndAddComponentsToDom(electricComponents);
}

initialise();
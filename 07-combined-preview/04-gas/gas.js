import { gasComponents } from "./../05-javascript/gasComponents";
import { fetchAndAddComponentsToDom } from './../05-javascript/fetchAndAddComponentsToDom';

console.log(gasComponents);

async function initialise(){
  await fetchAndAddComponentsToDom(gasComponents);
}

initialise();
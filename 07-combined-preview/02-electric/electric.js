import { electricComponents } from './../05-javascript/electricComponents';
import { fetchAndAddComponentsToDom } from './../05-javascript/fetchAndAddComponentsToDom';

console.log(electricComponents);

async function initialise(){
  await fetchAndAddComponentsToDom(electricComponents);
}

initialise();
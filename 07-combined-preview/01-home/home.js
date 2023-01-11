import { homeComponents } from "./../05-javascript/homeComponents";
import { fetchAndAddComponentsToDom } from './../05-javascript/fetchAndAddComponentsToDom';

console.log(homeComponents);

async function initialise(){
  await fetchAndAddComponentsToDom(homeComponents);
}

initialise();
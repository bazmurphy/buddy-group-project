import { gasComponents } from "./../05-javascript/gasComponents.js";
import { fetchAndAddComponentsToDom } from './../05-javascript/fetchAndAddComponentsToDom.js';
import { addMobileNavigationEventListeners } from "./../05-javascript/headerMobileNavigation.js";

async function initialise(){
  await fetchAndAddComponentsToDom(gasComponents);
  addMobileNavigationEventListeners();
}

initialise();
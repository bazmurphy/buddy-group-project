import { waterComponents } from './../05-javascript/waterComponents.js';
import { fetchAndAddComponentsToDom } from './../05-javascript/fetchAndAddComponentsToDom.js';
import { addMobileNavigationEventListeners } from "./../05-javascript/headerMobileNavigation.js";

async function initialise(){
  await fetchAndAddComponentsToDom(waterComponents);
  addMobileNavigationEventListeners();
}

initialise();
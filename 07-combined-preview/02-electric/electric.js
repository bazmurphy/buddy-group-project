import { electricComponents } from './../05-javascript/electricComponents.js';
import { fetchAndAddComponentsToDom } from './../05-javascript/fetchAndAddComponentsToDom.js';
import { addMobileNavigationEventListeners } from "./../05-javascript/headerMobileNavigation.js";

async function initialise(){
  await fetchAndAddComponentsToDom(electricComponents);
  addMobileNavigationEventListeners();
}

initialise();
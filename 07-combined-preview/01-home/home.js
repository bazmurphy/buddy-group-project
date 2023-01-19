import { homeComponents } from "./../05-javascript/homeComponents.js";
import { fetchAndAddComponentsToDom } from './../05-javascript/fetchAndAddComponentsToDom.js';
import { addMobileNavigationEventListeners } from "./../05-javascript/headerMobileNavigation.js";

async function initialise(){
  await fetchAndAddComponentsToDom(homeComponents);
  addMobileNavigationEventListeners();
}

initialise();
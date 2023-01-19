import { waterComponents } from './../05-javascript/waterComponents.js';
// import { 
//   waterSectionOneCollapsibleTarget, 
//   waterSectionOneCollapsibleSubcontainers,
//   waterSectionTwoCollapsibleTarget, 
//   waterSectionTwoCollapsibleSubcontainers,
//   waterSectionThreeCollapsibleTarget, 
//   waterSectionThreeCollapsibleSubcontainers,
//   waterSectionFiveCollapsibleTarget,
//   waterSectionFiveCollapsibleSubcontainers,
//   waterSectionSixCollapsibleTarget,
//   waterSectionSixCollapsibleSubcontainers
//   } from '../05-javascript/waterCollapsibles.js';
import { fetchAndAddComponentsToDom } from './../05-javascript/fetchAndAddComponentsToDom.js';
// import { setupCollapsibleSubcontainers } from './../05-javascript/setupCollapsibleSubcontainers.js';
import { addMobileNavigationEventListeners } from "./../05-javascript/headerMobileNavigation.js";

async function initialise(){
  await fetchAndAddComponentsToDom(waterComponents);
  // setupCollapsibleSubcontainers(waterSectionOneCollapsibleTarget, waterSectionOneCollapsibleSubcontainers);
  // setupCollapsibleSubcontainers(waterSectionTwoCollapsibleTarget, waterSectionTwoCollapsibleSubcontainers);
  // setupCollapsibleSubcontainers(waterSectionThreeCollapsibleTarget, waterSectionThreeCollapsibleSubcontainers);
  // setupCollapsibleSubcontainers(waterSectionFiveCollapsibleTarget, waterSectionFiveCollapsibleSubcontainers);
  // setupCollapsibleSubcontainers(waterSectionSixCollapsibleTarget, waterSectionSixCollapsibleSubcontainers);
  addMobileNavigationEventListeners();
}

initialise();
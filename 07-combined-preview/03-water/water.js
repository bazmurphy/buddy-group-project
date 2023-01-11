import { waterComponents } from './../05-javascript/waterComponents';
import { 
  waterSectionOneCollapsibleTarget, 
  waterSectionOneCollapsibleSubcontainers,
  waterSectionTwoCollapsibleTarget, 
  waterSectionTwoCollapsibleSubcontainers,
  waterSectionThreeCollapsibleTarget, 
  waterSectionThreeCollapsibleSubcontainers,
  waterSectionFiveCollapsibleTarget,
  waterSectionFiveCollapsibleSubcontainers,
  waterSectionSixCollapsibleTarget,
  waterSectionSixCollapsibleSubcontainers
  } from '../05-javascript/waterCollapsibles';
import { fetchAndAddComponentsToDom } from './../05-javascript/fetchAndAddComponentsToDom';
import { setupCollapsibleSubcontainers } from './../05-javascript/setupCollapsibleSubcontainers';

console.log(waterComponents);

async function initialise(){
    await fetchAndAddComponentsToDom(waterComponents);
    setupCollapsibleSubcontainers(waterSectionOneCollapsibleTarget, waterSectionOneCollapsibleSubcontainers);
    setupCollapsibleSubcontainers(waterSectionTwoCollapsibleTarget, waterSectionTwoCollapsibleSubcontainers);
    setupCollapsibleSubcontainers(waterSectionThreeCollapsibleTarget, waterSectionThreeCollapsibleSubcontainers);
    setupCollapsibleSubcontainers(waterSectionFiveCollapsibleTarget, waterSectionFiveCollapsibleSubcontainers);
    setupCollapsibleSubcontainers(waterSectionSixCollapsibleTarget, waterSectionSixCollapsibleSubcontainers);
}

initialise();
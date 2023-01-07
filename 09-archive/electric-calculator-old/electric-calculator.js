// Appliance running cost (p/hr) = Power rating (W) x Electricity unit rate (p/kWh) ÷ 1000
// 34p/kWh.
// This is the average unit rate from the electricity price cap for Direct Debit customers from October 2022 on the standard variable or default tariff.

function applianceRunningCost(powerRating, duration, electricityUnitRate) {
  // console.log("applianceRunningCost function ran");
  return ((powerRating * electricityUnitRate) / 1000) * (duration / 60);
}

function convertToPounds(pence) {
  // console.log("convertToPounds function ran")
  return `£${(pence / 100).toFixed(2)}`;
}

function updateApplianceCost(element) {
  // console.log("updateApplianceCost function ran");
  const electricityUnitRateValue = document.getElementById("electricity-unit-rate").value;
  const applianceWattsValue = document.getElementById(`appliance-${element}-watts`).value;
  const applianceTimeValue = document.getElementById(`appliance-${element}-time`).value;
  const applianceCost = document.getElementById(`appliance-${element}-cost`);
  applianceCost.innerText = convertToPounds(applianceRunningCost(applianceWattsValue, applianceTimeValue, electricityUnitRateValue));
}

function addEventListenerToElement(element) {
  // console.log("addEventListenerToElement function ran");
  document.getElementById(`appliance-${element}-watts`).addEventListener("input", () => updateApplianceCost(element));
  document.getElementById(`appliance-${element}-time`).addEventListener("input", () => updateApplianceCost(element));
}

// changing the Electricty Unit Rate --> updates all Cost values
document.getElementById("electricity-unit-rate").addEventListener("input", () => elements.forEach(element => updateApplianceCost(element)));

const elements = ["grill-oven", "hob", "microwave", "kettle"];

elements.forEach(element => addEventListenerToElement(element));

elements.forEach(element => updateApplianceCost(element));

// const appliances = {
//   electric_shower : { 
//     watts : { 
//       value: 10500,
//       min: 1000,
//       max: 15000,
//       step: 500
//     },
//     minutes : {
//       value: 10,
//       min: 1,
//       max: 15,
//       step: 1,
//     }
//   },
//   kettle : {
//     watts : { 
//       value: 3000,
//       min: 1000,
//       max: 4000,
//       step: 500
//     },
//     minutes : {
//       value: 5,
//       min: 2,
//       max: 6,
//       step: 1,
//     },
//   },
// }

// "Immersion Heater": 3000,
// "Fan Heater": 3000,
// "Kettle": 3000,
// "Grill/Oven": 2400,
// "Hob (per Ring)": 1000,
// "Iron": 3000,
// "Microwave": 1400,
// "Vacuum Cleaner": 900,
// "Slow Cooker": 300,
// "Fridge-Freezer": 300,
// "Games Console": 200,
// "LCD TV": 175,
// "Incandescent Bulb": 100,
// "LED Bulb": 10,
// "Broadband Router": 15,
// "Extractor Fan": 10,
// "Phone/Tablet Charging": 15
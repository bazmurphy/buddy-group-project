const activities = {
  one: {
    description: "Doing activity one saves",
    saving: 55,
    switchStatus: false,
  },
  two: {
    description: "Doing activity two saves",
    saving: 45,
    switchStatus: false,
  },
  three: {
    description: "Doing activity three saves",
    saving: 25,
    switchStatus: false,
  },
  four: {
    description: "Doing activity four saves",
    saving: 30,
    switchStatus: false,
  },
  five: {
    description: "Doing activity five saves",
    saving: 60,
    switchStatus: false,
  },
  six: {
    description: "Doing activity six saves",
    saving: 40,
    switchStatus: false,
  },
  seven: {
    description: "Doing activity seven saves",
    saving: 15,
    switchStatus: false,
  }
}

let totalSavings = 0;

function createActivityRows(activities) {
  const activitiesContainer = document.querySelector(".activities-container");
  for (const activity in activities) {
    const activityContainer = document.createElement("div");
    activityContainer.classList.add("activity-container", `${activity}`);
    const activityTitleElement = document.createElement("div");
    activityTitleElement.classList.add("activity-title", `${activity}`);
    const activitySavingElement = document.createElement("div");
    activitySavingElement.classList.add("activity-saving", `${activity}`);
    const activitySwitchContainerElement = document.createElement("div");
    activitySwitchContainerElement.classList.add("activity-switch-container", `${activity}`);
    const activitySwitchOnElement = document.createElement("div");
    activitySwitchOnElement.classList.add("activity-switch-on", `${activity}`, "on-deactivated");
    activitySwitchOnElement.innerText = "ON";
    const activitySwitchOffElement = document.createElement("div");
    activitySwitchOffElement.classList.add("activity-switch-off", `${activity}`, "off-activated");
    activitySwitchOffElement.innerText = "OFF";
    activitySwitchContainerElement.append(activitySwitchOnElement, activitySwitchOffElement);
    activityContainer.append(activityTitleElement, activitySavingElement, activitySwitchContainerElement);
    activitiesContainer.append(activityContainer);
  }
}

function populateActivities(activities) {
  for (const activity in activities) {
    document.querySelector(`.activity-title.${activity}`).innerText = activities[activity].description;
    document.querySelector(`.activity-saving.${activity}`).innerText = `£${activities[activity].saving}`;
  }
}

function toggleSwitch() {
  const individualActivity = this.classList[1];
  const choice = this.classList[0].split("-")[2];
  const onSwitch = this.parentElement.children[0];
  const offSwitch = this.parentElement.children[1];
  const saving = activities[individualActivity].saving;
  const totalSavingsValueElement = document.querySelector(".total-savings-value");

  if (choice === "on" && activities[individualActivity].switchStatus === false) {
    activities[individualActivity].switchStatus = true;
    onSwitch.classList.replace("on-deactivated", "on-activated");
    offSwitch.classList.replace("off-activated", "off-deactivated");
    totalSavings += saving;
    totalSavingsValueElement.innerText = `£${totalSavings}`;
  } else if (choice === "off" && activities[individualActivity].switchStatus === true) {
    activities[individualActivity].switchStatus = false;
    onSwitch.classList.replace("on-activated", "on-deactivated");
    offSwitch.classList.replace("off-deactivated", "off-activated");
    totalSavings -= saving;
    totalSavingsValueElement.innerText = `£${totalSavings}`;
  }
  
  if (totalSavings > 0) {
    totalSavingsValueElement.classList.replace("total-savings-neutral","total-savings-positive")
  } else if (totalSavings === 0) {
    totalSavingsValueElement.classList.replace("total-savings-positive","total-savings-neutral");
  }
}

function addEventListenersToSwitches() {
  const activitySwitches = document.querySelectorAll(".activity-switch-on, .activity-switch-off");
  activitySwitches.forEach(activitySwitch => activitySwitch.addEventListener("click", toggleSwitch));
}

function initalise() {
  createActivityRows(activities);
  populateActivities(activities);
  addEventListenersToSwitches();
}

initalise();
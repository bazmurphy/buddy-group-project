const titleElement = document.querySelector(".title");

if (window.innerWidth < 500) {
  titleElement.innerText = "Mobile";
} else if (window.innerWidth < 900) {
  titleElement.innerText = "Tablet";
} else {
  titleElement.innerText = "Desktop";
}

function changeTitle() {
  if (window.innerWidth < 500) {
    titleElement.innerText = "Mobile";
  } else if (window.innerWidth < 900) {
    titleElement.innerText = "Tablet";
  } else {
    titleElement.innerText = "Desktop";
  }
}

window.addEventListener("resize", changeTitle);
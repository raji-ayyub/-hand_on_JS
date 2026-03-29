const pointCount = document.querySelector("#pointCount");
const modeStatus = document.querySelector("#modeStatus");
const activityList = document.querySelector("#activityList");
const pageTitle = document.querySelector("#pageTitle");

const sessionState = {
  points: 0,
  calmMode: false
};

function renderSession() {
  pointCount.textContent = sessionState.points;
  modeStatus.textContent = sessionState.calmMode ? "Calm mode" : "Normal mode";
  pageTitle.textContent = sessionState.calmMode
    ? "DOM and events in calm mode"
    : "DOM and events playground";

  document.body.classList.toggle("calm-mode", sessionState.calmMode);
}

function addActivity(message) {
  const listItem = document.createElement("li");
  listItem.textContent = message;

  if (activityList.children.length === 1 && activityList.firstElementChild.textContent.includes("Start interacting")) {
    activityList.innerHTML = "";
  }

  activityList.prepend(listItem);
}

document.querySelector("#pointButton").addEventListener("click", () => {
  sessionState.points += 1;
  renderSession();
  addActivity(`Added a focus point. Total points: ${sessionState.points}.`);
});

document.querySelector("#modeButton").addEventListener("click", () => {
  sessionState.calmMode = !sessionState.calmMode;
  renderSession();
  addActivity(`Switched to ${sessionState.calmMode ? "calm" : "normal"} mode.`);
});

document.querySelector("#resetButton").addEventListener("click", () => {
  sessionState.points = 0;
  sessionState.calmMode = false;
  activityList.innerHTML = "<li>The session was reset. Start interacting again.</li>";
  renderSession();
});

renderSession();

const output = document.querySelector("#output");

// Grouping related values inside one object makes them easier to manage.
const learnerProfile = {
  name: "Ada Nwosu",
  completedLessons: 4,
  totalLessons: 10,
  studyHoursPerDay: 2,
  prefersMorningSessions: true
};

function describeLearner(profile) {
  return `${profile.name} has completed ${profile.completedLessons} of ${profile.totalLessons} lessons and studies ${profile.studyHoursPerDay} hours per day.`;
}

function calculateProgress(profile) {
  return Math.round((profile.completedLessons / profile.totalLessons) * 100);
}

function getMomentumMessage(progress) {
  if (progress >= 70) {
    return "Momentum is strong. Keep building bigger projects.";
  }

  if (progress >= 40) {
    return "You are in a solid practice rhythm. Stay consistent.";
  }

  return "Start small and stay steady. Progress grows with repetition.";
}

function showLearnerSummary() {
  const progress = calculateProgress(learnerProfile);
  const preferredTime = learnerProfile.prefersMorningSessions ? "morning" : "evening";

  output.textContent = [
    describeLearner(learnerProfile),
    `Progress: ${progress}%`,
    `Preferred session: ${preferredTime}`,
    getMomentumMessage(progress)
  ].join("\n");
}

function showScoreBreakdown() {
  const htmlScore = 82;
  const cssScore = 76;
  const javascriptScore = 88;
  const totalScore = htmlScore + cssScore + javascriptScore;
  const averageScore = Math.round(totalScore / 3);
  const passedOverall = averageScore >= 70;

  output.textContent = [
    `HTML score: ${htmlScore}`,
    `CSS score: ${cssScore}`,
    `JavaScript score: ${javascriptScore}`,
    `Average score: ${averageScore}`,
    `Passed overall: ${passedOverall}`
  ].join("\n");
}

document.querySelector("#summaryButton").addEventListener("click", showLearnerSummary);
document.querySelector("#scoreButton").addEventListener("click", showScoreBreakdown);

// Render one example immediately so the page is not empty on load.
showLearnerSummary();

const lessonList = document.querySelector("#lessonList");
const stats = document.querySelector("#stats");

const studyPlan = [
  {
    id: 1,
    title: "HTML structure and semantics",
    durationInMinutes: 35,
    completed: true
  },
  {
    id: 2,
    title: "CSS basics and box model",
    durationInMinutes: 40,
    completed: true
  },
  {
    id: 3,
    title: "Responsive layout practice",
    durationInMinutes: 45,
    completed: false
  },
  {
    id: 4,
    title: "JavaScript fundamentals",
    durationInMinutes: 50,
    completed: false
  }
];

function getCompletedLessons(lessons) {
  return lessons.filter((lesson) => lesson.completed);
}

function getUpcomingLessons(lessons) {
  return lessons.filter((lesson) => !lesson.completed);
}

function getTotalMinutes(lessons) {
  return lessons.reduce((total, lesson) => total + lesson.durationInMinutes, 0);
}

function renderStats(lessons) {
  const completedLessons = getCompletedLessons(lessons).length;
  const totalMinutes = getTotalMinutes(lessons);

  stats.innerHTML = `
    <article class="stat-card">
      <strong>Total lessons:</strong> ${lessons.length}
    </article>
    <article class="stat-card">
      <strong>Completed lessons:</strong> ${completedLessons}
    </article>
    <article class="stat-card">
      <strong>Total study time:</strong> ${totalMinutes} minutes
    </article>
  `;
}

function renderLessons(lessons) {
  lessonList.innerHTML = lessons
    .map((lesson) => {
      const statusText = lesson.completed ? "Completed" : "Upcoming";

      return `
        <article class="lesson-card">
          <h2>${lesson.title}</h2>
          <p><strong>Duration:</strong> ${lesson.durationInMinutes} minutes</p>
          <p><strong>Status:</strong> ${statusText}</p>
        </article>
      `;
    })
    .join("");

  renderStats(lessons);
}

document.querySelector("#showAllButton").addEventListener("click", () => {
  renderLessons(studyPlan);
});

document.querySelector("#showCompletedButton").addEventListener("click", () => {
  renderLessons(getCompletedLessons(studyPlan));
});

document.querySelector("#showUpcomingButton").addEventListener("click", () => {
  renderLessons(getUpcomingLessons(studyPlan));
});

renderLessons(studyPlan);

const signupForm = document.querySelector("#signupForm");
const feedback = document.querySelector("#feedback");
const summary = document.querySelector("#summary");

function collectSubmission(formElement) {
  const formData = new FormData(formElement);

  return {
    name: formData.get("name").trim(),
    email: formData.get("email").trim(),
    track: formData.get("track").trim(),
    goal: formData.get("goal").trim()
  };
}

function validateSubmission(submission) {
  const errors = [];

  if (submission.name.length < 2) {
    errors.push("Please enter a full name with at least 2 characters.");
  }

  if (!submission.email.includes("@")) {
    errors.push("Please enter a valid email address.");
  }

  if (!submission.track) {
    errors.push("Please choose a learning track.");
  }

  if (submission.goal.length < 15) {
    errors.push("Please describe a goal with at least 15 characters.");
  }

  return errors;
}

function showErrors(errors) {
  feedback.className = "feedback error";
  feedback.innerHTML = `
    <strong>Fix these items before submitting:</strong>
    <ul>${errors.map((error) => `<li>${error}</li>`).join("")}</ul>
  `;
}

function showSuccess(message) {
  feedback.className = "feedback success";
  feedback.textContent = message;
}

function renderSummary(submission) {
  summary.innerHTML = `
    <article class="summary-card">
      <h2>Submitted practice plan</h2>
      <p><strong>Name:</strong> ${submission.name}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      <p><strong>Track:</strong> ${submission.track}</p>
      <p><strong>Goal:</strong> ${submission.goal}</p>
    </article>
  `;
}

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const submission = collectSubmission(signupForm);
  const errors = validateSubmission(submission);

  if (errors.length > 0) {
    showErrors(errors);
    summary.innerHTML = "";
    return;
  }

  showSuccess("Your practice plan was submitted successfully.");
  renderSummary(submission);
  signupForm.reset();
});

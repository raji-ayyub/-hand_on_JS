# Lesson 07: Forms and Validation

## What you build

A signup form that validates input and renders a confirmation summary after successful submission.

## Concepts in this lesson

- The `submit` event fires when a form is sent.
- `event.preventDefault()` stops the browser from reloading the page right away.
- `FormData` helps you collect values from form fields.
- Validation checks user input before you continue.
- Feedback areas improve the user experience when something is missing or invalid.

## Files

- `index.html`: form markup and feedback containers
- `styles.css`: form and result styling
- `script.js`: submission and validation logic

## Code walkthrough

- `collectSubmission` turns raw form values into a clean JavaScript object.
- `validateSubmission` returns an array of human-readable error messages.
- If errors exist, the UI shows them and stops.
- If validation passes, the page renders a summary card and resets the form.

## Why this matters

Forms are one of the main ways users interact with the web. Frontend developers need to make them clear, forgiving, and easy to submit correctly.

## Practice tasks

1. Add a phone number field and validate its length.
2. Add a checkbox for agreeing to a study pledge.
3. Show the number of characters typed into the goal field.
4. Keep the submitted summary visible even after a second successful submission by appending new cards.

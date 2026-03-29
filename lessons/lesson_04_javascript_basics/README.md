# Lesson 04: JavaScript Basics

## What you build

A small study-status panel that writes JavaScript output into the page so you can see values change without opening the console first.

## Concepts in this lesson

- `const` stores values that should not be reassigned.
- `let` stores values that can change later.
- Strings, numbers, and booleans are core primitive data types.
- Template literals let you combine values and text cleanly.
- Operators perform math and comparisons.
- Conditionals let your code choose what to do next.

## Files

- `index.html`: buttons and output panel
- `script.js`: the JavaScript logic

## Code walkthrough

- The `learnerProfile` object groups related values together.
- `describeLearner` returns a summary string based on the object data.
- `calculateProgress` uses math to turn completed lessons into a percentage.
- `getMomentumMessage` uses an `if` statement to choose a message based on the progress value.
- The page updates by changing the output element's `textContent`.

## Why this matters

JavaScript is about values plus decisions. Before building big apps, you need to feel comfortable storing information, calculating with it, and changing behavior based on conditions.

## Practice tasks

1. Change the learner data and rerun the summary.
2. Add a new property such as `favoriteTopic`.
3. Add another condition for a progress value below 30.
4. Create a third button that shows your own custom message.

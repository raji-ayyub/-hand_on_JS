# Lesson 06: DOM and Events

## What you build

A focus-session tracker that updates the page when the user clicks buttons.

## Concepts in this lesson

- The DOM is the browser's JavaScript representation of the page.
- `querySelector` lets you grab elements from the document.
- `textContent` updates visible text safely.
- `classList.toggle` changes styles by adding or removing classes.
- `createElement` and `prepend` let you build new elements in JavaScript.
- Event listeners connect user actions to your code.

## Files

- `index.html`: the markup for the tracker
- `styles.css`: layout and state styles
- `script.js`: the DOM and event logic

## Code walkthrough

- The `sessionState` object stores the current point count and whether calm mode is active.
- `renderSession` updates the visible UI based on the current state values.
- `addActivity` creates a new list item and inserts it into the activity feed.
- Each button has an event listener that changes state, updates the page, or both.

## Why this matters

This is where JavaScript starts to feel like frontend development. Instead of only working with data, you are now changing the actual page in response to user behavior.

## Practice tasks

1. Add a button that subtracts one focus point.
2. Add a timestamp to each activity item.
3. Change calm mode so it also updates the page heading text.
4. Limit the activity feed to the newest five entries.

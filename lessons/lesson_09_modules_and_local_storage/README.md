# Lesson 09: Modules and Local Storage

## What you build

A saved-resource board where learners can add helpful links, store them in the browser, and remove them later.

## Important note

This lesson uses ES modules. Run it from a local server so the browser can load the JavaScript files correctly.

## Concepts in this lesson

- `type="module"` lets the browser use `import` and `export`.
- Modules keep code organized by responsibility.
- `localStorage` saves strings in the browser between refreshes.
- Application state is easier to manage when reading, writing, and rendering are separated.

## Files

- `index.html`: the page structure
- `styles.css`: visual styling
- `js/storage.js`: localStorage helpers
- `js/ui.js`: rendering and message helpers
- `js/app.js`: orchestration and event handling

## Code walkthrough

- `storage.js` is responsible for saving and loading data from `localStorage`.
- `ui.js` knows how to show messages and paint resource cards into the page.
- `app.js` collects form input, validates it, updates the resource array, and asks the UI module to rerender.
- This separation makes the code easier to read and easier to change later.

## Why this matters

As projects grow, a single `script.js` becomes hard to manage. Modules help you keep logic focused, and localStorage introduces persistent browser state without needing a backend.

## Practice tasks

1. Add an edit feature for existing resources.
2. Add a sort dropdown for category or title.
3. Add a "clear all" button with a confirmation step.
4. Track the date when each resource was added.

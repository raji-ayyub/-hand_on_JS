# Lesson 10: Capstone User Directory

## What you build

A polished user directory that loads data, shows a friendly UI, and lets the learner search and filter the results.

## Important note

This lesson uses ES modules, so run it from a local server.

## Concepts in this lesson

- Organizing code into modules for data, UI, and app control
- Fetching remote data with a fallback when the network fails
- Storing UI state such as the current search term and selected company
- Filtering arrays based on multiple conditions
- Rendering cards and summary stats into the DOM

## Files

- `index.html`: the app structure
- `css/style.css`: the app styling
- `js/api.js`: remote and fallback data handling
- `js/ui.js`: rendering helpers
- `js/app.js`: state, filtering, and event wiring

## Code walkthrough

- `api.js` fetches users from `jsonplaceholder.typicode.com` and returns fallback data if the request fails.
- `app.js` keeps the current state in one object so the filter logic stays predictable.
- `getFilteredUsers` applies both the search text and the company filter before rendering.
- `ui.js` handles the visual updates so the app logic is not mixed with a large amount of markup.

## Why this matters

This is close to real frontend work. You are combining structure, styling, asynchronous code, data transformation, and UI rendering in one coherent mini application.

## Practice tasks

1. Add sorting by name or city.
2. Add a detail panel that opens when a card is clicked.
3. Save the last used search term in localStorage.
4. Add a loading skeleton instead of plain text while data is being fetched.

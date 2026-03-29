# Lesson 08: Async JavaScript and Fetch

## What you build

A small dashboard that loads a joke and a dog image from public APIs, with loading messages and fallback content if a request fails.

## Concepts in this lesson

- Asynchronous code does not finish instantly.
- `async` and `await` make promise-based code easier to read.
- `fetch` requests data from an API.
- `try` and `catch` let you recover from failures.
- Loading and error states are part of real frontend work.

## Files

- `index.html`: buttons and result areas
- `styles.css`: dashboard styling
- `script.js`: asynchronous fetch logic

## Code walkthrough

- `loadJoke` requests JSON from the joke API, checks `response.ok`, and updates the page.
- `loadDog` does the same for a random dog image.
- If a network request fails, the code falls back to local example data so the lesson still teaches the flow.
- `Promise.all` is used to load both resources together from one button click.

## Why this matters

Most real frontend apps depend on asynchronous work. APIs, uploads, timers, and storage all involve waiting for something. Handling that wait well is a big part of user experience.

## Practice tasks

1. Add a third API-powered card such as a random quote.
2. Disable the buttons while requests are in progress.
3. Show the last-updated time for each card.
4. Add a retry button that appears only after an error.

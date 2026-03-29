# Lesson 05: Functions, Arrays, and Objects

## What you build

A study-plan viewer powered by an array of lesson objects and a few reusable functions.

## Concepts in this lesson

- Functions let you package logic and call it when needed.
- Arrays store ordered collections of values.
- Objects store related values with named properties.
- Methods like `filter`, `map`, and `reduce` help you transform data.
- UI becomes easier when your data structure is clear.

## Files

- `index.html`: buttons, stats, and lesson list containers
- `script.js`: data plus rendering logic

## Code walkthrough

- `studyPlan` is an array of objects. Each object describes one lesson.
- `getCompletedLessons` uses `filter` to keep only lessons that are done.
- `getTotalMinutes` uses `reduce` to add up all study times.
- `renderLessons` converts object data into HTML strings and puts them into the page.
- The three buttons call the same rendering function with different data sets.

## Why this matters

Real frontend apps usually work with collections of objects from APIs, forms, or browser storage. Arrays and objects are not optional; they are everyday tools.

## Practice tasks

1. Add a new lesson object to the `studyPlan` array.
2. Add a new property such as `difficulty`.
3. Create a button that shows only lessons longer than 40 minutes.
4. Change the stats panel to show the number of unfinished lessons too.

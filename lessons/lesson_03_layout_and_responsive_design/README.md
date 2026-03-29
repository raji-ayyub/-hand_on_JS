# Lesson 03: Layout and Responsive Design

## What you build

A responsive learning dashboard section with a hero area, feature cards, and a two-column layout that collapses cleanly on smaller screens.

## Concepts in this lesson

- Flexbox is useful for lining items up in one direction.
- CSS Grid is useful for building card layouts and page sections.
- `minmax()` keeps cards flexible without becoming too small.
- `clamp()` helps text scale more smoothly across screen sizes.
- Media queries let you change the layout based on screen width.

## Files

- `index.html`: dashboard structure
- `styles.css`: layout and responsive rules

## Code walkthrough

- The hero section uses a grid so text and summary cards can sit side by side.
- The track cards use `repeat(auto-fit, minmax(...))` to create a responsive grid without hard-coding the number of columns.
- The workflow section switches from two columns to one column inside a media query so the layout remains readable on mobile.

## Why this matters

Modern frontend work is mostly layout work. Learning how to combine flexbox, grid, spacing, and media queries will make almost every future project easier.

## Practice tasks

1. Add a fourth learning track card.
2. Change the media query width and see when the layout stacks.
3. Increase the `minmax()` minimum width to make each card wider.
4. Add another item to the workflow checklist.

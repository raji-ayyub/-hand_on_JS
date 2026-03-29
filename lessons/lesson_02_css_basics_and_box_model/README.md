# Lesson 02: CSS Basics and Box Model

## What you build

A styled profile card that turns plain HTML into a polished component.

## Concepts in this lesson

- CSS connects to HTML through the `<link>` tag.
- Selectors target elements by tag name, class, or state.
- The box model includes content, padding, border, and margin.
- Custom properties like `--card-background` help keep values reusable.
- `:hover` lets the interface react when the pointer moves over an element.

## Files

- `index.html`: card markup
- `styles.css`: all visual styling for the card

## Code walkthrough

- `:root` stores color and spacing variables so the stylesheet is easier to update.
- The universal selector `*` applies `box-sizing: border-box` so width calculations stay predictable.
- The `.profile-card` rule adds background, padding, shadow, and rounded corners.
- Utility-style classes like `.pill` and `.skill-list` show how one page can be built from smaller visual pieces.

## Why this matters

CSS is not only about decoration. It controls readability, spacing, layout, and the feel of a page. Learning the box model early helps prevent many layout bugs later.

## Practice tasks

1. Change the accent color and update the button hover state to match.
2. Add a third skill pill to the list.
3. Increase the card width and notice how the content reflows.
4. Add a border to the avatar circle.

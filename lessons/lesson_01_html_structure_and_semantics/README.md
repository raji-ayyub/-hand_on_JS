# Lesson 01: HTML Structure and Semantics

## What you build

A simple study page that uses semantic HTML instead of a pile of generic `div` tags.

## Concepts in this lesson

- `<!DOCTYPE html>` tells the browser to use modern HTML rules.
- The `<head>` stores metadata such as the page title and viewport settings.
- Semantic tags like `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` describe the role of each part of the page.
- Headings should be ordered logically so the page is easy to scan.
- Lists, links, and forms are core HTML building blocks.
- A `label` connected to an `input` makes forms easier to use and more accessible.

## Files

- `index.html`: the full markup example

## Code walkthrough

- The `<header>` introduces the page and includes navigation links that jump to sections on the same page.
- The `<main>` holds the primary content. That makes the page easier to understand for screen readers and developers.
- The study schedule uses separate `<article>` elements because each day is a self-contained content block.
- The signup form lives in an `<aside>` because it supports the main content instead of being the main content itself.
- Every form field has a visible label. That matters for usability and accessibility.

## Why this matters

Good HTML gives your CSS and JavaScript a strong foundation. If the structure is clean, styling and interactivity become easier to reason about.

## Practice tasks

1. Add a new navigation link and matching section.
2. Add one more study-day article.
3. Add a phone number field to the form.
4. Change the page title in the `<head>` and confirm the browser tab updates.

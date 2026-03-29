# Hands-On Frontend Tutorial Repository

This repository is organized as a practice-first frontend course.
Each lesson is a folder with:

- a runnable example
- a lesson `README.md`
- a `practice_challenges` folder with build prompts and visual-aid files
- code arranged for learning

The path starts with HTML and CSS fundamentals, then moves into JavaScript, DOM work, events, forms, async code, modules, storage, and a capstone project.
There is also a separate production track for code quality, Git, GitHub, troubleshooting, and deployment.

## How to use this repo

1. Open [index.html](index.html) in your browser to see the lesson map.
2. Open the lesson folder in your editor.
3. Read that lesson's `README.md` before touching the code.
4. Run the example, change something small, and observe what breaks or improves.
5. Complete the practice prompts at the bottom of each lesson note.

## Running the lessons

- Lessons 1 to 8 can usually be opened directly in the browser.
- Lessons 9 and 10 use ES modules. Run them from a local server such as VS Code Live Server or a simple static server.
- The `production_lessons` track can be opened directly in the browser because it is documentation-focused.

## Lesson map

1. `lessons/lesson_01_html_structure_and_semantics`
   Focus: page structure, semantic tags, headings, lists, links, and forms.
2. `lessons/lesson_02_css_basics_and_box_model`
   Focus: selectors, the box model, colors, spacing, borders, shadows, and hover states.
3. `lessons/lesson_03_layout_and_responsive_design`
   Focus: flexbox, grid, responsive spacing, and media queries.
4. `lessons/lesson_04_javascript_basics`
   Focus: variables, data types, operators, template literals, and conditionals.
5. `lessons/lesson_05_functions_arrays_and_objects`
   Focus: reusable functions, arrays, objects, and array methods.
6. `lessons/lesson_06_dom_and_events`
   Focus: selecting elements, updating the page, creating elements, and handling clicks.
7. `lessons/lesson_07_forms_and_validation`
   Focus: form submission, validation, feedback messages, and user-friendly UI.
8. `lessons/lesson_08_async_javascript_and_fetch`
   Focus: asynchronous JavaScript, `fetch`, loading states, error states, and fallback data.
9. `lessons/lesson_09_modules_and_local_storage`
   Focus: splitting code into modules, managing state, and saving data in the browser.
10. `lessons/lesson_10_capstone_user_directory`
    Focus: combining layout, filtering, remote data, fallback data, modules, and UI rendering.

## Production track

1. `production_lessons/production_lesson_01_production_ready_code_practices`
   Focus: readable code, maintainable structure, UI states, accessibility, and merge checklists.
2. `production_lessons/production_lesson_02_git_fundamentals_and_core_commands`
   Focus: staging, committing, branching, diffs, status checks, and safe daily Git flow.
3. `production_lessons/production_lesson_03_github_collaboration_and_pull_requests`
   Focus: remotes, pushes, pull requests, reviews, and team workflow.
4. `production_lessons/production_lesson_04_common_git_errors_and_fixes`
   Focus: common Git problems, recognizable error messages, and safer recovery steps.
5. `production_lessons/production_lesson_05_deployment_to_vercel_from_github`
   Focus: connecting GitHub to Vercel, preview deployments, production deploys, and common deployment checks.

## Recommended study rhythm

- Spend one focused session per lesson.
- Change names, numbers, colors, and text on purpose.
- Break the code, then fix it.
- Repeat the lesson without looking when you can.
- Add the production track after the core frontend lessons or in parallel once you start committing your work regularly.

## What changed from the original repo

- Scattered revision files were absorbed into structured lessons.
- Duplicate AJAX snippets were consolidated into clearer async lessons.
- The strongest existing user-directory example was rebuilt as a capstone instead of being left as an isolated archive.

This repo is meant to be learned by doing. Open a lesson, read the notes, run the code, and edit aggressively.

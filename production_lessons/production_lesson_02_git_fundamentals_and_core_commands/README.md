# Production Lesson 02: Git Fundamentals and Core Commands

## Goal

Understand what Git is tracking and become comfortable with the commands you use most often.

## Mental model

Git is a history system for files in a repository.

The usual flow is:

1. Check the current state with `git status`.
2. Edit files.
3. Review the difference with `git diff`.
4. Stage the intended files with `git add`.
5. Create a commit with `git commit -m "message"`.

## Most common commands

```bash
git status
git add path/to/file
git add .
git diff
git diff --staged
git commit -m "Create DOM lesson activity feed"
git log --oneline --decorate --graph
git branch
git switch -c feature/dom-feed
git switch main
git restore path/to/file
git restore --staged path/to/file
```

## What the commands do

- `git status`: shows changed, staged, and untracked files
- `git diff`: shows unstaged changes
- `git diff --staged`: shows what will be committed
- `git add`: moves changes into the staging area
- `git commit`: creates a saved snapshot
- `git branch`: lists branches
- `git switch -c`: creates and moves to a new branch
- `git restore`: discards local changes in a file
- `git restore --staged`: unstages a file without deleting the edits

## Safe daily workflow

```bash
git status
git switch -c feature/form-validation
# edit files
git diff
git add lessons/lesson_07_forms_and_validation/script.js
git diff --staged
git commit -m "Add form validation feedback messages"
```

## Good commit messages

- Use the imperative mood: `Add`, `Refactor`, `Fix`, `Update`
- Be specific about the change
- Keep one commit focused on one main idea

Better:

```bash
git commit -m "Refactor user directory filtering logic"
```

Weaker:

```bash
git commit -m "stuff"
```

## Practice tasks

1. Create a throwaway repository and practice `status`, `diff`, `add`, and `commit`.
2. Create a new branch, make one file change, and commit it.
3. Stage the wrong file on purpose, then unstage it with `git restore --staged`.
4. Edit a file and discard the change with `git restore`.

# Production Lesson 03: GitHub Collaboration and Pull Requests

## Goal

Learn how local Git work turns into team collaboration through GitHub.

## Core ideas

- Git is local version control.
- GitHub is a hosting and collaboration platform built around Git repositories.
- Teams usually work on feature branches, not directly on `main`.
- Pull requests make changes reviewable before merge.
- Good pull requests are small, focused, and easy to understand.

## Common collaboration flow

```bash
git clone <repository-url>
git switch -c feature/search-filter
# make changes
git add .
git commit -m "Add company filter to user directory"
git push -u origin feature/search-filter
```

Then on GitHub:

1. Open a pull request.
2. Add a clear title and description.
3. Explain what changed and how it was tested.
4. Request review.
5. Respond to review comments.
6. Merge after approval.

## Useful remote commands

```bash
git remote -v
git fetch origin
git pull origin main
git push origin branch-name
```

## Good pull request habits

- Keep the PR focused on one main change.
- Mention the files or areas affected.
- Include test notes such as "tested form validation and empty state".
- Avoid mixing refactors with feature work when possible.
- Read comments with curiosity, not defensiveness.

## Example pull request description

```text
Title:
Add company filter to capstone user directory

Summary:
- added a select input for company filtering
- updated app state to store selected company
- filtered rendered users by search term and company

Testing:
- searched by name
- switched between company options
- verified empty-state message still appears correctly
```

## Practice tasks

1. Create a fake feature branch name for three different tasks.
2. Write one strong pull request title and description for a lesson change.
3. Practice `git fetch` and `git pull` in a test repository.
4. Review one of your own changes as if you were another developer and write two review comments.

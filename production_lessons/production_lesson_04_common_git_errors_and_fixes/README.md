# Production Lesson 04: Common Git Errors and Fixes

## Goal

Recognize common Git problems and recover without panicking or losing work.

## First rule when something feels wrong

Run:

```bash
git status
git branch
git log --oneline --decorate --graph -10
```

These commands tell you where you are, what changed, and what recent history looks like.

## Common problems

### 1. "Everything is staged but I did not mean to stage all of this"

Fix:

```bash
git restore --staged path/to/file
```

### 2. "I changed a file and want to throw away the local edits"

Fix:

```bash
git restore path/to/file
```

Only use this if you really want to discard the local change.

### 3. "I am on the wrong branch"

If your changes are committed:

```bash
git switch correct-branch
git cherry-pick <commit-sha>
```

If your changes are uncommitted and safe to carry:

```bash
git switch -c new-branch-name
```

### 4. "My push was rejected"

Cause:

The remote branch changed after your last pull or fetch.

Typical fix:

```bash
git fetch origin
git pull --rebase origin main
git push origin your-branch
```

### 5. "I have merge conflicts"

Fix flow:

1. Open the conflicted files.
2. Look for conflict markers.
3. Decide which lines to keep.
4. Remove the markers.
5. Stage the resolved files.
6. Continue the merge or rebase.

### 6. "I committed with the wrong message"

Fix for the most recent commit:

```bash
git commit --amend -m "Better commit message"
```

Do this before pushing when possible.

## Error messages you will probably see

- `error: failed to push some refs`
- `error: Your local changes to the following files would be overwritten`
- `CONFLICT (content): Merge conflict in ...`
- `You are in 'detached HEAD' state`
- `fatal: not a git repository`

## Safer mindset

- Prefer inspecting before fixing.
- Avoid `git reset --hard` unless you fully understand the cost.
- Keep risky practice inside a throwaway repository.
- Make frequent small commits so recovery is easier.

## Practice tasks

1. Stage the wrong file and recover.
2. Create a commit on the wrong branch in a test repository and move it.
3. Create a simple merge conflict in two branches and resolve it manually.
4. Rewrite a weak commit message with `git commit --amend`.

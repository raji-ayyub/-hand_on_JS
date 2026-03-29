# Production Lesson 05: Deployment to Vercel from GitHub

## Goal

Learn the standard GitHub-to-Vercel deployment flow for frontend projects so your code can move from a repository to a live URL.

## Verified workflow

This lesson is based on Vercel's official documentation about importing an existing project, deploying Git repositories, and the Vercel for GitHub flow.

The steps below match the current Git-based workflow described in Vercel docs as of:

- September 24, 2025
- December 5, 2025
- January 7, 2026

## What this workflow gives you

- a production deployment when your production branch is updated
- preview deployments for branch pushes and pull requests
- a hosted URL for testing and sharing
- a path to add a custom domain later

## Before you start

Make sure you already have:

1. A GitHub repository with your project pushed to it
2. A Vercel account
3. A project that works correctly locally

Important permission note:

- For a personal GitHub repository, Vercel requires the repository owner to connect it.
- For an organization repository, you need organization ownership or repository access that allows the repo to appear in Vercel.

## Standard deployment flow from GitHub to Vercel

1. Push your project to GitHub.
2. Sign in to Vercel.
3. In the Vercel dashboard, click **New Project**.
4. Under **Import Git Repository**, connect GitHub if you have not already done so.
5. Choose the repository you want to deploy and click **Import**.
6. Review the detected project settings.
7. If needed, set the framework preset, root directory, build command, or output directory.
8. Add any required environment variables.
9. Click **Deploy**.

After the first deployment:

- pushes to other branches create preview deployments
- merges or pushes to the production branch create production deployments

## Typical setup for this repo

For a plain frontend project with HTML, CSS, and JavaScript:

- Framework preset: often static or automatically detected
- Build command: usually none for plain static files
- Output directory: usually project root unless your files are generated elsewhere

If you deploy a framework app later, Vercel usually auto-detects it and sets the build configuration for you.

## Everyday GitHub to Vercel workflow

```bash
git switch -c feature/add-search-filter
# make your changes
git add .
git commit -m "Add search filter to the user directory"
git push -u origin feature/add-search-filter
```

Then:

1. Open the pull request on GitHub
2. Wait for the Vercel preview deployment
3. Test the preview URL
4. Merge the pull request
5. Let Vercel create the production deployment from the production branch

## Common issues

### The repository does not appear in Vercel

Possible causes:

- wrong GitHub account connected
- missing repository permissions
- trying to import a personal repository as a collaborator instead of the owner

### The deployment builds but the app is broken

Possible causes:

- missing environment variables
- wrong root directory
- wrong output directory
- incorrect asset paths

### My preview works but production is outdated

Possible causes:

- the production branch is not the branch you merged into
- the project is connected to a different repository or branch in Vercel settings

## Good habits

- Keep `main` or your chosen production branch stable
- Test preview deployments before merging
- Use focused pull requests
- Set environment variables in Vercel instead of hard-coding secrets
- Re-check project settings after moving files around in the repo

## Practice tasks

1. Create a small practice repository and connect it to Vercel.
2. Push a feature branch and confirm a preview deployment is created.
3. Merge the branch and confirm production updates.
4. Add one environment variable in Vercel for a test project and document what it is used for.
